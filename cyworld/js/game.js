// 끝말잇기
const checkWord = () => {
    // 유저가 입력한 단어 & 해당 단어의 마지막 글자
    const word = String(document.getElementById("word").innerText);
    const lastWord = word[word.length - 1];

    // 제시어 & 제시어의 첫글자
    const myWord = String(document.getElementById("myword").value).trim();
    const firstWord = myWord[0];

    if(myWord.length === 0) {   // 공백일때
        alert("단어를 입력해주세요");
        focusMyWord();
        return;
    } else if(myWord.length < 2) {  // 한글자일때
        alert("두글자 이상 입력해주세요");
        focusMyWord();
        return;
    }

    if(lastWord === firstWord) {    // 입력한 첫글자가 제시어의 마지막 글자와 일치할때
        document.getElementById("word").innerText = myWord;
        document.getElementById("result").innerText = "정답입니다~"; 
        document.getElementById("result").style.color = "green";
        document.getElementById("myword").value = "";
        focusMyWord();
    } else {    // 입력한 첫글자가 제시어의 마지막 글자와 일치하지 않을때
        document.getElementById("result").innerText = "땡!!!!!!!!!!!!!";
        document.getElementById("result").style.color = "red";
        focusMyWord();
    }
}

function focusMyWord() {
    document.getElementById("myword").focus();
}