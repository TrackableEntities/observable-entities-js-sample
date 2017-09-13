import { Category } from './category';
import { Product } from './product';

export class MockNorthwind {
  Categories = [
    { categoryId: 1, categoryName: 'Beverages' } as Category,
    { categoryId: 2, categoryName: 'Condiments' } as Category,
    { categoryId: 3, categoryName: 'Confections' } as Category,
    { categoryId: 4, categoryName: 'Dairy Products' } as Category,
    { categoryId: 5, categoryName: 'Grains/Cereals' } as Category,
    { categoryId: 6, categoryName: 'Meat/Poultry' } as Category,
    { categoryId: 7, categoryName: 'Produce' } as Category,
    { categoryId: 8, categoryName: 'Seafood' } as Category,
  ];

  Products = [
    { productId: 1, productName: 'Chai', unitPrice: 10, categoryId: 1, category: this.Categories[0] } as Product,
    { productId: 2, productName: 'Chang', unitPrice: 20, categoryId: 1, category: this.Categories[0] } as Product,
    { productId: 3, productName: 'Aniseed Syrup', unitPrice: 30, categoryId: 2, category: this.Categories[1] } as Product,
    { productId: 4, productName: 'Chef Anton\'s Cajun Seasoning', unitPrice: 40, categoryId: 2, category: this.Categories[1] } as Product,
    { productId: 5, productName: 'Chef Anton\'s Gumbo Mix', unitPrice: 50, categoryId: 2, category: this.Categories[1] } as Product,
  ];

  constructor() {
    this.Categories[0].products = [this.Products[0], this.Products[1]];
    this.Categories[1].products = [this.Products[2], this.Products[3], this.Products[4]];
  }
}
