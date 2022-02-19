import Discount from '../src/Discount';
test('Deve retorar o desconto de 10%', () => {
  const discount = new Discount('percent', 10);
  expect(JSON.stringify({ type: 'percent', value: 10 })).toBe(
    JSON.stringify({
      type: discount.type,
      value: discount.value,
    })
  );
});

test('Deve retorar o desconto de 0 quando o valor for menor que 1', () => {
  const discount = new Discount('rate', -1);
  expect(JSON.stringify({ type: 'rate', value: 0 })).toBe(
    JSON.stringify({
      type: discount.type,
      value: discount.value,
    })
  );
});
