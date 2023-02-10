import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ShopComponent } from './shop/shop.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PaginaComponent } from './pagina/pagina.component';
import { FormsModule } from '@angular/forms';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ShopComponent,
    CabecalhoComponent,
    RodapeComponent,
    PaginaComponent,
    MyCollectionComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
