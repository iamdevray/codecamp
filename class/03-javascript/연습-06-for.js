const children = ["철수", "영희", "훈이"]
for(let i = 0; i < 3; i++) {
    console.log(children[i] + "님, 안녕하세요?")
}
VM1269:2 철수 님, 안녕하세요?
VM1269:2 영희 님, 안녕하세요?
VM1269:2 훈이 님, 안녕하세요?
undefined

let student = ["이적", "김윤아", "장기하"]
undefined
for(let n = 0; n < student.length; n++) {
    console.log(student[n] + "님, 안녕하세요?")
}
VM409:2 이적님, 안녕하세요?
VM409:2 김윤아님, 안녕하세요?
VM409:2 장기하님, 안녕하세요?

let persons = [
    {name: '철수', age:18},
    {name: '영희', age:22},
    {name: '도우너', age:5},
    {name: '말포이', age:14},
    {name: '도비', age:3},
  ]
  undefined
for(let k = 0; k < persons.length; k++) {
    if(persons[k].age > 18) {
        console.log(persons[k].name + "님은 성인입니다.")
    } else {
        console.log(persons[k].name + "님은 미성년자입니다.")
    }
}
VM1252:5 철수님은 미성년자입니다.
VM1252:3 영희님은 성인입니다.
VM1252:5 도우너님은 미성년자입니다.
VM1252:5 말포이님은 미성년자입니다.
VM1252:5 도비님은 미성년자입니다.