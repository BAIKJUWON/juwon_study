var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err){
    if (err) throw err;
    console.log('Saved!');
});

//메서드는 지정된 콘텐츠를 파일에 추가합니다. 파일이 없으면 다음과 같이 파일이 생성됩니다.