var mathLib=require('./lib/math.js');

/*if we don't specify the name of particular file then it Would
simply search for 'index.js' file in that folder.*/
var jokesLib=require('./lib/jokes');

//this is an object
var app={};

//config
app.config={
  'timeBetweenJokes':1000
}

//function to shsow output in console
 app.printJokes=function(){

  //fetching the jokes array
  var allJokes=jokesLib.allJokes();

  //getting random numbers
  var randomNum=mathLib.getRandomNumber();

  //fetching the joke on the index retuned by random number
  var jokesTOPrint=allJokes[randomNum-1];

  //printing the joke
  console.log(jokesTOPrint)
}

//infinititely printing
app.Loop=function(){
  setInterval(app.printJokes,app.config.timeBetweenJokes);
}

/* this is very important since it is the one which will invoke the
 app to print output */

 app.Loop();
