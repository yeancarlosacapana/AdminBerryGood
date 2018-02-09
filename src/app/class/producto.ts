export class Producto {
  public cod_producto: number;
  public desc_producto: string;
  public imagen: string;
  public precio: number;
  public stock: number;
  public tiempo_entrega: Date;
  public categoria_cod_categoria: number;
  public nombre_producto: string;
  public rowState: boolean;
  constructor() {
    this.cod_producto = 0;
    this.rowState = false;
  }
}
