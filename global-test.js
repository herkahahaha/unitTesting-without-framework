console.log("runn the test");

async function test(title, callback) {
  try {
    await callback();
    console.log(`✓ PASSED  ${title}`);
  } catch (error) {
    console.error(`✕ FAILED ${title}`);
    // console.eror(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

globalThis.test = test;
globalThis.expect = expect;
