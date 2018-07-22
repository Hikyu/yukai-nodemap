module.exports = {
  entry:  __dirname + "/app/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
