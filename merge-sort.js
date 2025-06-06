let arrayOne = [9, 3, 7, 5, 6, 4, 8, 2];
let arrayTwo = [10, 49, 33, 12, 21, 98, 1, 8];
let arrayThree = [4, 4, 7, 12, 1, 2, 3];

function mergeSort(array = []) {
    // base case if array has only 1 item
    if(array.length <= 1) {
        return array;
    }

    //split array into 2 parts
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(A, B) { // takes 2 arrays
    const result = [];
    // these are the indexes
    let i = 0, j = 0;

    // execute this loop until i and j are zero (the array is over)
    // it calculates which element is the lowest and pushes into the result array
    while (i < A.length && j < B.length) {
        if (A[i] < B[j]) {
            result.push(A[i++]);
        } else {
            result.push(B[j++]);
        }
    }

    // append remaining elements if one of either side has no more elements to match with and compare
    while (i < A.length) {
        result.push(A[i++]);
    }

    while (j < B.length) {
        result.push(B[j++]);
    }

    return result;
}

console.log(mergeSort(arrayOne));
console.log(mergeSort(arrayTwo));
console.log(mergeSort(arrayThree));