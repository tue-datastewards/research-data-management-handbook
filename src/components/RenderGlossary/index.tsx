import React from "react";
import { MoveUpRight } from "lucide-react";
import glossaryData from "@generated/generate-glossary/default/glossary-manifest.json";

function slugify(codataUri: string): string {
  const path = codataUri.replace(/^https:\/\/terms\.codata\.org\/rdmt\//, "");
  return "term-" + path.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export default function RenderGlossary() {
  if (glossaryData.length === 0) {
    return (
      <p>
        No glossary terms found. Add <code>for_glossary: true</code> and a{" "}
        <code>codata_uri</code> to your page front matter.
      </p>
    );
  }

  return (
    <div className="glossary">
      <p className="glossary__intro">
        This glossary is aligned with the{" "}
        <a
          href="https://terms.codata.org/rdmt"
          target="_blank"
          rel="noopener noreferrer"
        >
          CODATA Research Data Management Terminology (RDM-T)
        </a>
        , a SKOS-controlled vocabulary maintained by the{" "}
        <a
          href="https://codata.org/initiatives/data-science-and-stewardship/rdm-terminology-wg"
          target="_blank"
          rel="noopener noreferrer"
        >
          CODATA RDM Terminology Working Group
        </a>
        .
      </p>

      <ul className="glossary__list">
        {glossaryData.map((term, index) => {
          const anchorId = slugify(term.codata_uri);
          return (
            <li key={index} className="glossary__item" id={anchorId}>
              <div className="glossary__item-header">
                <a href={term.permalink} className="glossary__item-link">
                  <strong>{term.term}</strong>
                </a>
                <a
                  href={`https://vocabs.ardc.edu.au/repository/api/lda/codata/codata-research-data-management-terminology/v002/resource?uri=${encodeURIComponent(term.codata_uri)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glossary__codata-badge"
                  title="View in CODATA RDM-T vocabulary"
                >
                  CODATA <MoveUpRight size={12} />
                </a>
              </div>
              {term.codataDefinition ? (
                <div className="glossary__definition">
                  <p className="glossary__definition-text">
                    {term.codataDefinition}
                  </p>
                  <p className="glossary__definition-source">
                    Source:{" "}
                    <a
                      href={`https://vocabs.ardc.edu.au/repository/api/lda/codata/codata-research-data-management-terminology/v002/resource?uri=${encodeURIComponent(term.codata_uri)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CODATA RDM-T
                    </a>
                  </p>
                </div>
              ) : (
                <p className="glossary__no-definition">
                  Definition not available from CODATA
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
