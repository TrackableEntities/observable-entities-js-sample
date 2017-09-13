# Sample Angular App for observable-entities-js

Sample app for [observable-entities-js](https://github.com/TrackableEntities/observable-entities-js).

> Note: You must install *rxjs* version **5.4.3** or greater, in order to avoid a compilation error.
> - For more info see this [issue](https://github.com/Reactive-Extensions/RxJS/issues/1487).

## Usage

To observe property changes on an object, create a class that extends `ObservableEntity`. Then add a `constructor` that returns `super.proxify(this)`.  For example

```js
import { ObservableEntity } from 'observable-entities-js';

export class Product extends ObservableEntity {
  productId: number;
  productName: string;
  unitPrice: number;

  constructor() {
    super();
    return super.proxify(this);
  }
}
```

`ObservableEntity` as a `modifyListeners` property of type `Subject<INotifyInfo>[]`.  To listen for property changes, add a listener can call `subscribe` on it.  For example, an Angular component can perform observable-based data binding with an `OnPush` strategy.

```js
// Trigger binding when item is updated
this.modifyListener = new Subject<INotifyInfo>();
this.modifyListener.subscribe(info => {
  this.cd.markForCheck();
});

// Add listener to each product
this.products.forEach(product => {
  product.modifyListeners.push(this.modifyListener);
});
```

Similarly, `ObservableSet` and `ObservableMap` have `addListeners` and `removeListeners` properties, and you can add listeners to trigger data binding when items are added or removed.

```js
// Trigger data binding when item is added
this.addListener = new Subject<INotifyInfo>();
this.addListener.subscribe(info => {
  this.cd.markForCheck();
});

// Add listenter to products
this.products.addListeners.push(this.addListener);
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

