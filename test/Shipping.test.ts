import Shipping from '../src/Shipping';

test('Deve calcular o frete da Camera', () => {
  const height = 20; //cm
  const width = 15; //cm
  const length = 10; //cm
  const weight = 1; // KG
  const distance = 1; // KM
  const frete = new Shipping(height, width, length, weight, distance);
  const valor = frete.getPrice();
  expect(valor).toBe(10);
});

test('Deve calcular o frete da Guitarra', () => {
  const height = 100; //cm
  const width = 30; //cm
  const length = 10; //cm
  const weight = 3; // KG
  const distance = 1; // KM
  const frete = new Shipping(height, width, length, weight, distance);
  const valor = frete.getPrice();
  expect(valor).toBe(30);
});

test('Deve calcular o frete da Guitarra', () => {
  const height = 200; //cm
  const width = 100; //cm
  const length = 50; //cm
  const weight = 40; // KG
  const distance = 1; // KM
  const frete = new Shipping(height, width, length, weight, distance);
  const valor = frete.getPrice();
  expect(valor).toBe(400);
});
