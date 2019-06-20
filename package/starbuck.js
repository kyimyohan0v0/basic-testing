function expect(result) {
    return {
        toBe(expected) {
            if(result !== expected) {
                throw new Error(`${result} is not equal to ${expected}`);
            }
        }
    }
}

async function test(title, callback) {
    try{
        await callback()
        console.log(`Right -> ${title}`);
    } 
    catch(error) {
        console.error(`Wrong -> ${title}`);
        console.error(error);
    }
}

global.test = test;
global.expect = expect;