var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});

//이 fs.writeFile()메서드는 지정된 파일과 콘텐츠를 바꿉니다.