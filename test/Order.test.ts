import Item from '../src/Item';
import Order from '../src/Order';
import Coupon from '../src/Coupon';
import ItemList from '../src/ItemList';

test('Não deve criar um pedido com CPF inválido', () => {
  expect(() => new Order('111.111.111-11')).toThrow(new Error('Invalid CPF'));
});

test('Deve criar um pedido sem itens', () => {
  const cpf = '935.411.347-80';
  const order = new Order(cpf);
  expect(order.cpf.getValue()).toBe(cpf);
  expect(order.getTotal()).toBe(0);
});

test('Deve criar pedido com 3 itens', () => {
  const cpf = '935.411.347-80';
  const order = new Order(cpf);
  const item1 = ItemList.getItem(1);
  const item2 = ItemList.getItem(2);
  const item3 = ItemList.getItem(3);
  if (item1) order.addItem(new Item(item1), 1);
  if (item2) order.addItem(new Item(item2), 1);
  if (item3) order.addItem(new Item(item3), 1);
  expect(order.getTotal()).toBe(6000);
});

// // Desenvolvido por mim
// test('Deve criar pedido com 3 itens com cupom de desconto de 25%', () => {
//   const cpf = '935.411.347-80';
//   const order = new Order(cpf);
//   const item1 = ItemList.getItem(1);
//   const item2 = ItemList.getItem(2);
//   const item3 = ItemList.getItem(3);
//   if (item1) order.addItem(new Item(item1), 1);
//   if (item2) order.addItem(new Item(item2), 1);
//   if (item3) order.addItem(new Item(item3), 3);
//   order.setDiscount('percent', 0.25);
//   const total = order.getTotal();

//   expect(total).toBe(4567.5);
// });

// // Desenvolvido por mim
// test('Deve criar pedido com 3 itens com cupom de desconto de R$ 20,00', () => {
//   const cpf = '935.411.347-80';
//   const order = new Order(cpf);
//   const item1 = ItemList.getItem(1);
//   const item2 = ItemList.getItem(2);
//   const item3 = ItemList.getItem(3);
//   if (item1) order.addItem(new Item(item1), 1);
//   if (item2) order.addItem(new Item(item2), 1);
//   if (item3) order.addItem(new Item(item3), 3);
//   order.setDiscount('rate', 20);
//   const total = order.getTotal();

//   expect(total).toBe(6070);
// });

// Desenvolvido pelo Branas
test('Deve criar pedido com 3 itens com cupom de desconto de 20%', () => {
  const cpf = '935.411.347-80';
  const order = new Order(cpf);
  const item1 = ItemList.getItem(1);
  const item2 = ItemList.getItem(2);
  const item3 = ItemList.getItem(3);
  if (item1) order.addItem(new Item(item1), 1);
  if (item2) order.addItem(new Item(item2), 1);
  if (item3) order.addItem(new Item(item3), 3);
  order.addCoupon(new Coupon('VALE20'));
  const total = order.getTotal();

  expect(total).toBe(9600);
});

test('Deve criar pedido com 3 itens com cupom de desconto de 20 Reais', () => {
  const cpf = '935.411.347-80';
  const order = new Order(cpf);
  const item1 = ItemList.getItem(1);
  const item2 = ItemList.getItem(2);
  const item3 = ItemList.getItem(3);
  if (item1) order.addItem(new Item(item1), 1);
  if (item2) order.addItem(new Item(item2), 1);
  if (item3) order.addItem(new Item(item3), 3);
  order.addCoupon(new Coupon('VALE20REAIS'));
  const total = order.getTotal();

  expect(total).toBe(11980);
});

test('Deve retornar valor total sem desconto de cupom inválido', () => {
  const cpf = '935.411.347-80';
  const order = new Order(cpf);
  const item1 = ItemList.getItem(1);
  const item2 = ItemList.getItem(2);
  const item3 = ItemList.getItem(3);
  if (item1) order.addItem(new Item(item1), 1);
  if (item2) order.addItem(new Item(item2), 1);
  if (item3) order.addItem(new Item(item3), 3);
  order.addCoupon(new Coupon('VALE100'));
  const total = order.getTotal();

  expect(total).toBe(12000);
});

test('Deve retornar valor total sem desconto de cupom expirado', () => {
  const cpf = '935.411.347-80';
  const order = new Order(cpf);
  const item1 = ItemList.getItem(1);
  const item2 = ItemList.getItem(2);
  const item3 = ItemList.getItem(3);
  if (item1) order.addItem(new Item(item1), 1);
  if (item2) order.addItem(new Item(item2), 1);
  if (item3) order.addItem(new Item(item3), 3);
  order.addCoupon(new Coupon('VALE30REAIS2020'));
  const total = order.getTotal();

  expect(total).toBe(12000);
});

test('Deve retornar valor total com frete', () => {
  const cpf = '935.411.347-80';
  const order = new Order(cpf);
  const item1 = ItemList.getItem(1);
  if (item1) order.addItem(new Item(item1), 1);
  order.addDistance(1);
  const total = order.getTotal();
  expect(total).toBe(1010);
});

test('Deve retornar valor total com frete de 3 itens', () => {
  const cpf = '935.411.347-80';
  const order = new Order(cpf);
  const item1 = ItemList.getItem(1);
  const item2 = ItemList.getItem(2);
  const item3 = ItemList.getItem(3);
  if (item1) order.addItem(new Item(item1), 2);
  if (item2) order.addItem(new Item(item2), 1);
  if (item3) order.addItem(new Item(item3), 1);
  order.addDistance(1);
  const total = order.getTotal();
  expect(total).toBe(7449.98);
});

test('Deve retornar valor total de 1 item com 2 quantidade e frete', () => {
  const cpf = '935.411.347-80';
  const order = new Order(cpf);
  const item1 = ItemList.getItem(1);
  if (item1) order.addItem(new Item(item1), 2);
  order.addDistance(1);
  const total = order.getTotal();
  expect(total).toBe(2019.98);
});
