var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

//이 fs.rename()메서드는 지정된 파일의 이름을 바꿉니다.