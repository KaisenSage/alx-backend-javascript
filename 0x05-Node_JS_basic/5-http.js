const http = require('http');
const fs = require('fs');

const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!\n');
    } else if (req.url === '/students') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        countStudents(process.argv[2])
            .then(() => res.end())
            .catch((error) => {
                res.statusCode = 500;
                res.end(`${error.message}\n`);
            });
    }
});

app.listen(1245);

module.exports = app;

