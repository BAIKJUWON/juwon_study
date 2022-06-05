var http = require('http'); //http 모듈 로드
http.createServer(function(req, res){ 
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end("Hello world");
//http 서버 구성
}).listen(8080); //리스너 포트를 8080으로 설정

//콘솔 로그 찍기
console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');