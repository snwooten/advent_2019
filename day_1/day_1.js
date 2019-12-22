// Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module,
// take its mass, divide by three, round down, and subtract 2.
//
// For example:
//
//     For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
// For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
// For a mass of 1969, the fuel required is 654.
// For a mass of 100756, the fuel required is 33583.
// The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed
// for the mass of each module (your puzzle input), then add together all the fuel values.
//
//     What is the sum of the fuel requirements for all of the modules on your spacecraft?


const getModuleMasses = () => {
    let modules
    let totalChange = 0;
    const map = {};
    const collection = document.getElementsByTagName('PRE');
    for (let i = 0; i < collection.length; i++) {
        modules = collection[i].innerText.split('\n');
    }
    const undefinedElement = modules.length-1;
    delete modules[undefinedElement]
    return modules;
}


const getModuleFuelRequirement = (massString) => {
    const massInt = parseInt(massString, 10);
    let moduleTotalFuelRequirement = 0;
    let fuelRequirementDecrament = massInt;

    while (fuelRequirementDecrament > 0) {

        fuelRequirementDecrament = Math.floor(fuelRequirementDecrament / 3) - 2;
        moduleTotalFuelRequirement += fuelRequirementDecrament > 0 ? fuelRequirementDecrament : 0;
    }

    return moduleTotalFuelRequirement;
}


const getTotalFuelRquirements = (modules) => {
    let totalFuel = 0;
    modules.forEach(mass => {
      totalFuel += getModuleFuelRequirement(mass);
    });
    console.log('totalFuel', totalFuel)
}


const modules = getModuleMasses();

getTotalFuelRquirements(modules);
