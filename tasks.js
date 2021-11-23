    function camelToSnake(srcStr) {
    let result = srcStr.split(/([A-Z])/);

    for (let i = 0; i < result.length; i++) {
      if ( result[i] === result[i].toUpperCase() ) {
          result[i] = "_" + result[i];
      }
    }
    return result.join("").toLowerCase();
    }

    console.log ( camelToSnake('welcomeToTheJungle') );


    function reverseNumber (num) {
    let splStr = num.toString().split('').reverse();

    if (num < 0) {
      splStr.pop();
      splStr.unshift("-");
    }
    return splStr.join('');
    }

    console.log ( reverseNumber (145) );


    const obj = {
      firstName: 'John',
      lastName: 'Wick',
      activity: 'killer'
    };

    
    function swapKeysWithValues(obj) {
      let newObj = {};
      
      Object.keys(obj).forEach( function (value) {
          let key = obj[value];
          newObj[key] = value;
      });
      return newObj;
    }

    console.log ( swapKeysWithValues(obj) );


    function swapKeysWithValues(obj) {
      let newObj = {};

      for(let key in obj) {
        newObj[obj[key]] = key;
      }
      return newObj;
    }
    
    console.log ( swapKeysWithValues(obj) );


    const obj = {
      firstName: 'John',
      lastName: 'Wick',
      activity: {killer: 'retired'}
    };

    const cloneObj = {};

    function deepCopy(obj) {
      for(let key in obj) {
          cloneObj[key] = obj[key];
      }
      return cloneObj;
    }
    deepCopy(obj);

    cloneObj.activity = 'killer';
    console.log ( cloneObj );
    console.log ( obj );