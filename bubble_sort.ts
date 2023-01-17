//first one

const Swapping = (arr: number[]) => {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr.length; y++) {
      if (arr[y] > arr[x]) {
        let data = arr[x];
        arr[x] = arr[y];
        arr[y] = data;
      }
    }
  }

  return arr;
};
// console.log(Swapping([4, 1, 7, 8, 3, 5]));

// const Bubbling = (arr: number[]) => {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let data = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = data;
//       }
//     }
//   }

//   return arr;
// };

// console.log(Bubbling([4, 1, 7, 8, 3, 5]));

// const Swap_data = (arr: number[]) => {
//   for (let x = 0; x < arr.length; x++) {
//     for (let y = 0; y < arr.length; y++) {
//       if (arr[y] > arr[x]) {
//         let data = arr[x];
//         arr[x] = arr[y];
//         arr[y] = data;
//       }
//     }
//   }
//   return arr;
// };

// let values: number[] = [];
// Array.apply(null, { length: 10 }).map((el) => {
//   if (el === undefined) {
//     el = Math.floor(Math.random() * 10);
//     values.push(el);
//   }
// });
// console.log(Swap_data(values));

const bubble = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};
let values: number[] = [];
Array.apply(null, { length: 10 }).map((el) => {
  if (el === undefined) {
    el = Math.floor(Math.random() * 10);
    values.push(el);
  }
});
console.log(bubble(values));
