export function ordArrBinarySearch(array, target) {
    let low = 0;
    let high = array.length - 1;
    let middle;

    if (array.get(high) === undefined) {
        while (array.get(high) === undefined) {
            high -= 1;
        }
    }

    while (low <= high) {
        middle = Math.floor((low + high) / 2);

        if ((array.get(middle) > target && array.get(middle - 1) < target) || array.get(middle) === target) {
            return middle;
        }

        if (array.get(middle) > target) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }

    return -1;
}
