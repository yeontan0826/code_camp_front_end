let friend = {
    name: "철수",
    age: 13,
    camp: "코드캠프"
}
// undefined
friend
// {name: '철수', age: 13, camp: '코드캠프'}
friend.name
// '철수'
friend['name']
// '철수'
friend.age
// 13
friend['age']
// 13
friend.camp
// '코드캠프'
friend['camp']
// '코드캠프'
friend.school
// undefined
friend['school']
// undefined

/******************************************************/

let students = [
    { name: "홍길동", age: 22, house: "구로구"},
    { name: "김선생", age: 32, house: "홍제동"},
    { name: "류연찬", age: 25, house: "안산시"}
]
// undefined
students
// (3) [{…}, {…}, {…}]0: {name: '홍길동', age: 22, house: '구로구'}1: {name: '김선생', age: 32, house: '홍제동'}2: {name: '류연찬', age: 25, house: '안산시'}length: 3[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}[[Prototype]]: Object
students[0]
// {name: '홍길동', age: 22, house: '구로구'}
students[1].house
// '홍제동'
students[1]['house']
// '홍제동'