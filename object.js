
const obj = {
    firstName: 'John',
    lastName: 'Wick',
    age: 40,
    weapons: ['pistol', 'knife', { name: 'shotgun', valid: null }],
    activity: {
        killer: 'retired',
    }
};

function deepCopy(obj) {
    
    let key;
    let cloneObj;

    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    cloneObj = Array.isArray(obj) ? [] : {};
    for (key in obj) {

        cloneObj[key] = deepCopy(obj[key]);
    }
    return cloneObj;    
}

const cloneObj = deepCopy(obj);

console.log( cloneObj );
console.log( obj );





function deepCopy(obj) {

    let key;
    let cloneObj;

    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    
    if (Array.isArray(obj)) {
        cloneObj = [];
        for (key in obj) {
            cloneObj[key] = deepCopy(obj[key]);
        }
    }
    else {
        cloneObj = {};
        for (key in obj) {
            cloneObj[key] = deepCopy(obj[key]);
        }
    }
    return cloneObj;
}

const cloneObj = deepCopy(obj);

console.log( cloneObj );
console.log( obj );