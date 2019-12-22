const getWirePaths = () => {
    let wirePathOne;
    let wirePathTwo;
    let wirePaths;

    const collection = document.getElementsByTagName('PRE');
    for (let i = 0; i < collection.length; i++) {
        wirePaths = collection[i].innerText.split('\n');
    }

    wirePathOne = wirePaths[0].split(',');
    wirePathTwo = wirePaths[1].split(',');


    return {wirePathOne, wirePathTwo};
}




const {wirePathOne, wirePathTwo} = getWirePaths();