import { Product } from './models/product';
import { Component } from '@angular/core';
import { ObservableSet } from 'observable-entities-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
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
