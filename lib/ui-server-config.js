var baseConfig = require('./base-config');

module.exports = {

  generate: function (seq) {

    var config = baseConfig.generate('UI', seq);

    config.version = version(),

    config.web = {
      routes: {
        '/': 'happner-cluster-ui/public'
      }
    };

    config.modules = {};

    config.components = {
      'happner-cluster-ui': {
        startMethod: 'start',
        stopMethod: 'stop',
        web: {
          routes: {
            'public': 'public'
          }
        }
      },
      'happner-cluster-info': {
        accessLevel: 'mesh',
        startMethod: 'start',
        stopMethod: 'stop'
      }
    };

    return config

  }

};

function version() {

  var path = require('path');
  var packageFile = path.dirname(require.resolve('happner-cluster-ui')) + path.sep + 'package.json';
  var version = require(packageFile).version;

  return 'ui-' + version;

}
