function changeFocus1() {
    // 첫 번째 <input> 태그 안에 입력된 값이 있는지 확인
    // => 입력된 값이 있으면 조건에 따라 커서를 다음 칸으로 옮김
    const phone1 = document.getElementById("phone1").value
    if(phone1.length === 3) {
        document.getElementById("phone2").focus()
    }
}

function changeFocus2() {
    // 두 번째 <input> 태그 안에 입력된 값이 있는지 확인
    // => 입력된 값이 있으면 조건에 따라 커서를 다음 칸으로 옮김
    const phone2 = document.getElementById("phone2").value
    if(phone2.length === 4) {
        document.getElementById("phone3").focus()
    }
    
}