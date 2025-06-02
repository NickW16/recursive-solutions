function fibs(n) {
    let result = []
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            result.push(0);
        } else if (i === 1) {
            result.push(1);
        } else {
            result.push(result[i - 1] + result [i - 2]);
        }
    }
    let formatedResult = `Fibonacci's iterative sequence of ${n}: ` + result; 
    return formatedResult;
}

console.log(fibs(5));
console.log(fibs(7));
console.log(fibs(8));

// recursive
function fibsRec(n, array = [0, 1]) {
    if (array.length >= n) {
        return array.slice(0, n)
    } else {
        array.push(array[array.length - 1] + array[array.length - 2]);
        return fibsRec(n, array);
    }
}

// had to do another function to format that one
function formatFibsRec(n) {
    const result = fibsRec(n);
    return `Fibonacci's recursive sequence of ${n}:` + result;  
}

console.log(formatFibsRec(5));
console.log(formatFibsRec(8));
console.log(formatFibsRec(10));
console.log(formatFibsRec(12));
