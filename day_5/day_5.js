const getIntCodeList = () => {
    const collection = document.getElementsByTagName('PRE');
    const stringCodeList = collection[0].innerText.split(',');

    const intCodeList = [];
    stringCodeList.forEach((string, idx) => {
        if (string.length) {
            intCodeList.push(parseInt(string, 10));
        }
    });
    return intCodeList;
}


const calculateValue = (operationVal, valOne, valTwo) => {
    if (operationVal === 1) return valOne + valTwo;
    if (operationVal === 2) return valOne * valTwo;
    if (operationVal === 3) return valOne * valTwo;
    if (operationVal === 4) return valOne * valTwo;

}

const findPositionZeroValue = (intCodeList) => {
    for (let i = 0; i < intCodeList.length; i = i+4) {
        if (intCodeList[i] !== 99) {
            const tempList = intCodeList.slice(i, i + 4);
            const operationVal = tempList[0];
            const valOneIdx = tempList[1];
            const valTwoIdx = tempList[2];
            const outputIdx = tempList[3];
            const valOne = intCodeList[valOneIdx];
            const valTwo = intCodeList[valTwoIdx];

            const newVal = calculateValue(operationVal, valOne, valTwo);
            intCodeList[outputIdx] = newVal;
        }
        else {
            return intCodeList[0];
        }
    }
}

const findNounAndVerb = () => {
    let zerothValue = 0;
    let noun;
    let verb;
    for (let i = 0; i < 100; i++) {
        noun = i;
        for (let j = 0; j < 100; j++) {
            verb = j;
            const intCodeList = getIntCodeList();
            intCodeList[1] = noun;
            intCodeList[2] = verb;
            zerothValue = findPositionZeroValue(intCodeList);
            if (zerothValue === 19690720) {
                console.log('value: ', 100 * noun + verb);
                return 100 * noun + verb;
            }
        }
    }
    return 'fail';
}

findNounAndVerb();