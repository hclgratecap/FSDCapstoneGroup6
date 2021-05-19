import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant';
import { CartService } from 'src/app/service/cart.service';
import { SearchService } from 'src/app/service/search.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  dish:string="";
  route: ActivatedRoute | null | undefined;
  total_id:any="0";
  cart:CartService;
  restaurant!:Restaurant;
  total_price:any=0;
  total_quantity:any="0";
  btn_cart:boolean=false;
  loginSuccess!:string;
  enableProp!:number;

  constructor(public service:SearchService,public router:Router,public cartService:CartService) {
      this.cart=this.cartService; 
      localStorage.clear();
  }
  
  ngDoCheck(){
      this.total_price=localStorage.getItem('total_price');
      this.total_quantity=localStorage.getItem('total_quantity');
      
      if(this.total_price > 0){
       this.btn_cart=true;
      }  

      this.loginSuccess=this.cartService.getLoginSuccess();
      this.enableProp=this.cartService.getSuccessFlag();
  }

  ngOnInit(): void {
    
  }

  onLogout(){
    location.reload();
    } 

  onEnter(value:any) { 
    this.service.storeData(value);
    this.router.navigate(['search'],{relativeTo:this.route});
  }

}
