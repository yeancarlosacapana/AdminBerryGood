import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from '../app.service';
import { Distrito } from '../class/distrito';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.sass'],
  providers: [AppService]
})
export class AddressComponent implements OnInit , AfterViewInit {
    public listarDistrito: Distrito[] = [];
    public adddistrito: Distrito;

  constructor(private Services: AppService) { }

  ngOnInit() {
    this.getDistrito();
  }
  ngAfterViewInit(): void {}
  additem() {
    this.adddistrito  = new Distrito();
    this.adddistrito.rowState = true;
    // this.adddistrito.nombre_distrito = 'ica';
    // this.adddistrito.costo_envio = 10;
    // this.adddistrito.habilitado = 'A' ;
    this.listarDistrito.push(this.adddistrito);
  }
  changeState(distrito: Distrito ) {
    distrito.rowState = false;
  }
  grabarDistrito(distrito: Distrito) {
    // console.log(this.adddistrito);
    this.Services.postDistrito( distrito ).subscribe(rest => {
      console.log(rest);
  });
    // const DISTRITOGRABAR = this.listarDistrito.filter(item => item.cod_distrito === 0 );
    // console.log(DISTRITOGRABAR);
  }
  eliminarDistrito(cod_distrito: number) {
    console.log(cod_distrito);
    this.Services.destroyDistrito(cod_distrito).subscribe(rest => {
      console.log(rest);
      this.getDistrito();

    });
  }
  getDistrito() {
    this.Services.getDistrito().subscribe(rest => {
      this.listarDistrito = <Distrito[]>rest.json();
     // console.log(this.listarDistrito);
    });
  }
}
