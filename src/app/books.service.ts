import { EventEmitter, Injectable } from '@angular/core'

@Injectable( {providedIn: 'root'})
export class BooksService{
    books = [
        {nome: "Nome 1", disponivel: true},
        {nome: "Nome 2", disponivel: true},
        {nome: "Nome 3", disponivel: true},
        {nome: "Nome 4", disponivel: true},
        {nome: "Nome 5", disponivel: true},
        {nome: "Nome 6", disponivel: true},
        {nome: "Nome 7", disponivel: true},
        {nome: "Nome 8", disponivel: true}
    ]

    atualizarEstoque = new EventEmitter<boolean>();

    constructor(){
        setTimeout(() => {
            this.books.forEach(livro => {
                livro.disponivel = false
                this.atualizarEstoque.emit(livro.disponivel)
            });
        }, 5000);
    }

    atualizarLivro(id: number, status: boolean) {
        this.books[id].disponivel = status
    }
}