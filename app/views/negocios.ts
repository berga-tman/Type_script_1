import { negocio } from "./negocio.js";

export class Negocios {
    private negocios :Array<negocio> = [];

    adiconador(negocio: negocio){
        this.negocios.push(negocio);
    }
    lista():Array<negocio>{
        return this.negocios;
    }


}
const negocios = new Negocios ();
