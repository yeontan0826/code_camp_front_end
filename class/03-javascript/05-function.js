let isStarted = false;

// 토큰 갱신
const restore = () => {
    /******************************************************* 
    isStarted = false (타이머가 작동중이 아닐 경우) => 코드 실행
        실행될 때 isStarted = true 재할당
        타이머가 종료되면 isStarted = false 재할당
    
    isStarted = true (타이머가 작동중인 경우) => 코드 실행 X
    *******************************************************/

    if(isStarted === false) {
        // 타이머 작동X
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);

        document.getElementById("token").innerText = token;
        document.getElementById("token").style.color = `#${randomColor}`;

        startTimer(10)
    } else {
        // 타이머 작동중
        alert("이미 인증번호가 전송되었습니다");
    }
}

// 타이머
const startTimer = (verifyTime) => {
    timerStarted();

    let time = verifyTime;
    const timer = setInterval(function() {
        time--;
        
        let minutes = String(Math.floor(time / 60)).padStart(2,"0");
        let seconds = String(time % 60).padStart(2,"0");

        document.getElementById("timer").innerText = `${minutes}:${seconds}`;

        if(time === 0) {
            // 타이머 종료
            clearInterval(timer);
            timerFinished();
        }
    }, 1000)
}

// 타이머가 종료되었을때
const timerFinished = () => {
    isStarted = false
    document.getElementById("timer").style.color = "#d0d0d0";
    document.getElementById("finished").style.borderColor = "#d0d0d0";
    document.getElementById("finished").disabled = true;
}

// '인증번호 전송' 버튼을 눌렀을때
const timerStarted = () => {
    isStarted = true;
    document.getElementById("timer").style.color = "black";
    document.getElementById("finished").style.borderColor = "gray";
    document.getElementById("finished").disabled = false;
}