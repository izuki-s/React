// const nums = [3, 1, 4, 1, 5, 10, 2, 6];

// const result = Math.max(...nums);
// console.log(result);


// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let newArr = [...arr1,...arr2];
// let newArry1 = arr1;
// newArry1.push(4);
// console.log(newArry1,arr1);
// console.log(newArr);

// const obj = {
//   name: "Tom",
//   age: 22,
// };
// const newObj = { ...obj };
// newObj.name = "Kappa"
// console.log(newObj);

const restA = (...argA) => console.log(argA);
restA(1, 3, 4)

const restB = (n, ...argB) => console.log(argB);
restB(1, 3, 4)