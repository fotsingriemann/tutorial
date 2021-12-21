const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    res.write('Welcome to our home page');
    res.end();
});

server.listen(8009,() => {
    console.log('server en ecoute sur le port 5000');
});