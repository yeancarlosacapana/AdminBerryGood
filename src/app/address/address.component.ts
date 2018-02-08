import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.sass'],
  providers: [AppService]
})
export class AddressComponent implements OnInit {

    public listarDistrito: any[] = [];

  constructor(private Services: AppService) { }

  ngOnInit() {
    this.Services.getDistrito().subscribe(rest => {
      this.listarDistrito = rest.json();
     // console.log(this.listarDistrito);
    });
  }

}
