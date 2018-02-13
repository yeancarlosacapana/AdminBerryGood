import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { AppService } from '../app.service';
import { Producto } from '../class/producto';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
  providers : [AppService]
})
export class ProductComponent implements OnInit, AfterViewInit {

  constructor(private Service: AppService) { }
  files: FileList;
  public listaProducto: any[] = [];
  public listaCategoria: any[] = [];
  public addProducto: Producto = new Producto();
  ngAfterViewInit(): void {}
  ngOnInit() {
    this.Service.getProduct().subscribe(rest => {
      this.listaProducto = rest.json();
      // console.log(this.listaProducto);
    });
    this.Service.getCategory().subscribe(rest => {
      this.listaCategoria = rest.json();
    });
  }
  grabarProducto(producto: Producto) {
   console.log(this.addProducto);
  }
  eliminarProducto() {}
  editarProducto() {}
  getFiles(event) {
    this.files = event.target.files;
}

}
