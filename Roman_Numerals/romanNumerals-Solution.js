const myFunctions = {
    romanNumerals: num => {
        const romanNums = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
        const romanVals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        let answer = '';
        if (num === 0) {
            return null;
        }
        for (let i = 0; i < romanVals.length; i++) {
            while (num >= romanVals[i]) {
                num -= romanVals[i];
                answer += romanNums[i];
            }
        }
        return answer;
    }
}

module.exports = myFunctions;
