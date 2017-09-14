import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { INotifyInfo } from 'observable-entities';
import { ObservableSet } from 'observable-entities';
import { Subject } from 'rxjs/Subject';

import { Product } from '../models/product';

@Component({
  selector: 'app-child-observable',
  templateUrl: './child-observable.component.html',
  styleUrls: ['./child-observable.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildObservableComponent implements OnInit {

  @Input() products: ObservableSet<Product>;
  addListener: Subject<INotifyInfo>;
  modifyListener: Subject<INotifyInfo>;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    if (this.products) {
      // Trigger data binding when item is added
      this.addListener = new Subject<INotifyInfo>();
      this.addListener.subscribe(info => {
        this.cd.markForCheck();
      });

      // Add listenter to products
      this.products.addListeners.push(this.addListener);

      // Trigger binding when item is updated
      this.modifyListener = new Subject<INotifyInfo>();
      this.modifyListener.subscribe(info => {
        this.cd.markForCheck();
      });

      // Add listener to each product
      this.products.forEach(product => {
        product.modifyListeners.push(this.modifyListener);
      });
    }
  }
}
