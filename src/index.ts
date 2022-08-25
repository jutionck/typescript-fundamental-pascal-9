// Observable
/*
* - Menyerupai promise
* - Setiap observable, hanya bisa di eksekusi/dijalankan ketika ada yang subscribe
* - Yang menjadi subscribe adalah si observer
* - Observer ini ada tiga yang bisa digunakan:
*   - observer.next (berhasil)
*   - observer.error (ketika ada error/gagal)
*   - observer.complete (artinya ketika tidak ada lagi observeble)
* Contoh: Try Catch Finaly
* */

import { Observable } from 'rxjs';

class PromiseVersusObservable {
  myObservable: any;
  myPromise: any;

  create(): void {
    this.myObservable = new Observable<string>(observer => {
      console.log('Observable has created.');
      observer.next('Observable has emitted 1.');
      observer.next('Observable has emitted 2.');
      observer.next('Observable has emitted 3.');
    });
    this.myPromise = new Promise<string>(resolve => {
      console.log('Promise has created.');
      resolve('Promise has emitted 1.');
      resolve('Promise has emitted 2.');
      resolve('Promise has emitted 3.');
    });
  }

  execute(): void {
    this.myObservable.subscribe((data: any) => {
      console.log(data);
    });

    this.myPromise.then((data: any) => {
      console.log(data);
    });
  }
}

const promiseObservable: PromiseVersusObservable = new PromiseVersusObservable()
promiseObservable.create();
promiseObservable.execute();
