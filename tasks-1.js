// function camelToSnake(srcStr) {
//     let result = '';
//     for (let c of srcStr) {
//         if (c === c.toUpperCase()) {
//             result += result.length ? '_' + c.toLowerCase() : c.toLowerCase();
//         } else {
//             result += c;
//         }
//     }
//     return result;
// }
//
// console.log(camelToSnake('welcomeToTheJungle'));
//
// function reverseNumber(num) {
//     const splStr = num.toString().split('').reverse();
//
//     if (num < 0) {
//         splStr.unshift(splStr.pop());
//     }
//
//     return +splStr.join('');
// }
//
// console.log(reverseNumber(145));


// const obj = {
//     firstName: 'John',
//     lastName: 'Wick',
//     activity: 'killer'
// };

// function swapKeysWithValues(obj) {
//     let newObj = {};
//
//     Object.keys(obj).forEach(function (value) {
//         let key = obj[value];
//         newObj[key] = value;
//     });
//     for (let key in obj) {
//         const value = obj[key];
//         newObj[value] = key;
//     }
//     return Object.entries(obj).reduce((acc, [key, value]) => {
//         acc[value] = key;
//         return acc;
//     }, {});
// }
// console.log(swapKeysWithValues(obj));

// function swapKeysWithValues(obj) {
//     let newObj = {};
//
//     for (let key in obj) {
//         newObj[obj[key]] = key;
//     }
//     return newObj;
// }
//
// console.log(swapKeysWithValues(obj));


const obj = {
    firstName: 'John',
    lastName: 'Wick',
    age: 40,
    weapons: ['pistol', 'knife', { name: 'shotgun', valid: null }],
    activity: {
        killer: 'retired',
    }
};

function fn1(o) {
    console.log(obj === o);
    obj.firstName = 'Vasya';
    return o;
}

function fn2(o) {
    fn1(o);
}

function fn3(o) {
    fn2(o);
}

function fn4(o) {
    fn3(o);
}

fn4(obj);
//
// function deepCopy(obj) {
//     // typeof
//     // Array.isArray()
//
//     const cloneObj = {};
//     for (let key in obj) {
//         cloneObj[key] = deepCopy(obj[key]);
//     }
//     return cloneObj;
// }
//
// const cloneObj = deepCopy(obj);
// console.log(cloneObj.activity === obj.activity);

