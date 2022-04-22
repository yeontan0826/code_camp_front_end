let students = ["철수", "영희", "맹구", "수지", "짱구"];

for(let i=0;i<students.length;i++) {
    console.log(`안녕 ${students[i]}야!!`);
}
// 안녕 철수야!!
// 안녕 영희야!!
// 안녕 맹구야!!
// 안녕 수지야!!
// 안녕 짱구야!!

for(let i=0;i<persons.length;i++) {
    if(persons[i].age > 18) {
        console.log(`'${persons[i].name}'님은 성인입니다.`);
    } else {
        console.log(`'${persons[i].name}'님은 미성년자입니다.`);
    }
}
// '철수'님은 미성년자입니다.
// '영희'님은 성인입니다.
// '도우너'님은 미성년자입니다.
// '말포이'님은 미성년자입니다.
// '도비'님은 미성년자입니다.

const fruits = [
    { number: 1, title: "레드향"},
    { number: 2, title: "샤인머스켓"},
    { number: 3, title: "산청딸기"},
    { number: 4, title: "한라봉"},
    { number: 5, title: "사과"},
    { number: 6, title: "애플망고"},
    { number: 7, title: "딸기"},
    { number: 8, title: "천혜향"},
    { number: 9, title: "과일선물세트"},
    { number: 10, title: "귤"},
]

for(let i=0;i<fruits.length;i++) {
    console.log(`${fruits[i].number} ${fruits[i].title}`);
}
// 1 레드향
// 2 샤인머스켓
// 3 산청딸기
// 4 한라봉
// 5 사과
// 6 애플망고
// 7 딸기
// 8 천혜향
// 9 과일선물세트
// 10 귤