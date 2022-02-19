export type ItemType = {
  idItem: number;
  description: string;
  category: string;
  price: number;
  dimension: DimensionType;
  weight: number;
};

export type DimensionType = {
  height: number;
  width: number;
  length: number;
};

export default class Item {
  constructor(readonly item: ItemType) {}
}
