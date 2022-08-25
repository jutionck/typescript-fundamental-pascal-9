import { IAction, IKulkas } from './ikulkas';

class Action implements IAction {
  isi: string[] = [];
  condition: boolean = true;

  lihat(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!this.condition) {
          reject(['Kulkas belum dibuka']);
        } else {
          resolve(this.isi);
        }
      }, 1000);
    });
  }

  ambil(item: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!this.condition) {
          reject('Kulkas belum dibuka');
        } else if (!this.isi.includes(item)) {
          resolve(`Item ${item} tidak ada`);
        } else {
          resolve(`Item ${item} diambil`);
          const i = this.isi.indexOf(item);
          this.isi.splice(i, 1);
        }
      }, 1000);
    });
  }

  simpan(item: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!this.condition) {
          reject('Kulkas belum dibuka');
        } else {
          resolve(`Item ${item} sudah disimpan`);
          this.isi.push(item);
        }
      }, 1000);
    });
  }
}

export class Kulkas implements IKulkas {
  action: Action = new Action();
  buka(): Promise<IAction> {
    return new Promise((resolve, reject) => {
      this.action.condition = true;
      console.log('Kulkas terbuka');
      resolve(this.action);
    });
  }
  tutup(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.action.condition = false;
      console.log('Kulkas tertutup')
      resolve();
    });
  }
}
