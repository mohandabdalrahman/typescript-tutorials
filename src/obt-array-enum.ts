// representation of object type
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'mohand',
//   age: 25,
//   hobbies: ['sports', 'cooking'],
//   role: [2, 'author']  tuple
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: 'mohand',
  age: 25,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN
};
