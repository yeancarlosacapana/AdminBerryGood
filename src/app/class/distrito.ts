export class Distrito {
  public cod_address: number;
  public address_name: string;
  public shipping_cost: number;
  public state: string;
  public rowState: boolean;
  constructor() {
    this.cod_address = 0;
    this.rowState = false;
  }
}
