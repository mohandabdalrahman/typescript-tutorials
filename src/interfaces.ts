interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): void;
}

const me: IsPerson = {
  name: 'mohand',
  age: 25,
  speak(text) {
    console.log('speak -> text', text);
  },
  spend(amount) {
    console.log('spend -> amount', amount);
  }
};

const greetPerson = (person: IsPerson) => {
  console.log('greetPerson -> person', person);
};
