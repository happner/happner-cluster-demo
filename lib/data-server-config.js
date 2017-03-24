var baseConfig = require('./base-config');

module.exports = {

  generate: function (seq) {

    var config = baseConfig.generate('DATA', seq);

    config.modules = {};

    config.components = {};

    return config

  }

};
