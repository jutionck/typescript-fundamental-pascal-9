import Cafe from './asynchronous/order-coffee';

const cafe: Cafe = new Cafe();
// const takeOrder = (error: any, coffee: string) => {
//   if (error) console.log(error);
//   else console.log(coffee);
// }
const orders: string[] = [
    'cafe latte',
    'cappuccino',
    'kopi susu keluarga',
    'tea',
    'black tea',
    'hazelnut',
    'ice cream',
];
// cafe.orderCoffee(orders[6], (error: any, coffee: string) => {
//   if (error) console.log(error);
//   else console.log(coffee);
//
//   cafe.orderCoffee(orders[6], (error: any, coffee: string) => {
//     if (error) console.log(error);
//     else console.log(coffee);
//   })
// });
//
// const takeOrder: Promise<string>[] = orders.map((order) => {
//   return cafe.orderCoffeeWithAsync(order);
// });

// Promise.all(takeOrder)
//     .then((result: string[]) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     })

async function orderProcess(): Promise<string[]> {
    const result: string[] = [];
    for (const order of orders) {
        try {
            const takeOrder: string = await cafe.orderCoffeeWithAsync(order);
            result.push(takeOrder);
        } catch (error) {
            console.log(`Pesanan ${order} tidak berhasil, karena ${error}`);
        }
    }
    return result;
}

orderProcess()
    .then((result: string[]) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })
