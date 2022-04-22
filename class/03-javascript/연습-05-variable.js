1 + 1
// 2
1 + '1'
// '11'
"안녕하세요" + ", " + "반갑습니다"
// '안녕하세요, 반갑습니다'
"123" === 123
// false
"123" == 123
// true
!false
// true
!true
// false

/******************************************************/

if(1+1 === 2) {
    console.log("정답입니다!!");
} else {
    console.log("오답입니다ㅠㅠ");
}
// 정답입니다!!
if(true) {
    console.log("정답입니다!!");
} else {
    console.log("오답입니다ㅠㅠ");
}
// 정답입니다!!
if(false) {
    console.log("정답입니다!!");
} else {
    console.log("오답입니다ㅠㅠ");
}
// 오답입니다ㅠㅠ
const password1 = 1234;
const password2 = 1236;

if(password1 === password2) {
    alert("비밀번호가 일치합니다!");
} else {
    alert("비밀번호가 일치하지 않습니다ㅠㅠ");
}
// (알림창 노출)

/******************************************************/

const profile = {
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
}

if(profile.age >= 20) {
    console.log("성인입니다");
} else if(profile.age >= 8) {
    console.log("학생입니다");
} else if(profile.age >= 0) {
    console.log("어린이입니다");
} else {
    console.log("잘못된 나이입니다");
}
// 학생입니다