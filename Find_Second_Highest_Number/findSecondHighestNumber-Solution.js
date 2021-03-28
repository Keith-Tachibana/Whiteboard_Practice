const myFunctions = {
    findSecondHighestInteger: arr => {
        if (arr.length === 0) {
            return null;
        }
        let sorted = arr.sort();
        let index = arr.length - 2;
        return sorted[index];
    }
}

module.exports = myFunctions;