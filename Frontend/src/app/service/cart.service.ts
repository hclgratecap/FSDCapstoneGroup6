import { Injectable } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import restaurants from '../jsonFile/restaurant.json';
@Injectable({
  providedIn: 'root'
})


export class CartService {

  public search:string="";
  public dish:string="";
  public total_id:any;
  public total_price:number=0;
  public restaurant!:Restaurant;
  public quantity:number=0;
  public cartData:Restaurant[]=[];  
  public loginSuccessUser!:string;
  public flag!:number;
   
  constructor() { }

    //storing the items after clicking add to cart button and calculating the total_price, total_quantity 
    //and saving the values in localstorage
    public storeCart(dishId:string):void {  
       this.dish = dishId;
      
      for(let restaurant of restaurants) {
           if(restaurant.id == this.dish) {
               this.cartData.push(restaurant); 
               this.total_price=restaurant.price+this.total_price;
               console.log("id is"+this.total_price); 

               let key = 'total_price';
               localStorage.setItem(key, this.total_price.toString());
               this.quantity=this.quantity+1;

               let key1 = 'total_quantity';
               localStorage.setItem(key1, this.quantity.toString());
               console.log(this.cartData);
               localStorage.setItem("users", JSON.stringify(this.cartData));
           }         
        }
    }

    public onCartPlus(rest:Restaurant):number {
      for(let rests of restaurants) {
        if(rests.id === rest.id) {
          this.quantity++;
        }
      }
        return this.quantity;
    }

    //setting the values of logged in username and flag varibale
    public onLoginSuccess(data:string,flag:number) {
      this.flag = flag;
      this.loginSuccessUser = data;
    }

    //fetching the name of logged in user
    public getLoginSuccess():string{
      return this.loginSuccessUser;
    }

    //fetching the flag variable for logged in user
    public getSuccessFlag():number{
      return this.flag;
    }
}
