const year = document.getElementById("year");
const modified = document.getElementById("last-modified")
let temp=26;
let wind_speed = 6;

const date = new Date();
year.innerHTML = date.getFullYear()
modified.innerHTML =`Last Modified: ${document.lastModified}`;

function degreeToFahrenheit(temp){
    return (temp * 9/5 ) + 32;
}

let tempF = degreeToFahrenheit(temp);

function calculateWindChill(tempF,wind_speed){
    if (tempF <= 50 && wind_speed > 4.8 ) {
        const windChill = 35.74 + (0.612 * tempF) - (35.75 * (wind_speed ** 16)) + (0.4275 * tempF * (wind_speed**16));
        return windChill;
    }
}

if (tempF <= 50){
    document.getElementById("wind-chill").innerHTML= `${calculateWindChill(tempF,wind_speed)}`;
} else{
    document.getElementById("wind-chill").innerHTML="N/A";
}