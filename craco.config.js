const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    jest: {
        configure: (jestConfig, { env, paths, resolve, rootDir }) => {
            jestConfig.coverageDirectory = '<rootDir>/tests/coverage';
            jestConfig.snapshotResolver = '<rootDir>/tests/config/snapshotResolver.js';
            console.log(jestConfig);
            return jestConfig;
        }
    },
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
