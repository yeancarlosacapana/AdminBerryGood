import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
  providers : [AppService]
})
export class ProductComponent implements OnInit {

  constructor(private Service: AppService) { }

  public listaProducto: any[] = [];

  ngOnInit() {
    this.Service.getProduct().subscribe(rest => {
      this.listaProducto = rest.json();
    });
  }

}
