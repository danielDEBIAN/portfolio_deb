/** @type {import('postcss-load-config').Config} */

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
