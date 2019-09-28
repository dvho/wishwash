const ww = require('./wishwash.js')

console.log('Starting tests')

const NaNInputs1 = ww('Hello',2,17,true)
if (NaNInputs1 !== '"Hello" is not a number.') {
    throw new Error('ww not recognizing non numbers')
}

const NaNInputs2 = ww(5,'Hello',17,true)
if (NaNInputs2 !== '"Hello" is not a number.') {
    throw new Error('ww not recognizing non numbers')
}

const NaNInputs3 = ww(5,2,'Hello',true)
if (NaNInputs3 !== '"Hello" is not a number.') {
    throw new Error('ww not recognizing non numbers')
}

const nonBoolInputs1 = ww(5,2,17,8)
if (nonBoolInputs1 !== 'Your "inclusive" qualifier must be boolean.') {
    throw new Error('ww not recognizing booleans')
}

const nonBoolInputs2 = ww(5,2,17,'Hello')
if (nonBoolInputs2 !== 'Your "inclusive" qualifier must be boolean.') {
    throw new Error('ww not recognizing booleans')
}

const nonBoolInputs3 = ww(5,2,17,undefined)
if (nonBoolInputs3 !== 'Your "inclusive" qualifier is undefined.') {
    throw new Error('ww not recognizing booleans')
}

const undefinedInputs1 = ww(undefined,2,17,true)
if (undefinedInputs1 !== 'Your iterator is undefined.') {
    throw new Error('ww not recognizing non numbers')
}

const undefinedInputs2 = ww(5,undefined,17,true);
if (undefinedInputs2 !== 'Your min is undefined.') {
    throw new Error('ww not recognizing non numbers');
}

const undefinedInputs3 = ww(5,2,undefined,true);
if (undefinedInputs3 !== 'Your max is undefined.') {
    throw new Error('ww not recognizing non numbers');
}

const undefinedInputs4 = ww(5,2,17,undefined)
if (undefinedInputs4 !== 'Your "inclusive" qualifier is undefined.') {
    throw new Error('ww not recognizing booleans')
}

const floatingPointErrorHandling1 = ww(9999999999999999,2,17,false)
if (floatingPointErrorHandling1 !== 'Your iterator is too large to maintain IEEE 754 Floating Point conversion accuracy.') {
    throw new Error('ww not recognizing too large numbers')
}

const floatingPointErrorHandling2 = ww(5,9999999999999999,17,false)
if (floatingPointErrorHandling2 !== 'Your min is too large to maintain IEEE 754 Floating Point conversion accuracy.') {
    throw new Error('ww not recognizing too large numbers')
}

const floatingPointErrorHandling3 = ww(5,2,9999999999999999,false)
if (floatingPointErrorHandling3 !== 'Your max is too large to maintain IEEE 754 Floating Point conversion accuracy.') {
    throw new Error('ww not recognizing too large numbers')
}

const minNotLessThanMax = ww(5,13,13,true)
if (minNotLessThanMax !== 'Your max must be greater than your min.') {
    throw new Error('ww not recognizing min not less than max')
}
