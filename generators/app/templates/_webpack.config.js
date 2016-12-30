module.exports = {
 entry: "./app/react-routes.js",
 output: {
   filename: "app/public/scripts/bundle.js"
 },
 module: {
   loaders: [
     {
       test: /\.jsx?$/,
       exclude: /(node_modules|server.js)/,
       loader: 'babel',
       presets: ['es2015', 'stage-0', 'react']
     }
   ]
 },
 "resolve": {
   "root": "public"
 }
}
