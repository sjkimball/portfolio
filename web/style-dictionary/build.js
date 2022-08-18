const StyleDictionary = require("style-dictionary");

console.log("Build started…");
console.log("\n===============================");

// REGISTER CUSTOM TRANSFORMS

StyleDictionary.registerTransform({
  name: "typography/shorthand",
  type: "value",
  transitive: true,
  matcher: (token) => token.type === "typography",
  transformer: (token) => {
    const { value } = token;
    return `${value.fontWeight} ${value.fontSize}/${value.lineHeight} ${value.fontFamily}`;
  },
});

// REGISTER CUSTOM TRANSFORM GROUPS

StyleDictionary.registerTransformGroup({
  name: "custom/web",
  transforms: [
    "attribute/cti",
    "name/cti/snake",
    "font/flutter/literal",
    "size/px",
    "color/css",
    "typography/shorthand",
  ],
});

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const StyleDictionaryExtended = StyleDictionary.extend(__dirname + "/config.json");

console.log("\nProcessing…");

StyleDictionaryExtended.buildAllPlatforms();

console.log("\nEnd processing");

console.log("\n===============================");
console.log("\nBuild completed!");
