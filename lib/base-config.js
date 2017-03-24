module.exports = {

  generate: function (type, seq) {

    var seqInt = parseInt(seq);

    return {

      name: type + '_' + seq,

      domain: 'DOMAIN_NAME',

      happn: {
        port: 57000 + seqInt,
        services: {
          membership: {
            config: {
              host: '127.0.0.1',
              port: 56000 + seqInt,
              seed: seqInt == 0,
              seedWait: 300,
              hosts: [
                '127.0.0.1:56000',
                '127.0.0.1:56001',
                '127.0.0.1:56002',
                '127.0.0.1:56003',
                '127.0.0.1:56004',
                '127.0.0.1:56005'
              ]
            }
          },
          proxy: {
            config: {
              port: 55000 + seqInt
            }
          }
        }
      }

    }

  }

};
