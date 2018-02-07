import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { MarketingComponent } from './marketing/marketing.component';
import { CategoryComponent } from './category/category.component';
import { DistrictComponent } from './district/district.component';
import { GridComponent } from './grid/grid.component';
import { OrdenComponent } from './orden/orden.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    MarketingComponent,
    CategoryComponent,
    DistrictComponent,
    GridComponent,
    OrdenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
