const options = {
  packages: [],
  options: {
    keepComments: true,
    beautify: true,
    minify: false,
    validationLevel: "soft",
  },
  includesDir: "templates",
  // Preprocessor that preserves Liquid template syntax
  preprocessors: [
    (rawMJML) => {
      try {
        // Handle Liquid syntax in comments
        const processedMJML = rawMJML
          // Preserve Liquid control flow tags
          .replace(/{%[\s\S]*?%}/g, (match) => `<!--${match}-->`)
          // Don't touch Liquid variables in mj-text
          .replace(/<mj-text[^>]*>([\s\S]*?)<\/mj-text>/g, (match, content) => {
            return match.replace(/<!--\s*({[{%][\s\S]*?[%}]})\s*-->/g, "$1");
          });

        return processedMJML;
      } catch (e) {
        console.error("MJML Preprocessor Error:", e);
        return rawMJML; // On error, return unchanged to preserve content
      }
    },
  ],
};

module.exports = options;
