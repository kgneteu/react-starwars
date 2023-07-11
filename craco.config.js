const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    eslint: {
        enable: false
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
