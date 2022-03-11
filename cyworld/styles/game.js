const startWord = () => {
    // 제시어 추출(innerText)
    const word = document.getElementById("word").innerText
    // 제시어의 마지막 글자 추출
    const lastword = word[word.length-1]

    // 입력 단어 추출(value)
    const myword = document.getElementById("myword").value
    // 입력 단어의 첫 글자 추출
    const firstword = myword[0]

    if(firstword === lastword) {
        document.getElementById("result").innerText = "정답입니다!"
        document.getElementById("word").innerText = myword
        document.getElementById("myword").value = ""
    } else {
        document.getElementById("result").innerText = "땡!"
        document.getElementById("myword").value = ""
    }
}

// const startLotto = () => {

//     const choiceNum =
//         if(choiciNum >= 1 || choiceNum <= 45) {
//             String(Math.floor(Math.random() * 45) + 1)).padStart(1, "0")
//         } else {

//         } 
// }