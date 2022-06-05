var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

//fs.writeFile()존재하는 경우 방법은 지정된 파일 및 콘텐츠를 대체합니다. 파일이 존재하지 않으면 지정된 내용을 포함하는 새 파일이 생성됩니다.