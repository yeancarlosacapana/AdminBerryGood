export class Distrito {
  public cod_distrito:number;
  public nombre_distrito: string;
  public costo_envio: number;
  public habilitado: string;
  public rowState: boolean;
  constructor() {
    this.cod_distrito = 0;
    this.rowState = false;
  }
}
