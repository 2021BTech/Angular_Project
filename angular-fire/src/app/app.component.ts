import { Component } from '@angular/core';
import { Firestore, collection, addDoc} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-fire';

  constructor(private firestore: Firestore) {}

  addData(f: any){
    const collectionRef = collection(this.firestore, 'users');
    addDoc(collectionRef, f.value)
    .then(() => {
      console.log('Data saved successfully');   
    })
    .catch((err)=> {
      console.log(err);
    })
  }
}
