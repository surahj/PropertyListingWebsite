// const webpack = require('webpack');
// const path = require('path');

// const config = {
  
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader'
//         ],
//         exclude: /\.module\.css$/
//       },
//       {
//         test: /\.(js|jsx)$/,
//         use: 'babel-loader',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           {
//             loader: 'css-loader',
//             options: {
//               importLoaders: 1,
//               modules: true
//             }
//           }
//         ],
//         include: /\.module\.css$/
//       }
//     ]
//   },
//   resolve: {
//     extensions: [
//       '.js',
//       '.jsx',
//       '.css'
//     ],
//     alias: {
//       'react-dom': '@hot-loader/react-dom'
//     }
//   },
//   devServer: {
//     contentBase: './pages'
//   }
// };

// module.exports = config;