const { greet } = require('../controller/practices');
const { login } = require('../controller/auth');

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            return 'Home page'
        },
    },
    {
        method: 'GET',
        path: '/auth/login',
        handler: login,
    },
    {
        method: 'GET',
        path: '/practices/{name?}',
        handler: greet,
    },
];

module.exports = routes;