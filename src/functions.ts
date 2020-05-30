// type alias
type StringOrNum = string | number;

let greet: Function;
greet = () => {
  console.log('Hello');
};

const sum = (a: number, b: number, c?: StringOrNum) => {
  console.log(a + b);
};

sum(2, 3);


