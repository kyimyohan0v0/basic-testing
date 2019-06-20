const {sum, sub} = require("./src/util/math");

test("The result of sum should be 3", async function() { 
    await expect(sum(1,2)).toBe(3)
});

test("The result of sub should be 0", async function() {
    await expect(sub(2,2)).toBe(0)
});