import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Campaña } from '../class/campaña';
import { TipoCampaña } from '../class/tipo-campaña';
import { CampañaAdicional } from '../class/campaña-adicional';
import { EnvioGratis} from '../class/envio-gratis';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.sass'],
  providers : [AppService]
})
export class MarketingComponent implements OnInit {

  public listaDireccion: any[] = [];
  public listaProducto: any[] = [];
  public addCampana: Campaña = new Campaña();
  public addTipodeCampana: TipoCampaña = new TipoCampaña();
  public addCampanaAdicional: CampañaAdicional = new CampañaAdicional();
  public addEnvioFree: EnvioGratis = new EnvioGratis();
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
  postCapana(campaña: Campaña , tipoC: TipoCampaña , camAdi: CampañaAdicional) {
   console.log(this.addCampana);
   console.log(this.addCampanaAdicional) ;
   console.log(this.addTipodeCampana);
  }


}
