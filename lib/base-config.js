module.exports = {

  generate: function (type, seq) {

    var seqInt = parseInt(seq);

    return {

      name: type + '_' + seq,

      domain: 'DOMAIN_NAME',

      happn: {
        port: 57000 + seqInt,
        secure: true,
        services: {
          security: {
            config: {
              adminUser: {
                username: '_ADMIN',
                password: 'happnerclusterdemo'
              }
            }
          },
          connect: {
            config: {
              middleware: {
                security: {
                  exclusions: [
                    "/",
                    "/css/*",
                    "/js/*",
                    "/fonts/*",
                    "/angular/*",
                    "/components/*",
                    "/img/*",
                    "/icons/*",
                    "/favicon.ico"
                  ]
                }
              }
            }
          },
          data: {
            config: {
              datastores: [
                {
                  name: 'mongo',
                  provider: 'happn-service-mongo-2',
                  isDefault: true,
                  settings: {
                    collection: 'demo-cluster',
                    database: 'demo-cluster',
                    url: 'mongodb://127.0.0.1:27017'
                  }
                }
              ]
            }
          },
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
