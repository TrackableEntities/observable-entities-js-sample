import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservableSet } from 'observable-entities-js';
import { Product } from 'observable-entities-js/dist/types/models/product.spec';

import { ChildObservableComponent } from './child-observable.component';

describe('ChildObservableComponent', () => {
  let component: ChildObservableComponent;
  let fixture: ComponentFixture<ChildObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildObservableComponent);
    component = fixture.componentInstance;
    component.products = new ObservableSet<Product>();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
