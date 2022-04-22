let classmates = ["이영주", "손은채", "세빈"];
// undefined
classmates
// (3) ['이영주', '손은채', '세빈']
classmates[0];
// '이영주'
classmates[1];
// '손은채'
classmates[2];
// '세빈'
classmates[3];
// undefined
classmates.includes("다슬");
// false
classmates.push("다슬");
// 4
classmates.includes("다슬");
// true
classmates
// (4) ['이영주', '손은채', '세빈', '다슬']
classmates.pop();
// '다슬'
classmates
// (3) ['이영주', '손은채', '세빈']
classmates.length();
// 3

/******************************************************/

let developer = [];
// undefined
developer.push("스스로 창조하는 개발자");
// 1
developer.push("카페인에 중독되지 않는 개발자");
// 2
developer.push("버그없이 만들 수 있는 개발자");
// 3
developer.push("누구나 남녀소노 구분없이 즐길 수 있는 서비스를 1인으로 개발할 수 있는 개발자");
// 4
developer.push("피곤에 쩔지않는 개발자");
// 5
developer
// (5) ['스스로 창조하는 개발자', '카페인에 중독되지 않는 개발자', '버그없이 만들 수 있는 개발자', '누구나 남녀소노 구분없이 즐길 수 있는 서비스를 1인으로 개발할 수 있는 개발자', '피곤에 쩔지않는 개발자']
let dream = ["커리어점프", "성공", "할수있다"];
// undefined
developer.concat(dream);
// (8) ['스스로 창조하는 개발자', '카페인에 중독되지 않는 개발자', '버그없이 만들 수 있는 개발자', '누구나 남녀소노 구분없이 즐길 수 있는 서비스를 1인으로 개발할 수 있는 개발자', '피곤에 쩔지않는 개발자', '커리어점프', '성공', '할수있다']