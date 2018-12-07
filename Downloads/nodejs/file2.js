const fs = require ('fs');

// fs.unlink('./tutorial/example.txt', (err) => {
//     if(err) console.log(err);
//     else {
//         fs.rmdir('tutorial', (err) => {
//             if(err) console.log(err);
//             else console.log('successfully deleted folder');
//         });
//     }
// })


// fs.mkdir('tutorial', (err) => {
//     if (err ) console.log (err);
//     else {
//         fs.writeFile('./tutorial/example.txt', '1333', (err) => {
//             if(err) console.log(err);
//             else console.log('successfully created file');
//         })
//         console.log('correctly created folder');
//     }
// });

fs.readdir('tutorial', (err, files) => {
    if(err) console.log(err);
    else {
        for (let f of files ){
            fs.unlink('./tutorial/'+f, (err) => {
                if(err ) console.log(err);
                else console.log('successfuly delete file ' + f);
            });
        }
        console.log(files);
    }
} );