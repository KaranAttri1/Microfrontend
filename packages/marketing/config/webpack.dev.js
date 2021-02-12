const {merge}=require('webpack-merge')
const ModuleFederation=require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig=require('./webpack.common')
const packageJson = require('../package.json')
const devConfig={
mode:'development',
output:{
  publicPath:"http://localhost:8081/",
},
devServer:{
    port:8081,
    historyApiFallback:{
        index:'/index.html'
    }
},
plugins:[

    new ModuleFederation({
        name: 'xyz',
        filename: 'remoteEntry.js',
        exposes: {
          './MarketingApp': './src/bootstrap',
          './frontEnd':'./src/payu.js'
        },
        shared:packageJson.dependencies
      }),
]
}

module.exports=merge(commonConfig,devConfig)