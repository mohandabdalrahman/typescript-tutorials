class Person {
  name: string;
  age: number;
  address: string;
  constructor(n: string, a: number, d: string) {
    this.name = n;
    this.age = a;
    this.address = d;
  }
}

const person1 = new Person('mohand', 25, 'cairo');
const person2 = new Person('ahmed', 24, 'england');
person1.address = 'tddd';
console.log('person1', person1);
console.log('person2', person2)
