export class Categoria {
  public cod_categoria: number;
  public nombre_categoria: string;
  public id_parent: number;
  public nombre_subcategoria: string;

  constructor() {
    this.cod_categoria = 0;
  }
}
