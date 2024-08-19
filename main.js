// var val1 = "var";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(vel2);

// // letは再宣言不可能

// const val3 = "const変数";
// console.log(val3);

// // constは上書きも不可能

// const val4 = {
//     name: "kryu",
//     age : 24
// };
// console.log(val4);

// val4.name = "k0ryu";
// val4.address = "Gifu";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name = "kryu"
// const age = 20

// const message = `私の名前は${name}です。年齢は${age}`
// console.log(message)

// const func = str => str
// console.log(func("funcvv"))

// const func = str => `I am ${str}`
// console.log(func("kryu"))

// const myProfile = {
//     name : "kryu",
//     age : 24
// }

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1)

// const {name, age} = myProfile
// const message2 = `名前は${name}です。年齢は${age}です。`
// console.log(message2)

// const myProfile = ["kryu", 24]

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`
// console.log(message3)

// const [name, age] = myProfile

// const message4 = `名前は${name}です。年齢は${age}です`
// console.log(message4)

// const sayHello = (name = 'guest') => console.log(`こんにちは${name}さん`)

// sayHello()

// const myProfile = {
//     age : 24
// }

// const { age, name = 'guest'} = myProfile
// console.log(age)
// console.log(name)

// const name = 'kryu'
// const age = 24

// const myProfile = { name, age }
// console.log(myProfile)

// const arr1 = [1, 2]

// const sumFunc = (num1, num2) => console.log(num1 + num2)
// // sumFunc(arr1[0], arr1[1])
// sumFunc(...arr1)

// const arr2 = [1, 2, 3, 4, 5]
// const [num1, num2, ...arr3] = arr2
// console.log(num1)
// console.log(num2)
// console.log(arr3)

// const arr4 = [10, 20]
// const arr5 = [30, 40]

// const arr6 = [...arr4]
// const arr7 = [...arr4, ...arr5]
// console.log(arr7)

const nameArr = ['kryu', 'yamada', 'satou']
// const nameArr2 = nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`) )

// console.log(nameArr2)

// const numArr = [1, 2, 3, 4, 5]
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 1;
// })
// console.log(newNumArr)

// const nameArr3 = nameArr.map((name, index) => 
// {
//     if (name === 'kryu') {
//         console.log(`${index + 1}番目は${name}です`)
//     } else {
//         console.log(`${index + 1}番目は${name}さんです`)
//     }
// })

// const val = 1 > 0 ? 'ture' : 'false'
// console.log(val)

// const num = '1300'
// console.log(num.toLocaleString())

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'

// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です'
// }
// console.log(checkSum(40, 90))

// const val = {}
// if (val) {
//     console.log('val is truthy')
// } else {
//     console.log('val is falsy')
// }

// || は左側がtruthyのときその時点で返却する
const num = 1000
const fee = num || '金額未設定です'
console.log(fee)

// &&は左側がfalsyのときその時点で返却する
const num2 = null
const fee2 = num2 && '何か設定されました'
console.log(fee2)