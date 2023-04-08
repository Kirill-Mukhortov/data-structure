export function ordArrBinarySearch(array, target) {
    let low = 0;
    let high = array.length - 1;
    let middle;

    if (array[high] === undefined) {
        while (array[high] === undefined) {
            high -= 1;
        }
    }

    while (low <= high) {
        middle = Math.floor((low + high) / 2);

        if ((array[middle] > target && array[middle - 1] < target) || array[middle] === target) {
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
