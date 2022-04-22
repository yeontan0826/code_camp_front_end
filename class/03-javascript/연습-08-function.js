function hello(name) {
    alert(`제 이름은 ${name}입니다!!`);
}
hello("류연찬");
// '제 이름은 류연찬입니다!!'

function hi(name) {
    return `${name}님 안녕하세요!!`;
}
hi("류연찬");
// '류연찬님 안녕하세요!!'

let student = ["은정", "혜원", "예봄", "정훈"];
function greetingFriends(arr){
    for(let i=0;i<student.length;i++) {
        console.log(`${arr[i]}님 반갑습니다!`);
    }
}
greetingFriends(student)
// 은정님 반갑습니다!
// 혜원님 반갑습니다!
// 예봄님 반갑습니다!
// 정훈님 반갑습니다!
