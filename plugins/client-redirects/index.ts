import fs from "node:fs";
import path from "node:path";
import type { LoadContext, Plugin } from "@docusaurus/types";

type Redirect = {
  from: string;
  to: string;
};

export type PluginOptions = {
  redirects: Redirect[];
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderRedirect(target: string): string {
  const escaped = escapeHtml(target);
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=${escaped}" />
    <link rel="canonical" href="${escaped}" />
    <meta name="robots" content="noindex" />
    <script>window.location.replace(${JSON.stringify(target)});</script>
    <title>Redirecting…</title>
  </head>
  <body>
    <p>This page has moved to <a href="${escaped}">${escaped}</a>.</p>
  </body>
</html>
`;
}

export default function pluginClientRedirects(
  context: LoadContext,
  options: PluginOptions,
): Plugin<void> {
  const redirects = options.redirects || [];

  return {
    name: "client-redirects",

    async contentLoaded({ actions }) {
      const { addRoute, createData } = actions;

      await Promise.all(
        redirects.map(async ({ from, to }, index) => {
          const content = await createData(
            `redirect-${index}.json`,
            JSON.stringify({ to: path.posix.join(context.baseUrl, to) }),
          );

          addRoute({
            path: from.startsWith("/") ? from : `/${from}`,
            component: require.resolve("./RedirectComponent.tsx"),
            exact: true,
            modules: { content },
          });
        }),
      );
    },

    async postBuild({ outDir, baseUrl }) {
      for (const { from, to } of redirects) {
        const target = path.posix.join(baseUrl, to);
        const fromDir = path.join(outDir, from);
        fs.mkdirSync(fromDir, { recursive: true });
        fs.writeFileSync(path.join(fromDir, "index.html"), renderRedirect(target));
      }
    },
  };
}
