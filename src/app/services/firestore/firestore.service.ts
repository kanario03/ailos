import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private fireStore: AngularFirestore,
  ) { }

  getUser() {
    return new Promise(async resolve => {
      const docRef = this.fireStore.doc('signup/8CLvq7alZzGWXNEvKyTJ');
      docRef.snapshotChanges().subscribe(data => {
        return resolve(data.payload.data());
      })
    });
  }

  getCurrentAccount() {
    return new Promise(async resolve => {
      const docRef = this.fireStore.doc('signup/8CLvq7alZzGWXNEvKyTJ/aplication/9SuT2NeWihyAMvObXFpT');
      docRef.snapshotChanges().subscribe(data => {
        return resolve(data.payload.data());
      })
    });
  }

  getApplicationAccount() {
    return new Promise(async resolve => {
      const docRef = this.fireStore.doc('signup/8CLvq7alZzGWXNEvKyTJ/current/fOZeZ8M36oJEiRrGIvO6');
      docRef.snapshotChanges().subscribe(data => {
        return resolve(data.payload.data());
      })
    });
  }
}
