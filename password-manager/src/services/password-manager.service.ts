import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PasswordManagerService {

  constructor(private firestore: Firestore) { }

  addSite(data: object): Promise<void> {
    const sitesRef = collection(this.firestore, 'sites');
    return addDoc(sitesRef, data).then(() => {
      return;
    });
  }

  loadSites(){
    const sitesRef = collection(this.firestore, 'sites');
    return collectionData(sitesRef, {idField: 'id'})
  }
}
