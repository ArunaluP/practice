const value = document.getElementById('inputValue');
const celVal = document.getElementById("cel")
const fahVal = document.getElementById("fah");
const convert = document.getElementById("convertButton");
const result = document.getElementById("result");
let temp;

convert.onclick = function() {
    temp = parseFloat(value.value);
    if (isNaN(temp)) {
        result.innerHTML = "Please enter a valid number.";
        return;
    }
    
    if (celVal.checked) {
        let fahrenheit = (temp * 9/5) + 32;
        result.textContent = `${temp}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else if (fahVal.checked) {
        let celsius = (temp - 32) * 5/9;
        result.textContent = `${temp}°F is equal to ${celsius.toFixed(2)}°C`;
    } else {
        result.textContent = "Please select a conversion type.";
    }
}