function convertTemperature() {

    let temp = parseFloat(document.getElementById("temp").value);
    let unit = document.getElementById("unit").value;

    if (isNaN(temp)) {
        alert("Please enter a valid temperature.");
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "celsius") {

        if (temp < -273.15) {
            alert("Temperature cannot be below absolute zero (-273.15°C).");
            return;
        }

        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;

    } else if (unit === "fahrenheit") {

        if (temp < -459.67) {
            alert("Temperature cannot be below absolute zero (-459.67°F).");
            return;
        }

        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;

    } else {

        if (temp < 0) {
            alert("Temperature cannot be below absolute zero (0 K).");
            return;
        }

        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    document.getElementById("celsius").innerHTML =
        "🌡 Celsius: " + celsius.toFixed(2) + " °C";

    document.getElementById("fahrenheit").innerHTML =
        "🌡 Fahrenheit: " + fahrenheit.toFixed(2) + " °F";

    document.getElementById("kelvin").innerHTML =
        "🌡 Kelvin: " + kelvin.toFixed(2) + " K";
}