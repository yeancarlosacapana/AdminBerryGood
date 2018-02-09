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

  public listaProducto: any[] = [];
  public addProducto: Producto;
  ngAfterViewInit(): void {}
  ngOnInit() {
    this.Service.getProduct().subscribe(rest => {
      this.listaProducto = rest.json();
      console.log(this.listaProducto);
    });
  }
  addItem() {
    this.addProducto  = new Producto();
    this.addProducto.rowState = true;
    this.listaProducto.push(this.addProducto);
  }
  changeState(producto: Producto ) {
    producto.rowState = false;
  }
  grabarProducto() {}
  eliminarProducto() {}
  editarProducto() {}

}
