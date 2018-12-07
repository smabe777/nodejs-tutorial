const http = require('http');
const fs = require ('fs');

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        const readStream = fs.createReadStream('./static/index.html' );
        res.writeHead(200,{'Content-type':'text/html'});
        readStream.pipe(res);
        //res.end();
    }
    else{
        res.write ('BAAD');
        res.end();
    }
}).listen(3000);