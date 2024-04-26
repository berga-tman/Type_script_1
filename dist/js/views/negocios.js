export class Negocios {
    constructor() {
        this.negocios = [];
    }
    adiconador(negocio) {
        this.negocios.push(negocio);
    }
    lista() {
        return this.negocios;
    }
}
const negocios = new Negocios();
