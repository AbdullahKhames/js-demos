String.prototype.elzeroRepeat = function (repeats){
    let temp = "";
    for (let index = 0; index < repeats; index++) {
      temp += this;
    }
    return temp;
}
