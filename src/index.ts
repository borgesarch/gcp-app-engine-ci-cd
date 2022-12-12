'use strict';

import Hapi from '@hapi/hapi';

const init = async () => {

    const server = Hapi.server({
        port: 8080,
        host: '0.0.0.0'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request:any, h:any) => {

            return {
                status: 'OK'
            };
        }
    });


    server.route({
        method: 'GET',
        path: '/health',
        handler: (request:any, h:any) => {

            return {
                health: true
            };
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();