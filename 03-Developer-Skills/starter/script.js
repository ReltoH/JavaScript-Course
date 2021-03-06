// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/* const tempertures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const tempAmplitude = function (termpertures) {
    let minTemp = tempertures[0];
    let maxTemp = tempertures[0];
    for (let i = 0; i < tempertures.length; i++) {
        if (typeof tempertures[i] !== 'number') {
            continue;
        }
        if (tempertures[i] < minTemp) {
            minTemp = tempertures[i];
        }
        if (tempertures[i] > maxTemp) {
            maxTemp = tempertures[i];
        }
    }
    return maxTemp - Math.abs(minTemp);
}

console.log(tempAmplitude(tempertures)); */

// Coding Challenge #1
const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

const printForecast = function (temp) {
    const count = temp.length;
    let i = 0;
    let forecastString = `...${temp[i]} C in ${i + 1} days`;

    for (i = 1; i < count; i++) {
        forecastString += `...${temp[i]} C in ${i + 1} days...`;
    }
    console.log(forecastString);
}
printForecast(temps1);
printForecast(temps2);