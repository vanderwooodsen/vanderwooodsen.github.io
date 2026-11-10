module.exports = {
  // CRA 5 supplies ESLintWebpackPlugin; skip CRACO 5's legacy loader override.
  eslint: null,
  webpack: {
    configure: {
      module: {
        rules: [
          {
            type: "javascript/auto",
            test: /\.mjs$/,
            include: /node_modules/,
          },
        ],
      },
    },
  },
};
