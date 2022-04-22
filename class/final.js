let isCheckedPhone = false;

// 유효성 검사
const validation = () => {
    const email = String(document.getElementById("email").value).toLocaleLowerCase().trim();
    const name = String(document.getElementById("name").value);
    const password = String(document.getElementById("password").value);
    const rePassword = String(document.getElementById("rePassword").value);

    if(email.length === 0) {
        alert("이메일을 입력해 주세요");
        document.getElementById("email").focus();
        return;
    } else if(!email.includes("@")) {
        alert("올바른 이메일을 입력해 주세요");
        document.getElementById("name").focus();
        return;
    } else if(password.length === 0) {
        alert("비밀번호를 입력해 주세요");
        document.getElementById("password").focus();
        return;
    } else if(password !== rePassword) {
        alert("비밀번호가 동일하지 않습니다");
        document.getElementById("rePassword").focus();
        return;
    } else if(!isCheckedPhone) {
        alert("휴대폰 인증을 진행해 주세요");
        return;
    } else if(!document.getElementById("female").checked && !document.getElementById("male").checked) {
        alert("성별을 선택해 주세요");
        return;
    } else {
        // 모두 통과
        alert(`회원가입 완료!!\n이메일: ${email}\n이름: ${name}\n전화번호: ${getPhone1()}-${getPhone2()}-${getPhone3()}`);
    }
}

const phoneLength1 = () => {
    if(getPhone1().length === 3) {
        document.getElementById("phone2").focus();
    }
    sendTokenEnabled()
}

const phoneLength2 = () => {
    if(getPhone2().length === 4) {
        document.getElementById("phone3").focus();
    }
    sendTokenEnabled()
}

const sendTokenEnabled = () => {
    if(getPhone1().length === 3 && getPhone2().length === 4 && getPhone3().length === 4) {
        // 전화번호 입력 완료 -> '인증번호 전송' 버튼 활성화
        document.getElementById("sendToken").disabled = false;
    } else {
        // '인증번호 전송' 버튼 비활성화
        document.getElementById("sendToken").disabled = true;
    }
}

let timer = null;
let isStarted = false; // 타이머 시작여부
let secondsTime = 10; // 타이머 (단위: s)
const sendToken = () => {
    if(!isStarted) {
        // 타이머 미작동중
        isStarted = true;

        const getToken = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
        document.getElementById("token").innerText = getToken;
        alert("인증번호를 전송했습니다");

        document.getElementById("checkToken").disabled = false;
        startTimer(secondsTime)
    } else {
        // 타이머 작동중
        alert("이미 인증번호가 전송되었습니다");
    }
}

const checkToken = () => {
    document.getElementById("timer").innerText = "인증완료"
    document.getElementById("sendToken").disabled = true;
    document.getElementById("checkToken").disabled = true;
    clearInterval(timer);
    isCheckedPhone = true;
    alert("성공적으로 인증이 되었습니다");
}

// 타이머 시작
const startTimer = (secondsTime) => {
    let time = secondsTime;

    timer = setInterval(function() {
        time--;

        let minutes = String(Math.floor(time / 60)).padStart(2,"0");
        let seconds = String(time % 60).padStart(2,"0");

        document.getElementById("timer").innerText = `${minutes}:${seconds}`;

        // 타이머 종료
        if(time === 0) {
            clearInterval(timer);
            document.getElementById("checkToken").disabled = true;
        }
    }, 1000);
}

const getPhone1 = () => {
    return document.getElementById("phone1").value;
}

const getPhone2 = () => {
    return document.getElementById("phone2").value;
}

const getPhone3 = () => {
    return document.getElementById("phone3").value;
}
