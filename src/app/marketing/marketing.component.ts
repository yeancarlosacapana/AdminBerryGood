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
      //console.log(rest.json());
      this.listaDireccion = rest.json();
      console.log(this.listaDireccion);
    });
  }

}
