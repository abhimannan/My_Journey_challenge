// String Methods

// trim()
let mother="            geetha";
console.log(mother);
let x=mother.trim();
console.log(x);
// concat()
let join=mother.concat(" Kumar");
console.log(join);
// method chaining;
let chain="    this    ";
// let newvalue=chain.trim();
// console.log(newvalue);
// let upperword=chain.toUpperCase();
// console.log(upperword);
let joinx=" is abhi mannan";
let method_chain=chain.trim().toUpperCase().concat(joinx);
console.log(method_chain);
// indexOf("substring");
let hobbi="I Love Coding";
let index=hobbi.indexOf("love");
console.log(index);
 /* note :
     found then return index
     not found return -1
 */
// slice(start_index,end_index);
let fullname="geetha kumar";
let firstname=fullname.slice(0,3);
console.log(firstname);
   // negative index
      let negative=fullname.slice(-1);
      console.log(negative);
   // only one index : give index to last index
      let one_argunment=fullname.slice(4);
      console.log(one_argunment);
// replace("old _value,new_value");
let slogan="Love Is Good Good";
let new_slogan=slogan.replace("Good","Injurious");
console.log(new_slogan);
// replaceAll();
let all="a a a a a";
let replace_all=all.replaceAll("a","geetha");
console.log(replace_all);

// all methods
let x_name="dhoni";
let y=" thala";
let concat=x_name.concat(y);
let slice=x_name.slice(0,2);
let substring=x_name.substring(2,4);
let substr=x_name.substr(2,3);
let uppercase=x_name.toUpperCase();
let lower_case=x_name.toLowerCase();
let replace=x_name.replace("i"," god");
let replace_All=y.replaceAll("a","xx");
let len=x_name.length;
let space_word="   developer    "
let remove_spaces=space_word.trim();
// trimstart()   ,  trimend()
let char_at=x_name.charAt(4);
let char_code_at=x_name.charCodeAt(2);
let index_of=x_name.indexOf("h");
let search=x_name.search("o");
let include=x_name.includes("m");
let start=x_name.startsWith("d");
let end=x_name.endsWith("i");
let repeat=x_name.repeat(5);
console.log(repeat);


