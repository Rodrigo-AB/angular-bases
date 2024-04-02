// La interface nos permitira declarar los tipos de elementos que necesitamos para implementar dentro de nuestros componentes. de esta forma, evitamos el uso del tipo "any"


export interface Character {
  id?: string;
  name: string;
  power: number;
}
