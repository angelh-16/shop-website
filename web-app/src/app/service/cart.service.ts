import { Injectable } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new products<any>([]);

  constructor() { }

  getProducts(){
    return this.productList.asObservble();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice(){
    let grandTotal = 0.00;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    });
  }
}

removeCartItem(product : any){
  this.cartItemList.map((a:any, index:any)=>{
    if(ProductsComponent.id===a.id){
      this.cartItemList.splice(index,1)
    }
  })
}
function removeCartItem(product: any, any: any) {
  throw new Error('Function not implemented.');
}

