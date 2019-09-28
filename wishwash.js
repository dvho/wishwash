module.exports = (i, min, max, inclusive) => {

//Begin preliminary checks

    if (i === undefined) {
        return `Your iterator is undefined.`
    }

    if (min === undefined) {
        return `Your min is undefined.`
    }

    if (max === undefined) {
        return `Your max is undefined.`
    }

    if (inclusive === undefined) {
        return `Your "inclusive" qualifier is undefined.`
    }

    if (isNaN(i)) {
        return `"${i}" is not a number.`
    }

    if (isNaN(min)) {
        return `"${min}" is not a number.`
    }

    if (isNaN(max)) {
        return `"${max}" is not a number.`
    }

    if (typeof inclusive !== 'boolean') {
        return `Your "inclusive" qualifier must be boolean.`
    }

    if (inclusive === false) { //Beyond 9999999999999999 IEEE 754 Floating Point conversion inaccuracies will occur in JavaScript.
        if (i > 9999999999999998) {
            return `Your iterator is too large to maintain IEEE 754 Floating Point conversion accuracy.`
        }

        if (min > 9999999999999998) {
            return `Your min is too large to maintain IEEE 754 Floating Point conversion accuracy.`
        }

        if (max > 9999999999999998) {
            return `Your max is too large to maintain IEEE 754 Floating Point conversion accuracy.`
        }

    } else {
        if (i > 9999999999999999) {
            return `Your iterator is too large to maintain IEEE 754 Floating Point conversion accuracy.`
        }

        if (min > 9999999999999999) {
            return `Your min is too large to maintain IEEE 754 Floating Point conversion accuracy.`
        }

        if (max > 9999999999999999) {
            return `Your max is too large to maintain IEEE 754 Floating Point conversion accuracy.`
        }
    }

    if (min >= max) {
        return `Your max must be greater than your min.`
    }

//End preliminary checks

    const mini = inclusive ? min : min + 1
    const maxi = inclusive ? max : max - 1

    return maxi - Math.abs(maxi - mini - (i % ((maxi - mini) * 2)))
}
