import {Campana} from '../class/campana';
export class TipoCampana {
  public cod_tipo_campaña: number;
  public envio_gratis: string;
  public descuento: number;
  public producto_adicional: string;
  public campain: Campana;
  constructor() {
    this.campain = new Campana();
  }
}
