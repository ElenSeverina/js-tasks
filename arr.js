// let arr = [2, 4, 6, 1, 7, 3];
// let newArr = [];

// //1
// function findElements(arr, target) {

//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] + arr[j] === target) {
//                 newArr.push(i, j);
//             }
//         }
//     }
//     return newArr;
// }

// console.log ( findElements(arr, 10) );


// //2
// function findElements(arr, target) {

//     for(let i = 0; i < arr.length; i++) {
//         let el = target - arr[i];
//         if(arr[i] + el === target) {
//             newArr.push(arr.indexOf(el), i);
//         }
//     }
//     return newArr;
// }
    
// console.log ( findElements(arr, 10) );