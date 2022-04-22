const email = "yeontan0826@gmail.com";
// undefined
email
// 'yeontan0826@gmail.com'
email.includes("@");
// true
email.split("@");
// (2) ['yeontan0826', 'gmail.com']
const userMail = email.split("@")[0];
// undefined
userMail
// 'yeontan0826'
const companyMail = email.split("@")[1];
// undefined
companyMail
// 'gmail.com'
const maskingMail = []
// undefined
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail.push(userMail[3])
// 4
maskingMail
// (4) ['y', 'e', 'o', 'n']
maskingMail.push("*");
maskingMail.push("*");
maskingMail.push("*");
maskingMail.push("*");
// 8
maskingMail
// (8) ['y', 'e', 'o', 'n', '*', '*', '*', '*']
maskingMail.join("");
// 'yeon****'
maskingMail.join("") + "@" + companyMail
// 'yeon****@gmail.com'
let result = maskingMail.join("") + "@" + companyMail
// undefined
result
// 'yeon****@gmail.com'