let url="http://api.football-data.org/v4/competitions/";
async function display(){
 try{
 let response=await axios.get(url);
 console.log(response);
 }
 catch(e){
      console.log(e)
 }
}
display();
