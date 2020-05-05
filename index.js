let http = require('http');

let handle = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <title>Maratona Full Cycle 2.0</title>
            <link rel="shortcut icon" href="http://maratona.fullcycle.com.br/public/img/favicon.ico">
        </head>
        <style>
            h1 {
                text-align: center;
                margin: 25px;
                font-family: "Roboto",sans-serif;
            }
        </style>
        <body>
            <h1>Maratona Full Cycle 2.0</h1>
        </body>
        </html>
    `);
    res.end()
}

let server = http.createServer(handle);

server.listen(3000, function () {
    console.log('Server is listening at port 3000');
});

