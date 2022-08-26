import { Kulkas } from './observable/kulkas';

const kulkas: Kulkas = new Kulkas();
kulkas.buka().subscribe((data) => console.log(data));
kulkas.action.lihat().subscribe((data) => console.log(data));
kulkas.action.simpan('Gajah').subscribe((data) => console.log(data));
kulkas.action.simpan('Nanas').subscribe((data) => console.log(data));
kulkas.action.lihat().subscribe((data) => console.log(data));
kulkas.action.ambil('Gajah').subscribe((data) => console.log(data));
kulkas.action.ambil('Gajah').subscribe((data) => console.log(data));
kulkas.action.lihat().subscribe((data) => console.log(data));
setTimeout(() => {
  kulkas.tutup().subscribe((data) => console.log(data))
}, 3000)
