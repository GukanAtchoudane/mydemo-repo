const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <html>
            <head>
                <title>Node.js Demo</title>
            </head>
            <body style="font-family: Arial; text-align: center; margin-top: 100px;">
                <h1>Hello World!</h1>
                <h2>My Node.js Application</h2>
            </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
