// this : used to access the properties of the object with in the method
// this is an objects by default
let student ={
  name:"geetha",
  age:35,
  math:95,
  phy:98,
  che:96,
  eng:95,
  getAvg(){
   console.log(this);
      let avg=(this.math+this.phy+this.che+this.eng)/4;
      console.log(avg);
      console.log(`The average marks of ${this.name} is ${avg}`)
  }
}
console.log(student.getAvg());

