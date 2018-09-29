module.exports = function longestConsecutiveLength(array) {
    if (array.length == 0) {
        return 0;
    }

    array.sort((a, b) => a - b);

    let count = 1;
    let tmp = 1;
    const len = array.length;

    for (let i = 0; i < len; i++) {
        if (array[i] + 1 == array[i + 1]) {
            tmp++;
        } else if (array[i] == array[i + 1]) {
            continue;
        } else {
            if (tmp > 1) {
                if (count < tmp) {
                    count = tmp;
                }
                tmp = 1;
            }
        }
    }
    return count;
}

