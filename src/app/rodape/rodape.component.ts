import { formatDate } from '@angular/common';
import {Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})

export class RodapeComponent {
  curr = formatDate("08-february-2023", 'dd-MM-yyyy' ,this.locale);
  constructor(
    @Inject(LOCALE_ID) public locale: string,){}
}
