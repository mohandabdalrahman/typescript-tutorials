"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'mohand',
    age: 25,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
