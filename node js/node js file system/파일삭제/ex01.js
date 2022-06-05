var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
//이 fs.unlink()메서드는 지정된 파일을 삭제합니다.