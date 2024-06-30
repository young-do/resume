// @see: https://github.com/withastro/prettier-plugin-astro?tab=readme-ov-file#recommended-configuration
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  printWidth: 120,
  singleQuote: true,
};
