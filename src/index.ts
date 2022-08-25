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
      observer.next('Observable has emitted.');
    });

    this.myPromise = new Promise<string>(resolve => {
      resolve('Promise has emitted.');
    });

    // Obserble layaknya synchronous, dia akan di panggil duluan ketika ada promise bersamanya
    // Bagaimana jika ingin tampil setelah promise ?
    // Cara nya adalah dengan menerapkan setTimeout.
    setTimeout(() => {
      this.myObservable.subscribe((data: any) => {
        console.log(data);
      });
    }, 0)

    this.myPromise.then((data: any) => {
      console.log(data);
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

