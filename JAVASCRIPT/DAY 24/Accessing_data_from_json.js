// JSON.parse(data) => Json-->object
// JSON.stringify(data)  => js object-->Json data

//JSON.parse(data);
let json_data=`{
    "fact": "Cats spend nearly 1/3 of their waking hours cleaning themselves.",
    "length": 64
}`;

console.log(`Json Formate${json_data}`)
let obj=JSON.parse(json_data);
console.log(obj.fact);

console.log(obj);
// JSON.stringify(data)
let json=JSON.stringify(obj);
console.log(`The data is converted into json formate : ${json}`);
