// Default parameter
function Default(a,b=10){
  return a+b;
}
Default(2);// a=2,b=by default b=10
let a=Default(1,3);// a=1;b=3;b value is overridded
console.log(a);
Default(2);

