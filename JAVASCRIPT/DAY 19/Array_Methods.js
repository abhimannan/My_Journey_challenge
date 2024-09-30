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

