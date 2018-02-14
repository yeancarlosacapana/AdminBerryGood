import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass'],
  providers: [AppService]
})
export class CategoryComponent implements OnInit {

  public listaCategoria: any[] = [];
  public listaSubCategoria: any[] = [];

  constructor(private Services: AppService) { }

  ngOnInit() {
    this.Services.getCategory().subscribe(rest => {
      this.listaCategoria = rest.json();
    });
    this.Services.getCategory().subscribe(rest => {
      this.listaSubCategoria = rest.json(); });
  }

}
