import { negocia_ctl } from "./controllers/ctl_nego.js";
const controle = new negocia_ctl();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controle.crianego();
});
