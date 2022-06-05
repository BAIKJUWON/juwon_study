var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
//이 fs.appendFile()메서드는 지정된 파일의 끝에 지정된 콘텐츠를 추가합니다.
