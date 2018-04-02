var fs=require('fs');

//object
var jokes={};

//get all jokes from jokes.txt and return them to the user
jokes.allJokes=function(){

  //read the contents of the file named jokes.txt
  var fileContents=fs.readFileSync(__dirname+'/jokes.txt','utf-8');

  //we change them to array
  var jokesArray=fileContents.split(/\r?\n/);

  //return the jokesArray
  return jokesArray;
}

//exports the function
module.exports=jokes;
