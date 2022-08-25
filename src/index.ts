import Cafe from './asynchronous/order-coffee';

const cafe: Cafe = new Cafe();
const takeOrder = (error: any, coffee: string) => {
  if (error) console.log(error);
  else console.log(coffee);
}
const orders: string[] = [
    'cafe latte',
    'cappuccino',
    'kopi susu keluarga',
    'black tea',
    'hazelnut',
    'ice cream',
    'tea',
];
cafe.orderCoffee(orders[6], (error: any, coffee: string) => {
  if (error) console.log(error);
  else console.log(coffee);

  cafe.orderCoffee(orders[6], (error: any, coffee: string) => {
    if (error) console.log(error);
    else console.log(coffee);
  })
});

