function hello(name) {
    alert(name + "님 안녕하세요")
}
// undefined
hello("최병집")
// undefined
let students = ["아이언맨", "로키", "케인", "퀼"]
// undefined
function helloFriends(props) {
for(let i = 0; i < props.length; i++) {
    console.log(`안녕하세요 ${props[i]}님 반갑습니다`)
}
}

// undefined
helloFriends(students)
// VM718:3 안녕하세요 아이언맨님 반갑습니다
// VM718:3 안녕하세요 로키님 반갑습니다
// VM718:3 안녕하세요 케인님 반갑습니다
// VM718:3 안녕하세요 퀼님 반갑습니다
// undefined