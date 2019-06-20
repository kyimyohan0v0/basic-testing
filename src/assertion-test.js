const {sum, sub} = require("./util/math");

module.exports = function test() {

    describe("The result of sum should be 3", async function() { 
        await expect(sum(1,2)).toBe(3)
    });

    describe("The result of sub should be 1", async function() {
        await expect(sub(2,1)).toBe(1)
    });
}




//Functions
//=======================
function expect(result) {
    return {
        toBe(expected) {
            if(result !== expected) {
                throw new Error(`${result} is not equal to ${expected}`);
            }
        }
    }
}

async function describe(title, callback) {
    try{
        await callback()
        console.log(`Right -> ${title}`);
    } 
    catch(error) {
        console.error(`Wrong -> ${title}`);
        console.error(error);
    }
}