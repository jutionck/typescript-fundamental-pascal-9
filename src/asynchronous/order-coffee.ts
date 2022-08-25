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

  private callbackPromise(order: string, resolve: any, reject:any): void {
    this.orderCoffee(order, (error?: any, result?: string) => {
      if (error) reject(new Error(error))
      else resolve(result)
    });
  }

  orderCoffeeWithAsync(order: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.callbackPromise(order, resolve, reject)
    });
  }
}
