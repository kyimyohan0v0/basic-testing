const {sum, sub} = require("./util/math");

module.exports = function test() {

    const expected = 3;
    const result = sum(1,4);

    if(result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
    }
}

