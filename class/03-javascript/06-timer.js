
// const tokenTimer = () => {
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
//     document.getElementById("authNum").innerText = token
//     document.getElementById("authNum").style.color = "#" + token

//      let time = 10
//      setInterval(function() {
//      if(time >= 0) {
//         document.getElementById("countDown").innerText = time
//         time = time - 1;
 //     }
 //   },1000)
// } 


let isStarted = false

let tokenTimer = () => {

    if(isStarted === false) {
        // 타이머가 작동 중이지 않을 때

        isStarted = true
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("authNum").innerText = token
        document.getElementById("authNum").style.color = "#" + token

        let time = 180;
        let timer = null;

        timer = setInterval(function() {
            if(time >= 0) {
                const min = String(Math.floor(time / 60)).padStart(2, "0")
                const sec = String(time % 60).padStart(2, "0")
                document.getElementById("countDown").innerText = min + ":" + sec
                time = time - 1;
            } else {
                document.getElementById("tokenEnd").disabled = true
                isStarted = false
                clearInterval(timer)
            }
        },1000)
    } else {
        // 타이머가 작동 중일 때
        alert("타이머가 이미 작동 중입니다.")
    }
}


