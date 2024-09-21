// Array Methods
// push() , pop() , shift() , unshift()
let names=["abhi"];
names.push("geetha","kumar","vijay","pop");
console.log(names);
names.pop();
console.log(names);
names.shift();
console.log(names);
names.unshift("abhi");
console.log(names);

// task
let array=["january","july","march","august"];
array.shift();
console.log(array);
array[1]="june";
array[2]="march";
array.push("august");
console.log(array);
// includes("element") , indexOf("element")
let x=["btech","mtech","mba","phd"];
console.log(x.includes("btech")); // it return true or false
console.log(x.indexOf("btech"));  // it return the particular index values
// a1.concat(a2) ,  x.reverse(array); 
let y=["bsc","ba"];
let add=x.concat(y);
console.log(add);
console.log(y);
y.reverse();
console.log(y);
// slice(start,end),splice(start,no. of elements to delete);
let colors=["red","green","yellow","brown","white","black"];
console.log("original array",colors)
let requires=colors.slice(2);
console.log(requires);
console.log(colors.slice(2,5));
console.log("|||||||||||||");
// splice(starting_index,no. of elements to delete,added elements);

let sub=["m1","demp","java","dsa"];
console.log("Original Array",sub)
console.log(sub.splice(2,1,"added"));
console.log(sub);
sub.splice(0,3,"Front-end","back-end","database","API's");
console.log(sub);

// sort() 
let marks=[12,21,54,56,87,32];
console.log(marks);
marks.sort();
console.log(marks);

// task
let give_array=["january","july","march","august"];
console.log(give_array);
give_array.splice(0,1,"june");
give_array.splice(0,2,"july","june");
// give_array.splice(0,2,"july",)
console.log(give_array);
// task
let l=["c","c++","html","javascript","python","java","c3","sql"];
l.reverse();
console.log(l);
// for(let i=0;i<=l.length;i++){
//      console.log(l[i]);
// }
console.log("index of javascript in reversed array :",l.indexOf("javascript"));



