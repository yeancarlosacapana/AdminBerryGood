import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { AppService } from '../app.service';
import { Producto } from '../class/producto';

declare var jQuery: any;
declare var $: any;

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
    this.Service.postProduct(this.addProducto).subscribe(rest => {
      this.addProducto.imagen = (document.getElementById('img') as HTMLImageElement).src;
    });
   console.log(this.addProducto);
  }
  imageTransBase64(images) {
    const ofile = images.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const result = reader.result;
      $('#img').attr('src', result);
      console.log(result);
    };
    reader.readAsDataURL(ofile);
  }
  eliminarProducto() {}
  editarProducto() {}
}
