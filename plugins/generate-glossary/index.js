const https = require("https");

const SPARQL_ENDPOINT =
  "https://vocabs.ardc.edu.au/repository/api/sparql/codata_codata-research-data-management-terminology_current";

function fetchSparql(query) {
  return new Promise((resolve, reject) => {
    const url = new URL(SPARQL_ENDPOINT);
    url.searchParams.set("query", query);
    url.searchParams.set("output", "json");

    const req = https.get(url.toString(), { headers: { Accept: "application/sparql-results+json" } }, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Invalid JSON from SPARQL endpoint`));
        }
      });
    });
    req.on("error", reject);
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error("SPARQL request timed out"));
    });
  });
}

async function fetchDefinitions(terms) {
  if (terms.length === 0) {
    return {};
  }

  const uris = terms
    .map((t) => `<${t.codata_uri}>`)
    .join(" ");
  const query = `PREFIX skos: <http://www.w3.org/2004/02/skos/core#> SELECT ?uri ?def WHERE { VALUES ?uri { ${uris} } ?uri skos:definition ?def }`;

  try {
    const result = await fetchSparql(query);
    const definitions = {};
    if (result?.results?.bindings) {
      for (const binding of result.results.bindings) {
        const uri = binding.uri?.value;
        const def = binding.def?.value;
        if (uri && def) {
          definitions[uri] = def;
        }
      }
    }
    return definitions;
  } catch (error) {
    console.warn(
      `[generate-glossary] Failed to fetch definitions from SPARQL endpoint: ${error.message}`,
    );
    return {};
  }
}

module.exports = function pluginGenerateGlossary(context, options) {
  return {
    name: "generate-glossary",

    async allContentLoaded({ allContent, actions }) {
      const docsContent =
        allContent["docusaurus-plugin-content-docs"]?.default;

      if (!docsContent || !docsContent.loadedVersions) {
        return;
      }

      const glossaryTerms = [];

      for (const version of docsContent.loadedVersions) {
        if (!version.docs) continue;

        for (const doc of version.docs) {
          const { frontMatter } = doc;
          if (frontMatter?.for_glossary !== true) continue;
          if (!frontMatter?.codata_uri) continue;

          glossaryTerms.push({
            term: frontMatter.glossary_term || doc.title || "",
            codata_uri: frontMatter.codata_uri,
            permalink: doc.permalink,
          });
        }
      }

      glossaryTerms.sort((a, b) => a.term.localeCompare(b.term));

      console.info(
        `[generate-glossary] Fetching definitions from CODATA SPARQL endpoint...`,
      );
      const definitions = await fetchDefinitions(glossaryTerms);

      for (const term of glossaryTerms) {
        term.codataDefinition = definitions[term.codata_uri] || null;
      }

      return actions.createData(
        "glossary-manifest.json",
        JSON.stringify(glossaryTerms),
      );
    },
  };
};
