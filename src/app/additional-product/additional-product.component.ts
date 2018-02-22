import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CampanaAdicional } from '../class/campana-adicional';

declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-additional-product',
  templateUrl: './additional-product.component.html',
  styleUrls: ['./additional-product.component.sass'],
  providers : [AppService]
})
export class AdditionalProductComponent implements OnInit {

  public listaCampain: any[] = [];
  public listaDireccion: any[] = [];
  public listaProducto: any[] = [];
  public listaProductAdditional: any[] = [];
  public addProductAdditional: CampanaAdicional = new CampanaAdicional();
  constructor(private Services: AppService) { }

  ngOnInit() {
    this.listDistrito();
    this.listProducto();
    this.listCampain();
    this.getProductAdditional();
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
  listCampain() {
    this.Services.getCampain().subscribe(rest => {
      this.listaCampain = rest.json();
    });
  }
  showModalAditionalProduct() {
    jQuery('#productAditionalModal').modal('show');
  }
  getProductAdditional() {
    this.Services.getAdditionalProduct().subscribe(rest => {
      this.listaProductAdditional = rest.json();
    });
  }
  postProductAdditional() {
    console.log(this.addProductAdditional);
  }

}
