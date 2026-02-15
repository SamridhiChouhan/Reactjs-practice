// const student = {
//   name: "Sam",
//   age: 20,
//   course: "BCA",
// };

// const { name, course } = student;
// // console.log(name);

// const colors = ["red", "green", "blue"];

// const [first, , second] = colors;

// // console.log(first, second);

// // const numbers = [1, 2, 3];
// // const copy = [...numbers]
// const fruits = ["Apple", "Banana", "Mango"];

// fruits.map((fruit) => {
//   return console.log(fruit.toUpperCase());
// });

// // const copy = [...fruits, `I like Apple`];
// // console.log(copy);

// const like = fruits.map((fruit) => {
//   return console.log("I like " + fruit);
// });

const students = [
  { name: "Amit", marks: 85 },
  { name: "Riya", marks: 72 },
  { name: "Neha", marks: 90 },
];

const score = students.map((student) => {
  return console.log(student.name + " scored " + student.marks);
});

const marks = students.filter((student) => {
  return student.marks > 80;
  //   student.marks > 80;
});

console.log(marks);
