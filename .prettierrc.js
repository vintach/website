const tailwindPlugin = require('prettier-plugin-tailwindcss');

module.exports = {
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  plugins: [tailwindPlugin],
  tailwindConfig: './settings/tailwind/tailwind.config.ts'
};
