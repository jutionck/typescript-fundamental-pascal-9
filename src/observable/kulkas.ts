import { IAction, IKulkas } from '../observable/ikulkas';
import { Observable, Observer } from 'rxjs';

class Action implements IAction {
  private isi: string[] = [];
  private isOpen: boolean = true;

  lihat(): Observable<string[]> {
    return new Observable<string[]>((observer: Observer<string[]>) => {
      setTimeout(() => {
        if (!this.getIsOpen()) {
          observer.error(['Kulkas belum dibuka']);
        } else {
          observer.next(this.getIsi());
        }
      }, 1000);
    });
  }

  ambil(item: string): Observable<string> {
    return new Observable<string>((observer: Observer<string>) => {
      setTimeout(() => {
        if (!this.getIsOpen()) {
          observer.error('Kulkas belum dibuka');
        } else if (!this.isi.includes(item)) {
          observer.next(`Item ${item} tidak ada`);
        } else {
          observer.next(`Item ${item} diambil`);
          const i = this.isi.indexOf(item);
          this.isi.splice(i, 1);
        }
      }, 1000);
    });
  }

  simpan(item: string): Observable<string> {
    return new Observable<string>((observer: Observer<string>) => {
      setTimeout(() => {
        if (!this.getIsOpen()) {
          observer.error('Kulkas belum dibuka');
        } else {
          observer.next(`Item ${item} sudah disimpan`);
          this.isi.push(item);
        }
      }, 1000);
    });
  }

  getIsi(): string[] {
    return this.isi
  }

  setIsOpen(open: boolean): void {
    this.isOpen = open;
  }

  getIsOpen(): boolean {
    return this.isOpen
  }
}

export class Kulkas implements IKulkas {
  action: Action = new Action();
  buka(): Observable<IAction|string> {
    return new Observable<IAction|string>((observer: Observer<IAction|string>) => {
      this.action.setIsOpen(true);
      observer.next('Kulkas terbuka');
      observer.next(this.action);
    });
  }
  tutup(): Observable<string> {
    return new Observable<string>((observer: Observer<string>) => {
      this.action.setIsOpen(false);
      observer.next('Kulkas tertutup')
    });
  }
}
