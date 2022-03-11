const name = "최병집"
// undefined
name
// '최병집'
const name = "Ray"
// undefined
console.log(name)
//VM530:1 Ray
// undefined
const classmate = ["고재형", "김다혜", "김보인", "장여진", "최병집"]
// undefined
classmate
//(5) ['고재형', '김다혜', '김보인', '장여진', '최병집']
classmate['고재형']
// undefined
clasmate[(0)]
// VM1005:1 Uncaught ReferenceError: clasmate is not defined
//     at <anonymous>:1:1
//(익명) @ VM1005:1
classmate[0]
//'고재형'
classmate.includes('말포이')
//false
classmate.push('말포이')
// 6
classmate
// (6) ['고재형', '김다혜', '김보인', '장여진', '최병집', '말포이']
classmate.includes('말포이')
// true
classmate.pop()
// '말포이'
classmate
// (5) ['고재형', '김다혜', '김보인', '장여진', '최병집']

const developer = ["호기심", "협업", "반복 학습", "코드 리뷰", "코드 개선"]
// undefined
developer[2]
// '반복 학습'
let dream = ["커리어점프", "성공", "할수있다"]
// undefined
developer.concat(dream)
// (8) ['호기심', '협업', '반복 학습', '코드 리뷰', '코드 개선', '커리어점프', '성공', '할수있다']
let happy = developer.concat(dream)
// undefined
happy
// (8) ['호기심', '협업', '반복 학습', '코드 리뷰', '코드 개선', '커리어점프', '성공', '할수있다']