import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartitemsComponent } from './Components/cartitems/cartitems.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { Restaurent1Component } from './Components/restaurent1/restaurent1.component';
import { SearchComponent } from './Components/search/search.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { SliderComponent } from './Components/slider/slider.component';



const routes: Routes = [
  
  {path: '',component: SidebarComponent, children : [
    {path: 'rest-1/:r1',component: Restaurent1Component},
    {path: 'rest-2/:r2',component:Restaurent1Component},
    {path: 'rest-3/:r3',component:Restaurent1Component},
    {path: 'rest-4/:r4',component:Restaurent1Component},
    {path:'registration',component:RegistrationComponent},
    {path:'login',component:LoginComponent},
    {path:'search',component:SearchComponent},
    {path:'cartitems',component:CartitemsComponent},
    {path:'check',component:CheckoutComponent},
    {path:'',component:SliderComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
