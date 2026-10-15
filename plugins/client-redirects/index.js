const fs = require("fs");
const path = require("path");

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderRedirect(target) {
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

module.exports = function pluginClientRedirects(context, options) {
  const redirects = options.redirects || [];

  return {
    name: "client-redirects",

    async postBuild({ outDir, baseUrl }) {
      for (const { from, to } of redirects) {
        const target = path.posix.join(baseUrl, to);
        const fromDir = path.join(outDir, from);
        fs.mkdirSync(fromDir, { recursive: true });
        fs.writeFileSync(path.join(fromDir, "index.html"), renderRedirect(target));
      }
    },
  };
};
