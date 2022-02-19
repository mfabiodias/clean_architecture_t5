import Cpf from '../src/Cpf';

test('CPF inválido quando todos os digitos são iguais', () => {
  // 1. Given (guiven) - Dado
  const cpfStr = '935.411.347-80';
  // 2. When (uem) - Quando
  const cpf = new Cpf(cpfStr);
  // 3. Then (dem) - Então
  expect(cpf.getValue()).toBe(cpfStr);
});

test('Deve testar um cpf inválido com números iguais', function () {
  const cpfStr = '111.111.111-11';
  expect(() => new Cpf(cpfStr)).toThrow(new Error('Invalid CPF'));
});

test('Deve testar um cpf inválido com números diferentes', function () {
  const cpfStr = '123.456.789-99';
  expect(() => new Cpf(cpfStr)).toThrow(new Error('Invalid CPF'));
});

test('Deve testar um cpf inválido com números incompletos', function () {
  const cpfStr = '1234567899';
  expect(() => new Cpf(cpfStr)).toThrow(new Error('Invalid CPF'));
});

test('Deve testar um cpf inválido sem números', function () {
  const cpfStr = 'MEU CPF';
  expect(() => new Cpf(cpfStr)).toThrow(new Error('Invalid CPF'));
});

test('Deve testar um cpf inválido vazio', function () {
  const cpfStr = '';
  expect(() => new Cpf(cpfStr)).toThrow(new Error('Invalid CPF'));
});
