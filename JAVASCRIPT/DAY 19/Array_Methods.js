// arr.forEach(callback)
let arr=[10,20,30,40,50,"A","B","C"];
arr.forEach(print);
function print(elements){
    console.log(elements)
}
arr.map(print);
arr.filter((data)=>{
  if(data<40){
      console.log(data);
  }
});
let t=arr.reduce((pre,next)=>{
    return pre+next;
});
console.log(t);

// Examples

// Array Methods
// forEach(callback); It excecute each of the array elements
// let arr=[10,20,30,40,50];
// arr.forEach((data)=>{
//      console.log(data);
//     });

let students={
     marks:[10,20,50,45],
     names:["geetha","vijay","kumar","abhi"],
     pass(){
         console.log(`${this.names} are cleared all the subjects`);

     }
}
console.log(students.pass());

// arr.map(calllback);
// It excegutes the each elements and returns new array
let graduated=[
    {
        name:"abhi",
        year:10
    },
    {
       name:"geetha",
       year:12,
    },
    {
       name:"kumar",
       year:5,
    },
    {
       name:"vijay",
       year:3,
    }
];
console.log(graduated);
let g=graduated.map((data)=>{
     return data.name;
});
console.log(g);
let year=graduated.map((data)=>{
     return data.year;
});
console.log(year);

// arr.filter(callback); 
// it creates an new array for the given condition

let x=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let even=x.filter((data)=>{
     if(data%2==0){
         console.log(data);
     }
});

// example 
let myArray = [
    {
      name: "Mike",
      age: 12,
      gender: "male",
      salary:45000,
    },
    {
      name: "Madeline",
      age: 80,
      gender: "female",
      salary:65000,
    },
    {
      name: "Cheryl",
      age: 22,
      gender: "female",
      salary:80000,
    },
    {
      name: "Sam",
      age: 30,
      gender: "male",
      salary:98000,
    },
    {
      name: "Suzy",
      age: 4,
      gender: "female",
      salary:125000,
    },
  ];
  console.log(myArray);
  // printing the salary
  myArray.forEach((salary)=>{
     console.log(salary.salary);
  });
  
  let salary_array=myArray.map((salary)=>{
     return salary.salary;
  });
  console.log(salary_array);

// creates an array of names salary > 50000

let good_employes=myArray.filter((data)=>{
     if(data.salary>50000){
         return data.name
     }
});
console.log(good_employes);

    // adding all the employes salary
let total_salary = myArray.reduce((pre,next)=>{
     return pre+next;
});
console.log(total_salary);
// the above code has not solved

// arr.reduce(callback);
let marks=[30,31,45,21,14,41,74];
let total=marks.reduce((pre,next)=>{
     return pre+next;
});
console.log(total);

// arrr.every(callback);
// it returns every true if every element satisfys the condition
// else it return false
// every is works like an AND operator
let e=[2,4,6,9];
let i=e.every((data)=>{ // AND
     return data%2==0;
});
console.log(i);

// "some" is similar to the "every" but the differece is
// "some" is works like an "OR" operator

let some=[1,2,3,4];
let s=some.some((data)=>{ // OR
     return data%4==0;
});
console.log(s);

// reduce(accumilator,element);
let sample_array=[1,2,3];
let v=salary_array.reduce((pre,next)=>{
      return pre+next;
});
console.log(`Sum = ${v}`);

// maximum element in an array
let arr_elements=[1,,3,4,5];
let max=-1;
for(let i=0;i<arr_elements.length;i++){
   if(arr_elements[i]>max){
     max=arr_elements[i];
   }
   console.log(max);

}

// reduce(a,el);
// let m=arr_elements.reduce((result,el)=>{
//   let max=-1;  
//   if(result>max){
//      max=el;
//   }
//   return max;
// });
// console.log(m);
let o=[2,1,5,-5];
let min=o.reduce((min,ele)=>{
    if(min<ele){
         return min;
    }
    else{
       return ele;
    }
});
console.log(min);

// check all the array elements are multiples of 10 ot not
let arr_mul=[10,20,30];
let res=arr_mul.every((data)=>{
   return data%10==0;
});
console.log(res);

// check in an array if anyone of the elment is multiples of both 2 and 10
let heights=[1,2,15,3];
let minimum=heights.reduce((res,ele)=>{
  if(res>ele){
     return ele;

   }
    return ele;

});
console.log(minimum);









