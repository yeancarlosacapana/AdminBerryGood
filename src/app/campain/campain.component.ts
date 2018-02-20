import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Campana } from '../class/campana';
import { TipoCampana } from '../class/tipo-campana';

declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-campain',
  templateUrl: './campain.component.html',
  styleUrls: ['./campain.component.sass'],
  providers : [AppService]
})
export class CampainComponent implements OnInit {

  public listaDireccion: any[] = [];
  public listaProducto: any[] = [];
  public addCampania: Campana = new Campana();
  public tipoCampain: TipoCampana = new TipoCampana();

  public chkDescuento;
  public chkFree;
  public chkAdditionalProduct;

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
  showModalCampain() {
    jQuery('#campainModal').modal('show');
  }
  postCampain() {
    this.addCampania.tipoCampain = new TipoCampana();
    this.addCampania.tipoCampain.descuento = this.chkDescuento;
    this.addCampania.tipoCampain.envio_gratis = this.chkFree;
    this.addCampania.tipoCampain.producto_adicional = this.chkAdditionalProduct;
    console.log(this.addCampania);
  }

}
