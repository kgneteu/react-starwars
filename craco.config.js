const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  eslint: {
    mode: 'file'
  },
  style: {
    webpack: {
      plugins: [new BundleAnalyzerPlugin()]
    },
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  }
};
