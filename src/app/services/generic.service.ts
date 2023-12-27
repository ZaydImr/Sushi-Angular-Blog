import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T> {

  firestore: Firestore = inject(Firestore);
  type: string = "";

  public setType(type: string) : void {
    this.type = type;
  }

  public getAll(): Observable<T[]> {
    const itemCollection = collection(this.firestore, this.type);
    return collectionData(itemCollection) as Observable<T[]>;
  }

}
