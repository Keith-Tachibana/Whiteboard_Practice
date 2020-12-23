const myFunctions = {
  emptyArr: [],

  setup: function(...strs) {
    for (let i = 0; i < strs.length; i++) {
      this.emptyArr.push(strs[i]);
    }
    return this.emptyArr;
  },

  isMember: function(searchStr) {
    for (let i = 0; i < this.emptyArr.length; i++) {
      if (this.emptyArr[i] === searchStr) {
        return true;
      } else if (searchStr.includes('*')) {
        const wildCardArr = [];
        const wildcardIndex = searchStr.indexOf('*');
        for (let j = 0; j < wildcardIndex; j++) {
          if (this.emptyArr[i][j] === searchStr[j]) {
            wildCardArr.push(searchStr[j]);
          }
        }
        const actualChar = this.emptyArr[i][wildcardIndex];
        wildCardArr.push(actualChar);
        for (let k = wildcardIndex + 1; k < searchStr.length; k++) {
          if (this.emptyArr[i][k] === searchStr[k]) {
            wildCardArr.push(searchStr[k]);
          }
        }
        console.log('wildCardArr:', wildCardArr);
        console.log('emptyArr[i]:', this.emptyArr[i]);
        if (wildCardArr.join('') === this.emptyArr[i]) {
          return true;
        } else {
          return false;
        }
      }
      continue;
    }
    return false;
  }
}

module.exports = myFunctions;
