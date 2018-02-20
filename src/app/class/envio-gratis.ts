import {Distrito} from '../class/distrito';
import {Campana} from '../class/campana';
export class EnvioGratis {
  public cod_envio_gratis: number;
  public costo: number;
  public habilitado: string;
  public campain: Campana;
  public distrito:  Distrito;
  constructor() {
    this.distrito = new Distrito();
    this.campain = new Campana();
  }
}
