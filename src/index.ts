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

const takeOrder: Promise<string>[] = orders.map((order) => {
  return cafe.orderCoffeeWithAsync(order);
});

Promise.all(takeOrder)
    .then((result: string[]) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })
