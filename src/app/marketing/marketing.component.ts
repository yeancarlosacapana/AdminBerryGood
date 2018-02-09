import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.sass'],
  providers : [AppService]
})
export class MarketingComponent implements OnInit {

  public listaDireccion: any[] = [];
  public listaProducto: any[] = [];
  constructor(private Services: AppService) { }

  ngOnInit() {
    this.Services.getDistrito().subscribe(rest => {
      this.listaDireccion = rest.json();
    });
    this.Services.getProduct().subscribe(rest => {
      this.listaProducto = rest.json();
      console.log(this.listaProducto);
    });
  }

}
