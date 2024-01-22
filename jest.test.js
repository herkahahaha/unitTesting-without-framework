const { sum, subtract } = require("./math");

test("sum adds numbers", async () => {
  const result = await sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("substract add numbers", async () => {
  const result = await subtract(10, 7);
  const expected = 5; //failed
  expect(result).toBe(expected);
});
