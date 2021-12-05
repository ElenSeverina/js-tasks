//вывести элементы массива на консоль с заданной задержкой
// const asyncTasks = {
//     asyncRecursive(array, timeout) {
//         setTimeout()
//         setInterval()
//         //event loop
//     }
// };



// const array = [1, 2, 3, 'Hello', {day: 'Wednesday'}, 5, 6];
// let delay = 3000;

// function asyncRecursive(array, timeout) {
//     timeout = delay;

//     for(let i = 0; i < array.length; i++) {
//         setTimeout(function () {
//             console.log(array[i]);
//         }, i * timeout);
//     }
// }

// setTimeout(asyncRecursive, 3000, array);




function printArray(array, timeout) {
  for (var i = 0; i < array.length; i += 1) {//и поменять тут
      //добавлять код тут
      setTimeout(() => {
          console.log(array[i]);
      }, timeout);
      // и добавлять код тут
  }
}

printArray([1, 2, 3], 1000);

// разобраться почему 3 раза выводится undefined
// 2 способа как поправить код, так что-бы элементы выводились правильно
// замыкания, var/let/const какая между ними разница


//1)
function printArray(array, timeout) {
  for (var i = 0; i < array.length; i += 1) {
    (function(i) {
      setTimeout(() => {
          console.log(array[i]);
      }, array[i] * timeout)
    })(array[i]);
  }
}

printArray([1, 2, 3], 3000);

//2
function printArray(array, timeout) {
  for (let i = 0; i < array.length; i += 1) {
    setTimeout(() => {
        console.log(array[i]);
    }, array[i] * timeout)
  }
}

printArray([1, 2, 3], 3000);


