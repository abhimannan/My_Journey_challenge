let heroes=[["iron man","super man","spider man"],["bat man","hulk","flash"]];
// for(let i=0;i<=heroes.length;i++){
//   console.log(heroes[i]);
//   for(let j=0;j<heroes[i].length;j++){
//     console.log(heroes[i][j]);
//   }
// }
// for(let names of heroes){
//   // console.log(names);
//   for(let i of names){
//       console.log(i);
//   }
// }

let students=[
   ["geetha",95],
   ["kumar",98],
   ["vijay",99]
];
// for(let i=0;i<=students.length;i++){
//     // console.log(students[i]);
//     for(let j=0;j<=students[i].length;j++){
//         console.log(students[i][j])
//     }
// }

// Nested for of loop
for(let arr of students){
   // console.log(arr);
   for(let arr_index of arr){
      console.log(arr_index);
        }
}