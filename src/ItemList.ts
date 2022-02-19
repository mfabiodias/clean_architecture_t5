import { ItemType } from './Item';

export default class ItemList {
  private static items: Array<ItemType> = [
    {
      idItem: 1,
      description: 'Câmera',
      category: 'Eletrônicos',
      price: 1000,
      dimension: {
        height: 20,
        width: 15,
        length: 10,
      },
      weight: 1,
    },
    {
      idItem: 2,
      description: 'Guitarra',
      category: 'Instrumento Musicais',
      price: 2000,
      dimension: {
        height: 100,
        width: 30,
        length: 10,
      },
      weight: 3,
    },
    {
      idItem: 3,
      description: 'Geladeira',
      category: 'Eletrodomésticos',
      price: 3000,
      dimension: {
        height: 200,
        width: 100,
        length: 50,
      },
      weight: 40,
    },
  ];

  static getItem(idItem: number): ItemType | undefined {
    return ItemList.items.find(item => item.idItem == idItem);
  }
  static getItems(): Array<ItemType> {
    return ItemList.items;
  }
}
