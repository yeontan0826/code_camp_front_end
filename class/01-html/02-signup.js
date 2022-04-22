// CLicked 'login' button
function buttonClicked() {
    let email = String(document.getElementById("email").value).toLowerCase().trim();
    let name = String(document.getElementById("name").value);
    let password = String(document.getElementById("password").value);
    let rePassword = String(document.getElementById("rePassword").value);

    // Verify
    if(email.length === 0) {
        alert("이메일을 입력해주세요");
        return;
    } else if(!email.includes("@")) {
        alert("유효한 이메일을 입력해주세요");
        return;
    } else if(name.length === 0) {
        alert("이름을 입력해주세요");
        return;
    } else if(password.length === 0) {
        alert("비밀번호를 입력해주세요");
        return;
    } else if(password !== rePassword) {
        alert("비밀번호가 일치하지 않습니다");
        return;
    }

    let emailArr = email.split("@");
    emailArr[0] = emailArr[0].slice(0, emailArr[0].length - 3) + "***";
    email = emailArr.join("@");

    alert(`이메일: ${email}\n이름: ${name}`);
}