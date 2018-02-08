import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { MarketingComponent } from './marketing/marketing.component';
import { CategoryComponent } from './category/category.component';
import { GridComponent } from './grid/grid.component';
import { OrdenComponent } from './orden/orden.component';
import { AddressComponent } from './address/address.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MarketingComponent,
    CategoryComponent,
    GridComponent,
    OrdenComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
