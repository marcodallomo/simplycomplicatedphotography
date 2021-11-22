// module.exports = {
//   globDirectory: "public/",
//   globPatterns: ["**/*.{png,jpg,ico,html,js,json,txt}"],
//   ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
//   swDest: "public/sw.js",
// };

module.exports = {
  globDirectory: "public/",
  globPatterns: ["**/*.{png,jpg,ico,html,js,json,txt}"],

  swDest: "public/sw.js",

  // Define runtime caching rules.
  runtimeCaching: [
    {
      // Match any request that ends with .png, .jpg, .jpeg or .svg.
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

      // Apply a cache-first strategy.
      handler: "CacheFirst",

      options: {
        // Use a custom cache name.
        cacheName: "images",
      },
    },
  ],
};
