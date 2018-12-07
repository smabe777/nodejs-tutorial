const fs = require('fs');

const readstream = fs.createReadStream('./big.txt', 'utf8');

//const writestream = fs.createWriteStream('./example2.gz');

// readstream.on ('data',  (chunk) => {
//     console.log(chunk);
//     writestream.write(chunk);
// })

//readstream.pipe(writestream);

const zlib = require ('zlib');

const gzip = zlib.createGzip();

//readstream.pipe(gzip).pipe(writestream);

const gunzip = zlib.createGunzip();

const x = fs.createReadStream('./example2.gz');
const y = fs.createWriteStream('./example_clear.txt');

x.pipe(gunzip).pipe(y);