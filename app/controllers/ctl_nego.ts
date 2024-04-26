import { negocio } from "../views/negocio.js";

export class negocia_ctl{
    private iputdt  :HTMLInputElement;
    private inputvalor :HTMLInputElement;
    private inputqtd :HTMLInputElement;

    constructor(){
        this.inputqtd =document.querySelector('#quantidade') ;
        this.inputvalor=document.querySelector('#valor');
        this.iputdt=document.querySelector('#data')


    }
    consultador(){
        const negociasao = this.crianego();
    }
    
    
    crianego(){
        const exp = /-/g;
        const data = new Date(this.iputdt.value.replace(exp,','));
        const quantidade =parseInt(this.inputqtd.value);
        const valor =parseFloat(this.inputvalor.value);
        return new negocio(
        data,quantidade,valor );

    }
    limpaformulario(){
        this.inputqtd.value="";
        this.iputdt.value='';
        this.inputvalor.value='';
        this.iputdt.focus();

    }


}