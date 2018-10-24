import { Injectable } from '@angular/core';
import { Item } from "../../Model/Item";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AbstractItemsService {

  constructor() { }

  abstract getItems():Observable<Item[]>;
  }
}
