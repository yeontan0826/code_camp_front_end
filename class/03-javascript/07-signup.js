/***********************************************
* 이메일, 비밀번호, 비밀번호 확인의 값을 가져와 변수에 할당
* 3개의 변수에 담긴 값이 모두 비어있지 않을 때 버튼 활성화
* 하나라도 비어있다면 버튼 비활성화
***********************************************/

const checkValidation = () => {
    const email = String(document.getElementById("email").value).toLocaleLowerCase().trim();
    const password = String(document.getElementById("password").value);
    const rePassword = String(document.getElementById("rePassword").value);

    if(email && password && rePassword) {
        // 버튼 활성화
        document.getElementById("submit").disabled = false;
        document.getElementById("submit").setAttribute("style", "background-color: yellow");
    } else {
        // 버튼 비활성화
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").setAttribute("style", "background-color: none");
    }
}