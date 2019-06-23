import { Component } from '@angular/core';
import { ObservableSet } from 'observable-entities';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Observable Entities Sample';
  foodEntities = new ObservableSet(
    new Product(0, 'Bacon', 0),
    new Product(0, 'Lettuce', 0),
    new Product(0, 'Tomatoes', 0),
  );

  addFood(food: string) {
    this.foodEntities.add(new Product(0, food, 0));
  }

  increasePrice() {
    this.foodEntities.forEach(p => p.unitPrice = p.unitPrice + 1);
  }
}
