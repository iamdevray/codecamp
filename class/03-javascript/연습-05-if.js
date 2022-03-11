if(1 + 1 === 2) {
    console.log("정답")
} else {
    console.log("오답")
}
VM271:2 정답
undefined
if(1 + 2 === 2) {
    console.log("정답")
} else {
    console.log("오답")
}
VM291:4 오답
undefined
if(true) {
    console.log("정답")
} else {
    console.log("오답")
}
VM358:2 정답
undefined
if(0) {
    console.log("정답")
} else {
    console.log("오답")
}
VM372:4 오답
undefined

const pw1 = "123"
undefined
const pw2 = "123"
undefined
if(pw1 === pw2) {
    alert("비밀번호가 일치합니다.")
} else {
    alert("비밀번호가 일치하지 않습니다.")
}

const profile = {
    name : "철수",
    age : 12,
    scholle : "다람쥐초등학교"
}
undefined
const age = profile[1].age
    
VM1265:1 Uncaught TypeError: Cannot read properties of undefined (reading 'age')
    at <anonymous>:1:24
(익명) @ VM1265:1

//해결 1안
const age = profile.age    
undefined
if(age >= 20) {
    console.log("성인입니다.")
} else if(age >= 8 && age <= 19) {
    console.log("학생입니다.")
} else if(age <= 7) {
    console.log("어린이입니다.")
}
VM1609:4 학생입니다.
undefined

//해결 2안
if(profile.age >= 20) {
    console.log("성인입니다.")
} else if(profile.age >= 8 && profile.age <= 19) {
    console.log("학생입니다.")
} else if(profile.age <= 7) {
    console.log("어린이입니다.")
}
VM1777:4 학생입니다.
undefined

// 최적화 수행 과정 - 해결 1안&2안
if(age >= 20) {
    console.log("성인입니다.")
} else if(age >= 8 && age <= 19) {
    console.log("학생입니다.")
} else {
    console.log("어린이입니다.")
}

if(profile.age >= 20) {
    console.log("성인입니다.")
} else if(profile.age >= 8 && profile.age <= 19) {
    console.log("학생입니다.")
} else {
    console.log("어린이입니다.")
}

//최적화 수행 결과
if(profile.age >= 20) {
    console.log("성인입니다.")
} else if(profile.age >= 8 && profile.age <= 19) {
    console.log("학생입니다.")
} else if(profile.age >= 1) {
    console.log("어린이입니다.")
} else {
    console.log("나이가 잘못 입력되었습니다.")
}
