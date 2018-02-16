import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Categoria } from '../class/categoria';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass'],
  providers: [AppService]
})
export class CategoryComponent implements OnInit {

  public listaCategoria: any[] = [];
  public listaSubCategoria: any[] = [];
  public addCategoria: Categoria =  new Categoria();

  constructor(private Services: AppService) { }

  ngOnInit() {
    this.getCategory();
    this.getSubCategory();
  }
  showModal() {
    jQuery('#categoryModal').modal('show');
  }
  getCategory() {
    this.Services.getCategory().subscribe(rest => {
      this.listaCategoria = rest.json();
    });
  }
  getSubCategory() {
    this.Services.getCategory().subscribe(rest => {
      this.listaSubCategoria = rest.json(); });
  }
  AgregarCategoria(categoria: Categoria) {
    this.Services.postCategory(this.addCategoria).subscribe(rest => {
      jQuery('#categoryModal').modal('hide');
      this.getCategory();
      this.getSubCategory();
    });
  }
}
