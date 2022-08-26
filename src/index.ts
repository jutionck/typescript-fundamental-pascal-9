import { Kulkas } from './observable/kulkas';
import { catchError, of, switchMap, tap } from 'rxjs';

const kulkas: Kulkas = new Kulkas();
const action = kulkas.buka();
action.pipe(
    tap((data) => console.log('tap.action.lihat: ', data)),
    switchMap(() => {
      return kulkas.action.lihat();
    }),
    catchError((error) => {
      return of('Ada error')
    }),
    tap((data) => console.log('tap.action.simpan: ', data)),

    switchMap(() => {
      return kulkas.action.simpan('Gajah');
    }),
    catchError((error) => {
      return of('Ada error')
    }),
    tap((data) => console.log('tap.action.simpan: ', data)),

    switchMap(() => {
      return kulkas.action.simpan('Nanas');
    }),
    catchError((error) => {
      return of('Ada error')
    }),
    tap((data) => console.log('tap.action.lihat: ', data)),
    switchMap(() => {
      return kulkas.action.lihat();
    }),
    catchError((error) => {
      return of('Ada error')
    }),
    tap((data) => console.log('tap.action.ambil: ', data)),
    switchMap(() => {
      return kulkas.action.ambil('Gajah');
    }),
    catchError((error) => {
      return of('Ada error')
    }),
    tap((data) => console.log('tap.action.ambil: ', data)),
    switchMap(() => {
      return kulkas.action.ambil('Gajah');
    }),
    catchError((error) => {
      return of('Ada error')
    }),
    tap((data) => console.log('tap.action.tutup: ', data)),
    switchMap(() => {
      return kulkas.tutup();
    }),
    catchError((error) => {
      return of('Ada error')
    })
).subscribe((data) => console.log('subscribe:',data))
