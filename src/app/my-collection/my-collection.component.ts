import { Component } from '@angular/core';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.css']
})
export class MyCollectionComponent {
  title = "Minha coleção"
  categoria = ''
  itens = [1,2,3,4,5]



}
