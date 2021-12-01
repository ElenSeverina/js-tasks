//вывести элементы массива на консоль с заданной задержкой
// const asyncTasks = {
//     asyncRecursive(array, timeout) {
//         setTimeout()
//         setInterval()
//         //event loop
//     }
// };



const array = [1, 2, 3, 'Hello', {day: 'Wednesday'}, 5, 6];
let delay = 3000;

function asyncRecursive(array, timeout) {
    timeout = delay;

    for(let i = 0; i < array.length; i++) {
        setTimeout(function () {
            console.log(array[i]);
        }, i * timeout);
    }
}

setTimeout(asyncRecursive, 3000, array);



    