let config = {
  mode: 'production',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  },
  
};

// entry
config.entry = {
    main: [require('path').resolve(__dirname, "kotlin/hello-platform.js")]
};
config.output = {
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "hello-platform.js"
            : "hello-platform-[name].js";
    },
    library: "hello-platform",
    libraryTarget: "umd",
    clean: true,
    globalObject: "globalThis"
};
config.output = config.output || {}
config.output.path = require('path').resolve(__dirname, "../../../kotlin-webpack/js/productionExecutable")
// source maps
config.module.rules.push({
        test: /\.m?js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = false;
config.ignoreWarnings = [
    /Failed to parse source map/,
    /Accessing import\.meta directly is unsupported \(only property access or destructuring is supported\)/
];  
;(function(config) {
    const webpack = require("webpack"); 
    const SourceMapDevToolPlugin = webpack.SourceMapDevToolPlugin;
    config.plugins.push(new SourceMapDevToolPlugin({
                            "test": /\.((c|m)?js|css)($|\?)/i,
                "filename": "[file].map[query]",
                "module": true,
                "columns": true,
                "noSources": false,
                "ignoreList": /NATIVE_IMPLEMENTATIONS.kt/
    }))
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-web-helpers/dist/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// section: Extra JS code from KotlinWebpackConfig.extraJs
// section end
module.exports = config
