const convertToCelsius = function (input) {
	let celcius = 0.0;
	celcius = (input - 32) * 0.5555;
	return Number.parseFloat(celcius.toFixed(1));
};

const convertToFahrenheit = function (input) {
  let fahrenheit = 0.0;
  fahrenheit = (input * 1.8) + 32;
  return Number.parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
