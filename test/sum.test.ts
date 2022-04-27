import Sum from './sum'

test('Sum function should return a + b result', () => {
  expect(Sum(3, 2)).toBe(5)
})

test('Sum should be greater than zero', () => {
  expect(Sum(-1, 2)).toBeGreaterThan(0)
})