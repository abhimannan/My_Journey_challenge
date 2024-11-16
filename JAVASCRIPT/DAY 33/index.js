// OOPS

// Prototypes Objects
/*let arr=[1,2,3];
let arr2=[1,2,3];
arr.sayhi=()=>{
  console.log("say hellow");
}
console.log(arr.sayhi());
console.log(arr2.push(2));

arr.__proto__.push=(n)=>{
  console.log("hellow",n);
}
*/
// Array,String methods
/*console.log(Array.prototype);
console.log(String.prototype);*/

// class
class person{
   constructor(name,age){
     this.name=name;
     this.age=age;
   }
   talk(){
     console.log("Talking...");
   }
}
// creating objects
let p1=new person("abhi",20);
console.log(p1.talk());
console.log(p1);

let p2=new person("geetha",35);
console.log(p2);

let p3=new person("vijay",19);
console.log(p3);

// inheritence
class parent{
   alive=true;
   run(){
     console.log("Running...");
   }
   walk(){
      console.log("walking...");
   }
}

class child extends parent{
     name="child";
     class="1st";
}

class child1 extends parent{
     name="child1";
     class="2nd";
}
let o=new child();
// console.log(o);
// console.log(o.alive);
// console.log(o.run());
// console.log(o.walk());

let o1=new child1();
console.log(o1);
console.log(o1.alive);
console.log(o1.run());
console.log(o1.walk());

// volleyball class,object
class common{
  constructor(name,year,roll){
    this.name=name;
    this.year=year;
    this.roll=roll;
  }
}
class player extends common{
  constructor(name,year,roll){
    super(name,year,roll);
  }
  name="captain";
}

let player1=new player("abhi","3rd year","attacker");
console.log("player",player1);
console.log("roll : ",player1.name);