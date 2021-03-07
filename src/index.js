exports.min = function min(array) {

    if (array == 0 || array == undefined) {
        return 0;
    } else {
        return +array.sort((a, b) => {
            return a - b;
        })[0];
    }
}

exports.max = function max(array) {

    if (array == 0 || array == undefined) {
        return 0;
    } else {
        return +array.sort((a, b) => {
            return a - b;
        })[array.length - 1];
    }
}

exports.avg = function avg(array) {

    if (array == 0 || array == undefined) {
        return 0;
    } else {
        let num = 0;

        array.forEach(item => {
            return num += item;
        });

        return num / 20
    }
}
