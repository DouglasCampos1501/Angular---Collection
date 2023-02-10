 import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  categoria = ''
  showButton = false
  livros = [1, 2, 3, 4, 5]

  //Função chamada automaticamente, logo após o carregamento da classe
  constructor(){
    setTimeout(() => {
      this.categoria = "Fantasia"
      this.showButton =  true
    }, 2000);
  }

  mudarCategoria() {
    this.categoria = "Sci-fi"
    console.log("Shop Component, categora modificada: " + this.categoria)
  }

  atualizarCategoria(evento: Event){

    this.categoria = (evento.target as HTMLInputElement).value;
    console.log("Shop Component, categora alterad: " + this.categoria)
  }
}
