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
  tailwindConfig: './packages/tailwind-config/tailwind.config.js'
};
