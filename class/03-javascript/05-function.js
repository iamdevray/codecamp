// function randomToken() {
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
//     document.getElementById("auth").innerText = token
// }

const randomToken = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
    document.getElementById("auth").innerText = token
    document.getElementById("auth").style.color = "#" + token
}
// '선언문' 방식 -> '화살표 함수' 방식
// 기능은 같지만 입력된 문자열의 수가 비교적 줄어듦 -> 데이터 총량 감소
// style.color = "#" 형태로 입력하면
// 함수 실행 요청이 들어올 때마다 내부에 정의된 기능이 재실행되면서 
// 무작위 16진수(HEX code) 색상 코드가 선택&입력되므로
// 버튼을 클릭할 때마다 다른 색깔의 숫자가 화면에 출력됨    
