function sum(num1,num2){
    return num1+num2
}
console.log(sum(13,8,5))

function allnumberssum(...params){
    return params[2]
    
}
console.log(allnumberssum(4,8,6))
function lol(...params){
    let num =4
    for(i of params){
num = i + num

    }
    return num
}
console.log(lol(3,45,46,47,5,8,6,9,2,1,2,33,52))