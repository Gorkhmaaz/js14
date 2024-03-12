///Task 1
function generateRandomNumber(min, max, callback) {
    const randomNumber = Math.round(Math.random() * (max - min + 1)) + min;
    callback(randomNumber);
}

function callbackFunction(number) {
    console.log("Случайное число:", number);
}

generateRandomNumber(1, 15, callbackFunction);

///Task 2
function checkEven(number,callback){
    const isEven = number % 2 === 0
    callback(isEven)
}
function callbackFunc(result){
    if(result){
        console.log('Число четное')
    } else{
        console.log('Нечетное')
    }
}
checkEven(4,callbackFunc)
checkEven(5,callbackFunc)

///Task 3
const numbers = [4,35,-2,13,-14,-3,44]
const positiveNumbers = []

numbers.forEach(number => {
    if(number > 0){
        positiveNumbers.push(number)
    }
})

console.log('Положительные числа:', positiveNumbers)

///Task 4
const keyValue = [
    ["name", "Vasya"],
    ["age", 18],
    ["city", "Moscow"]
]
const obj = {}

keyValue.forEach(pair =>{
    const key = pair[0]
    const value = pair[1]
    obj[key]= value
})
console.log(obj)

////Task 5
const strings = ["toyota", "hyundai", "bentley","bmw", "opel"];
const lengths = []

strings.forEach(string => {
    lengths.push(string.length)
})
console.log(lengths)

////Task 6


