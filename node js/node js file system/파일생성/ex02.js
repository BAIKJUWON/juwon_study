var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function(err, file){
    if (err) throw err;
    console.log('Saved!');
});

//이 fs.open()메서드는 "플래그"를 두 번째 인수로 사용합니다. 플래그가 "쓰기"에 대한 "w"이면 지정된 파일을 쓰기 위해 엽니다. 파일이 없으면 빈 파일이 생성됩니다.
