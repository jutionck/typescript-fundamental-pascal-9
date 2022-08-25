// Generic
// Flexible untuk menerima jenis tipe data
// Keyword generic -> T
// Penggunaan nya bisa di function, class, interface

// Before
function getData(items: any[]) : any[] {
  return [].concat(items);
}

const people: any[] = getData(['John', 'Alex', 'Kohl']);
const dadu: any[] = getData([1,2,3,4,5,6]);
console.log(people);
console.log(dadu);

function getDataOther<T>(items: T[]) : T[] {
  return new Array<T>().concat(items);
}

const people02: Array<string> = getDataOther<string>(['John', 'Alex', 'Kohl']);
const dadu02: Array<number> = getDataOther<number>([1,2,3,4,5,6]);
console.log(people02);
console.log(dadu02);

type Employee = {
  name: string;
  age: number;
  skills?: string[];
}

const employees: Employee[] = getDataOther<Employee>([
    {name: 'Daud', age: 20},
    {name: 'Fahlan', age: 20},
    {name: 'Riza', age: 20},
    {name: 'Aisyah', age: 20},
]);
console.log(employees);
