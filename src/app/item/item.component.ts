import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  item = [
    {nome: "Item 01", quantidade: 1, estado: "lacrado", disponivel: true, categoria: 0, img: "assets/dracula.jpg"},
    {nome: "Item 02", quantidade: 2, estado: "usado em bom estado", disponivel: true, categoria: 2, img: "assets/dracula.jpg"},
    {nome: "Item 03", quantidade: 3, estado: "danificado", disponivel: true, categoria: 3, img: "assets/dracula.jpg"},
    {nome: "Item 04", quantidade: 4, estado: "lacrado", disponivel: false, categoria: 4, img: "assets/dracula.jpg"},
    {nome: "Item 05", quantidade: 5, estado: "usado em bom estado", disponivel: true, categoria: 5, img: "assets/dracula.jpg"},
    {nome: "Item 06", quantidade: 6, estado: "danificado", disponivel: true, categoria: 0, img: "assets/dracula.jpg"},
]

}
