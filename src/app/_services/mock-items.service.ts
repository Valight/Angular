import { Injectable } from '@angular/core';
import { AbstractItemsService } from "./abstract-items.service";
import { Item } from "../../Model/Item";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractItemsService{
	items: Item[];

  constructor() { 
  	super();
 	this.items = [
  	new Item("Comprar carne"),
  	new Item("Comprar verdura"),
  	new Item("Comprar carne")
  ]
  }

  getItems():Observable<Item[]>{
  	return new Observable((observable) => {
  		observable.next(this.items);
  		observable.complete();
  	});

  }

  remove(item: Item):Observable<Item[]>{
  	return new Observable((observable) => {
  		console.log("Borrando desde el servicio");
  		this.items = this.items.filter(it=> it !== item);
  		observable.next(this.items);
  		observable.complete();
  	});

  }

  addItem(item: Item):Observable<Item[]>{
    return new Observable((observable) => {
      console.log("Agregando desde el servicio");
      this.items.push(item);
      observable.next(this.items);
      observable.complete();
    });

  }
}
