module.exports = {
  // edit react-app webpack <donfig:></donfig:>
  webpack: ( config,env ) => {
    config.optimization.runtimeChunk = false
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false
      }
    }

    return config
  }
  //config.output.filename = 'static/js/[name].js'

  //config.plugins[5].options.filename = 'static/css/[name].css'
  //config.plugins[5].options.moduleFilename = () => 'static/css/main.css'

  //return config
}
