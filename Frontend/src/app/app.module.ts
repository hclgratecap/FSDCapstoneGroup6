import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './Components/search/search.component';
import { CartitemsComponent } from './Components/cartitems/cartitems.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { Restaurent1Component } from './Components/restaurent1/restaurent1.component';
import { SliderComponent } from './Components/slider/slider.component';
import { LoginComponent } from './Components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    Restaurent1Component, 
    SliderComponent,
    LoginComponent,
    RegistrationComponent,
    SearchComponent,
    CartitemsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
