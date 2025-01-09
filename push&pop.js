//Q.1- push arr2 in arr1.

//let arr1 = [10,20,30,40,50]

//let arr2 = [60,70,80,90,100]

// for(let t of arr2){
//     arr1.push(t)

//     //console.log(arr1);
// }
// console.log(arr1);

//..............Spread Oprator............//

let arr1 = [10,20,30,40,50]
let arr2 = [100,200,300,400]

let arr3 = arr1.concat(arr2)
console.log(arr3);

//let arr2 = [100,200,300,400,...arr1]
//let arr2 = [100,200,...arr1,300,400]
//  let arr3 = [...arr1,...arr2]

// console.log(arr3)    //[ 10,20,30,40,50,100,200,300,400]
//console.log(arr2)




//............/Remove index 3 of an array/..........//



// let arr = [10, 20, 30, 40, 50, 60]

// let a1 = [];
// for (let i = 0; i <= 3; i++) {
//     a1.push(arr[i])
// }
// a1.pop();
// //console.log(a1);

// let a2 = [];
// for (let i = 4; i <= arr.length - 1; i++) {
//     a2.push(arr[i])
// }
// //console.log(a1, a2)

// let a3 = [...a1, ...a2];
// console.log(a3);