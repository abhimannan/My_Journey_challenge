class user {
    static numberofvariables = 0;
    constructor(name,age,roll){
         this.name=name;
         this.age=age;
         this.roll=roll;
         user.numberofvariables++;
    }
    // normal methods
    login(){
         console.log(`Hi ${this.name}`);
         console.log("user login");
    }
    logout(){
         console.log(`He your ${this.name} logout`);
         console.log("Sorry!");
    }
    static totalnoofusers(){
         console.log(`Total users : ${user.numberofvariables}`);

    }
}

let user1 = new user("geetha",35,548);
console.log(user1.name);
let user2 = new user("kumar",42,549);
console.log(user2.name);
let user3 = new user("vijay",19,550);
console.log(user3.name);
user3.login();
console.log(`No. of users : ${user.numberofvariables}`);
// calling the static method
user.totalnoofusers();

// inheritance
class paiduser extends user {// access all the data from the user class
    constructor(name,age,roll){
         super(name,age,roll);
         this.storage = 100;
    }
    message() {
         console.log(`You can access all the data`);
         return this;
        }
    storage(){
        console.log(`You have 100GB storage`);
    }
    login(){
         console.log("this is paidusers login!");
        //  return this;// returns an object
    }
}
let paieduser1 = new paiduser("abhi",20,551);
console.log(paieduser1);
console.log(paieduser1.login());
paiduser.totalnoofusers();// static methods
// method chaining
paieduser1.message().login();
