import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartoneComponent } from './shoppingcartone.component';

describe('ShoppingcartoneComponent', () => {
  let component: ShoppingcartoneComponent;
  let fixture: ComponentFixture<ShoppingcartoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingcartoneComponent]
    });
    fixture = TestBed.createComponent(ShoppingcartoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
