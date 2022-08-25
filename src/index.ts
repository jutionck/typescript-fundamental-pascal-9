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
  mySubscription: any;

  create(): void {
    this.myObservable = new Observable<string>(observer => {
      console.log('Observable has created.');
      setInterval(() => {
        observer.next('Observable has emitted.')
      }, 1000)
    });
    this.myPromise = new Promise<string>(resolve => {
      console.log('Promise has created.');
      setInterval(() => {
        resolve('Promise has emitted.')
      }, 1000)
    });
  }

  execute(): void {
    this.mySubscription = this.myObservable.subscribe((data: any) => {
      console.log(data);
    });

    this.myPromise.then((data: any) => {
      console.log(data);
    });
  }

  cancel(): void {
    this.mySubscription.unsubscribe();
  }
}

const promiseObservable: PromiseVersusObservable = new PromiseVersusObservable()
promiseObservable.create();
promiseObservable.execute();
setTimeout(() => {
  promiseObservable.cancel();
}, 5000);

