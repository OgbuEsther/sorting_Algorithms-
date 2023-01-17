// // const merge_sort = (arr1: number[], arr2: number[]) => {
// //     let result :number[] =[]

// //     let x: number = 0
// //     let y: number = 0

// //     while (x < arr1.length && y < arr2.length) {
// //         if (arr2[y] > arr1[x]) {
// //             result.push(arr1[x])
// //             x++
// //         }
// //         else {
// //             result.push(arr2[y])
// //             y++
// //         }
// //     }

// //     while (x < arr1.length) {
// //         result.push(arr1[x])
// //         x++
// //     }

// //     while (y < arr2.length) {
// //         result.push(arr2[y])
// //         y++
// //     }

// //     return result
// // }

// const merge_practice = (arr1: number[], arr2: number[]) => {
//     let result: number[] = []

//     let x:number = 0;
//     let y:number=0

//     while (x < arr1.length && y < arr2.length) {
//         if (arr2[y] > arr1[x]) {
//             result.push(arr1[x])
//             x++
//         }
//         else {
//             result.push(arr2[y])
//             y++
//         }
//     }

//     while (x < arr1.length) {
//         result.push(arr1[x])
//         x++
//     }

//     while (y < arr2.length) {
//         result.push(arr2[y])
//         y++
//     }

//     return result
// }

// const OurMerge = (one: number[], two: number[]) => {
//   let answer: number[] = [];

//   let i: number = 0;
//   let j: number = 0;

//   while (i < one.length && j < two.length) {
//     if (two[j] < one[i]) {
//       answer.push(two[j]);
//       j++;
//     } else {
//       answer.push(one[i]);
//       i++;
//     }
//   }

//   while (i < one.length) {
//     answer.push(one[i]);
//     i++;
//   }
//   while (j < two.length) {
//     answer.push(two[j]);
//     j++;
//   }
//   return answer;
// };

// const OurSort = (arr: number[]) => {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let midpoint = Math.floor(arr.length / 2);
//   let left = OurSort(arr.slice(0, midpoint));
//   let right = OurSort(arr.slice(midpoint));

//   return OurMerge(left, right);
// };

// const ARRAYS: number[] = [];

// Array.apply(null, { length: 100 }).map((el) => {
//   if (el === undefined) {
//     el = Math.floor(Math.random() * 100);
//     ARRAYS.push(el);
//   }
// });
// console.log(OurSort(ARRAYS));

const MERGE = (arr1: number[], arr2: number[]) => {
  let result: number[] = [];

  let x: number = 0;
  let y: number = 0;

  while (x < arr1.length && y < arr2.length) {
    if (arr2[y] > arr1[x]) {
      result.push(arr1[x]);
      x++;
    } else {
      result.push(arr2[y]);
      y++;
    }
  }
  while (x < arr1.length) {
    result.push(arr1[x]);
    x++;
  }

  while (y < arr2.length) {
    result.push(arr2[y]);
    y++;
  }

  return result;
};

const SORTING = (arr: number[]) => {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = SORTING(arr.slice(0, mid));
  let right = SORTING(arr.slice(mid));

  return MERGE(left, right);
};

let input: number[] = [];
Array.apply(null, { length: 20 }).map((el) => {
  if (el === undefined) {
    el = Math.floor(Math.random() * 1000);
    input.push(el);
  }
});

console.log(SORTING(input));
