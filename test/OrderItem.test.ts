import OrderItem from '../src/OrderItem';
test('Deve retornar o valor total válido', () => {
  const orderItem = new OrderItem(1, 20, 2, 1, {
    height: 1,
    length: 1,
    width: 1,
  });
  const total = orderItem.getTotal();
  expect(total).toBe(40);
});

test('Deve retornar o valor total inválido', () => {
  const orderItem = new OrderItem(1, 20, 5, 1, {
    height: 1,
    length: 1,
    width: 1,
  });
  const total = orderItem.getTotal();
  expect(total).not.toBe(40);
});
