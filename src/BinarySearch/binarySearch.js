export function binarySearch(target, array) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        const middle = Math.floor((low + high) / 2);

        if (array[middle] === target) {
            return middle;
        }

        if (array[middle] > target) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }

    return -1;
}


export function recursiveBinarySearch(target, array) {
    const middle = Math.floor(array.length / 2);

    if (array[middle] === target) {
        return middle;
    }

    if (array.length <= 1) {
        return -1;
    }

    const searchInLeftPart = array[middle] > target;

    const result = searchInLeftPart ? recursiveBinarySearch(target, array.slice(0, middle)) : recursiveBinarySearch(target, array.slice(middle));

    return result > -1 ? result + (searchInLeftPart ? 0 : middle) : result;
}
