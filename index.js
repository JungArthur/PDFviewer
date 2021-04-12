const http = require('http');
const fs = require('fs');

function eee(data, res){

}
const server = http.createServer((req,res) => {
    if (req.method === 'GET') {
        if(req.url === '/') {

            return fs.readFile('./zerowidthline.pdf', (err, data) => {
                if (err) {
                    throw err;
                }
                // let buff = new Buffer(data);
                // let base64data = buff.toString('base64');
                // let file = data;
                // console.log(file)
                // file = file.rows[0][0]; //Column that contains the blob content

                // res.setHeader('Content-Length', file.length);
                // res.write(file, 'binary');
                // res.write();
                // res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end(data);
            });

            // return fs.readFile('./restFront.html', (err, data) => {
            //     if (err) {
            //         throw err;
            //     }
            //     res.end(data);
            // });
        }else if(req.url === '/test.html') {
            return fs.readFile('./test.html', (err, data) => {
                if (err) {
                    throw err;
                }
                res.end(data);
            });
        }else if(req.url === '/pdf.js') {
            return fs.readFile('./pdf.js', (err, data) => {
                if (err) {
                    throw err;
                }
                res.end(data);
            });
        }else if(req.url === '/pdf.worker.js') {
            return fs.readFile('./pdf.worker.js', (err, data) => {
                if (err) {
                    throw err;
                }
                res.end(data);
            });
        }

    }else if(req.method === 'POST'){
        if(req.url === '/') {
            console.log('pdf post');
            return fs.readFile('./2020_Guide_DELMIAAprisoPreconfiguredIndustrySolutions.pdf', (err, data) => {
                if (err) {
                    throw err;
                }
                let buff = new Buffer(data);
                let base64data = buff.toString('base64');
                let file = base64data;
                // console.log(file)
                // file = file.rows[0][0]; //Column that contains the blob content
                // console.log(file);
                // res.setHeader('Content-Length', file.length);
                // res.write(file, 'binary');
                // res.write();
                // res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end(file);
            });

            // return fs.readFile('./restFront.html', (err, data) => {
            //     if (err) {
            //         throw err;
            //     }
            //     res.end(data);
            // });
        }
    }








});

server.listen(8080);

server.on('listening', ()=>{
    console.log('8080번 포트에서 대기중');
});
server.on('error', (err)=>{
   console.error(err);
});