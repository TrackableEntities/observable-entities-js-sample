import { ObservableEntity } from 'observable-entities';
import { Product } from './product';

export class Category extends ObservableEntity {
  categoryId: number;
  categoryName: string;
  products: Product[];

  constructor();
  constructor(categoryId: number, categoryName: string, ...products: Product[]);
  constructor(categoryId?: number, categoryName?: string, ...products: Product[]) {
    super();
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.products = products;
    return super.proxify(this);
  }
}
