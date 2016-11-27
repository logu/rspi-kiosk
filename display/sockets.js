var sockets = {};

sockets.init = function (server) {
    // socket.io setup
    var io = require('socket.io').listen(server);
    io.sockets.on('connection', function (socket) {
        console.log('socket connected');
        // other logic
    });

};

module.exports = sockets;