const { sum, subtract } = require("./math");

test("sum adds numbers", async () => {
  const result = await sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("substract adds numbers", async () => {
  const result = await subtract(10, 7);
  const expected = 4;
  expect(result).toBe(expected);
});
