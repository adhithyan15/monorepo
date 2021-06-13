const path = require('path');

const serverConfig = {
  target: 'node',
  entry: './src/node_entry_point.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
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
        name: "stopwatchy",
        type: "umd"
    }
  },
  mode: "production"
}

module.exports = [serverConfig];