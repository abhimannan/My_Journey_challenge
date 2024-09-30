function name(){
     console.log("name");

}
name();

function fun_name(){
    console.log("This is pease of code");

}
fun_name();

// dice rolling task
function dice_roll(){
   let random_num=Math.random()*6;
   console.log(Math.floor(random_num+1));
}
dice_roll();
// 3 nums averages
function avg(a,b,c){
    return (a+b+c)/3;

}
console.log(avg(1,1,1))