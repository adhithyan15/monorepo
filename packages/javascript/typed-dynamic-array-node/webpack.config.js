const path = require('path');

const serverConfig = {
  target: 'node',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
        name: "typed-dynamic-array",
        type: "commonjs"
    }
  },
  mode: "production"
}

module.exports = [serverConfig];
