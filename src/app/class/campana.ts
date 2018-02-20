import { TipoCampana } from '../class/tipo-campana';
export class Campana {
  public cod_campaña: number;
  public nombre_campana: string;
  public cantidad: number;
  public descuento: number;
  public fecha_inicio: Date;
  public fecha_final: Date;
  public estado: string;
  public producto: string;
  public costo_envio: number;
  public tipoCampain: TipoCampana;
  constructor() {
    this.tipoCampain = new TipoCampana();
  }
}
