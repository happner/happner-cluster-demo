var baseConfig = require('./base-config');

module.exports = {

  generate: function (seq) {

    var config = baseConfig.generate('WORKER', seq);

    config.version = version(),

    config.modules = {};

    config.components = {
      'happner-cluster-info': {
        accessLevel: 'mesh',
        startMethod: 'start',
        stopMethod: 'stop'
      },
      'happner-cluster-worker': {}
    };

    console.log(config);

    return config

  }

};

function version() {

  var path = require('path');
  var packageFile = path.dirname(require.resolve('happner-cluster-worker')) + path.sep + 'package.json';
  var version = require(packageFile).version;

  return 'worker-' + version;

}
