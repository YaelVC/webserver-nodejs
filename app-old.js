const http = require('http');

http.createServer( (req, res) => {
    /* 'text/plain'  -- lo pone como texto plano, pero hay que enviarlo como string, porque si no, no lo lee*/
    // application/csv

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv') /* Va a bajar el archivo csv */
    // res.writeHead(200, { 'Content-Type':'application/csv' });

   

    res.write('Hola mundo');
    res.end();

})
.listen( 8080 );
console.log('Escuchando en el puerto 8080');

// const main = async () => {
//     console.log('Hola Mundo');
// }

// main();