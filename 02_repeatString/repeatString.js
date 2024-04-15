const repeatString = function (string, num) {
	let input = string;

	if (num < 0) {
		return 'ERROR';
	} else if (num === 0) {
        return '';
    }

	for (let i = 1; i < num; i++) {
		input += string;
	}
	return input;
};
// Do not edit below this line
module.exports = repeatString;
