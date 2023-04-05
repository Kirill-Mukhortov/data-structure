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
