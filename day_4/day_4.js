// It is a six-digit number.
// The value is within the range given in your puzzle input.
// Two adjacent digits are the same (like 22 in 122345).
// Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
// Other than the range rule, the following are true:
//
// 111111 meets these criteria (double 11, never decreases).
// 223450 does not meet these criteria (decreasing pair of digits 50).
// 123789 does not meet these criteria (no double).
// How many different passwords within the range given in your puzzle input meet these criteria?

const puzzleInputRange = [273025, 767253];

const findPasswordOptions = (range) => {
    const startingVal = range[0];
    const lastVal = range[1];
    let validPasswordCount = 0;
    const list = [];

    for (let currentVal = startingVal; currentVal <= lastVal; currentVal++) {
        const valString = currentVal.toString();
        let twoAdjacentDigets = false;
        let neverDecreases = true;
        const duplicateMap = {};

        for (let j = 0; j < valString.length; j++) {
            const currentDigit = valString[j];

            if (!duplicateMap[currentDigit]) {
                duplicateMap[currentDigit] = 1;
            } else {
                duplicateMap[currentDigit]++;
            }
        }

        for (let i = 1; i < valString.length; i++) {
            const currentDigit = valString[i];
            const prevDigit = valString[i-1];

            if (currentDigit === prevDigit && duplicateMap[currentDigit] === 2) {
                twoAdjacentDigets = true;

            }

            if (parseInt(currentDigit, 10) < parseInt(prevDigit, 10)) {
                neverDecreases = false;
                break;
            }
        }

        if (twoAdjacentDigets && neverDecreases) {
            list.push(currentVal);
            validPasswordCount = validPasswordCount + 1;
        }
    }
    console.log('list: ', list);
    console.log(validPasswordCount);
    return validPasswordCount;
}

findPasswordOptions(puzzleInputRange);