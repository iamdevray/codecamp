setTimeout(function() {console.log("3초가 지났습니다.")},3000) 
// 1
// VM822:1 3초가 지났습니다.
setInterval(function() {
    console.log("1초가 지났습니다.")
},1000)
// 2
// VM987:2 1초가 지났습니다.

// 10초 카운트다운 타이머
let time = 10
undefined
setInterval(function() {
    if(time >= 0) {
        console.log(time)
        time = time - 1;
    }
},1000)

// 3분 카운트다운 타이머
// String & padStart 설정으로 숫자 표시 누락 방지
let time = 180
undefined
setInterval(function() {
    if(time >= 0) {
        const min = String(Math.floor(time/60)).padStart(2, "0")
        const sec = String(time % 60).padStart(2, "0")
        console.log(min + ":" + sec)
        time = time - 1;
    }
},1000)