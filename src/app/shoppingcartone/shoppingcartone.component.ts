import { Component } from '@angular/core';
import { ShoppingcartoneService } from '../shoppingcartone.service';
import { shopnow } from '../model/shopnow';

@Component({
  selector: 'app-shoppingcartone',
  templateUrl: './shoppingcartone.component.html',
  styleUrls: ['./shoppingcartone.component.css']
})
export class ShoppingcartoneComponent {

  
  loading: boolean = false;
  errorMessage:any;
  shopnows:shopnow[]=[];

  constructor(private shoppingcartoneService: ShoppingcartoneService) {
  }

  public getShopnow() {
    this.loading = true;
    this.errorMessage = "";
    this.shoppingcartoneService.getShopnow()
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received',response)
          this.shopnows = response.products; 
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed 
          this.loading = false; 
        })
  }

}
