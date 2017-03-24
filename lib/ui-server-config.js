var baseConfig = require('./base-config');

module.exports = {

  generate: function (seq) {

    var config = baseConfig.generate('UI', seq);

    config.web = {
      routes: {
        // '/': 'ui-component-name/route-name'
      }
    };

    config.modules = {};

    config.components = {};

    return config

  }

};
