var http = require ('http'); //http module load

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.listenerCount('Hello World!');
    //http server Configuration
}).listen(8080); //listen port 8080 connect

