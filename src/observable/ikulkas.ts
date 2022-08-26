import { Observable } from 'rxjs';

export interface IAction {
  lihat(): Observable<string[]>;
  ambil(item: string): Observable<string>;
  simpan(item: string): Observable<string>;
}

export interface IKulkas {
  buka(): Observable<IAction|string>;
  tutup(): Observable<string>;
}
