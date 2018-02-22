import { Producto } from '../class/producto';
import { Campana } from '../class/campana';
import { Distrito } from '../class/distrito';
export class CampanaAdicional {
  public cod_campaña_adicional: number;
  public cantidad: number;
  public descuento: number;
  public producto: Producto;
  public campain: Campana;
  public distrito: Distrito;
  public fecha_inicio: Date;
  public fecha_fin: Date;
  constructor() {
    this.producto = new Producto();
  }
}
