function checkValidation() {

    const email = document.getElementById("email").value
    const password1 = document.getElementById("password1").value
    const password2 = document.getElementById("password2").value

    // if(email, pw1, p2가 모두 not null) {} 
    // => mybutton 활성화, 배경 색 노란색으로 전환
    // } else { 
    // => mybutton 비활성화, 배경 색상 삭제
    // }

    if(email !== "" && password1 !== "" && password2 !== "") {
        document.getElementById("mybutton").disabled = false;
        document.getElementById("mybutton").setAttribute("style","background-color: yellow")
    } else {
        document.getElementById("mybutton").disabled = true;
        document.getElementById("mybutton").setAttribute("style","background-color: none");
    }
}