export default class Cafe {
  orderCoffee(order: string, cb: (error?: any, result?: string) => void): void {
    console.log('Mohon menunggu, pesanan', order, 'sedang dibuat....');
    setTimeout(() => {
      if (order === 'tea') cb(`Pesanan ${order} tidak ada`);
      else {
        const result = `Kopi ${order}`;
        console.log('Pesanan', result, 'sudah selesai');
        cb(null, result);
      }
    }, 3000);
  }
}
