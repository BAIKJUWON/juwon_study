var http = require('http');

//creat a server object;
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'}); //res.writeHead()메서드 의 첫 번째 인수는 상태 코드이고, 200은 모두 정상임을 의미하고, 두 번째 인수는 응답 헤더를 포함하는 객체입니다.
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080);