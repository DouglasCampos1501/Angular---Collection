import { Component } from "@angular/core";

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent {
    nome = 'O lobo solitário'
    valor = 0.0
    disponivel = true
    oferta = true

    constructor(){
        this.valor = Math.random() * 100 + 20
        this.disponivel = Math.random() > 0.1 ? true : false
        this.oferta = Math.random() > 0.5 ? true : false
        this.nome = Math.random() > 0.5 ? "O Lobo Solitário" : "Drácula"
    }

    mudarCor(){
        return this.oferta ? 'green' : 'red';
    }

    getOferta(){
        return this.oferta
    }
}