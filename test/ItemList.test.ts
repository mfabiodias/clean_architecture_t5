import ItemList from '../src/ItemList';
test('Deve retornar todos os itens', () => {
  const items = ItemList.getItems();
  expect(items.length).toBe(3);
});

test('Deve retornar o item 1', () => {
  const items = ItemList.getItem(1);
  expect(1).toBe(items?.idItem);
});
