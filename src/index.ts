import { Kulkas } from './data/kulkas';

async function refrigeratorProcess() {
    try {
        const kulkas : Kulkas = new Kulkas();
        const aksi = await kulkas.buka();
        console.log( await aksi.lihat() );
        console.log( await aksi.simpan('Gajah') );
        console.log( await aksi.simpan('Nanas') );
        // await kulkas.tutup();
        console.log( await aksi.lihat() );
        console.log( await aksi.ambil('Gajah') );
        console.log( await aksi.ambil('Gajah') );
        await kulkas.tutup();
    } catch (error) {
        console.log(error);
    };
}

refrigeratorProcess().catch()
