const React = require("react");

module.exports = function RedirectComponent({ content }) {
  const target = content && content.to;

  React.useEffect(() => {
    if (target) {
      window.location.replace(target);
    }
  }, [target]);

  return null;
};
