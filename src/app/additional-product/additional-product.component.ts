import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-additional-product',
  templateUrl: './additional-product.component.html',
  styleUrls: ['./additional-product.component.sass'],
  providers : [AppService]
})
export class AdditionalProductComponent implements OnInit {

  public listaDireccion: any[] = [];
  public listaProducto: any[] = [];
  constructor(private Services: AppService) { }

  ngOnInit() {
    this.listDistrito();
    this.listProducto();
  }
  listDistrito() {
    this.Services.getDistrito().subscribe(rest => {
      this.listaDireccion = rest.json();
    });
  }
  listProducto() {
    this.Services.getProduct().subscribe(rest => {
      this.listaProducto = rest.json();
    });
  }
  showModalAditionalProduct() {
    jQuery('#productAditionalModal').modal('show');
  }

}
