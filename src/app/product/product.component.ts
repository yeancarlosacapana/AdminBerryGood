import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { AppService } from '../app.service';
import { Producto } from '../class/producto';
import { Images } from '../class/images';

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
    this.getProduct();
    this.getCategory();
  }
  getProduct() {
    this.Service.getProduct().subscribe(rest => {
      this.listaProducto = rest.json();
    });
  }
  getCategory() {
    this.Service.getCategory().subscribe(rest => {
      this.listaCategoria = rest.json();
    });
  }
  showForm() {
      this.addProducto = new Producto();
    jQuery('#myModal').modal('show');
  }
  grabarProducto(producto: Producto) {
    // this.addProducto = new Producto();
   this.addProducto.imagen = (document.getElementById('img') as HTMLImageElement).src;
   if ( this.addProducto.cod_producto === 0) {
    this.Service.postProduct(this.addProducto).subscribe(rest => {
      jQuery('#myModal').modal('hide');
      this.getProduct();
    });
   } else {
     this.Service.updProduct(this.addProducto).subscribe(rest => {
      jQuery('#myModal').modal('hide');
      this.getProduct();
     });
   }


  }
  imageTransBase64(images) {
    const ofile = images.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const result = reader.result;
      $('#img').attr('src', result);
    };
    reader.readAsDataURL(ofile);
  }
  editarProducto(producto) {
    this.addProducto = producto;
    jQuery('#myModal').modal('show');
  }
  eliminarProducto() {}

}
