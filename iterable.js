// * на вход ф-ция получает 3 числа, from - начало интервала(входит в интервал, to - конец интервала, не входит в интервал
// * step - шаг, по-умолчанию = 1, необязательный параметр
// * ф-ция должна создать объект, сделать его итерируемым(iterable) и вернуть
// */
//    const createIterable = (from, to, step=1) => {

//    }



let numbers = {
    from: 5,
    to: 25
}

numbers[Symbol.iterator] = function () {

    let first = this.from;
    let last = this.to;

    return {
        next() {
            if (first < last) {
                return {
                    done: false,
                    value: first++
                };
            } else {
                return {
                    done: true
                };
            }
        }
    }
}

for (let num of numbers) {
    console.log(num);
}