//var first_name = "samuel"; two forward slashes mean a single line comment

/*

alsdkfj
asdfl;kj
asd;lfkj


BLOCK COMMENT


asd;lkj
asdflkja
asdflkj
*/


var greeting = "hello!";

var first_name = "samuel";

var last_name = "wolfe";

var message1 = "don't forget to pick up these items";

var message2 = "also, make sure to gather wood, for dooms day prepping";

var favoriteQuote = "\"To be or not to be...\"";

//use single quotes if you have a lot of illegal characters

var my_image = '<img src="images/myImage.png"/>';

var goodbye = "see you later";

//Bad variable names: (errors!!!)
//var first name = "";
//var 3first_name = "";
//var math = "";

//operators

// "=" assigns values

// "+=" (concatenation assignment operator, strings) adds to whatever the variable currently has

//output variables to the console!!!

/*console.log(greeting);
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(favoriteQuote);
console.log(goodbye);*/

console.log(greeting + " " + first_name + " " + last_name + " " + message1 + " " + message2 + " " + favoriteQuote + " " + " " + goodbye);

//my quote... the parts in asteriks are the variables that will change...

//My fellow *Americans*, ask not what your *country* can do for *you*—ask what *you* can do for your *country*.  

var static_words1 = "did not invent ";
var static_words2 = " In a very ";
var static_words3 = " sense... ";
var static_words4 = " invented ";

//create a variable that is used as a reference to your form button 
//we use the unique ID attribute to do this

var button = document.getElementById("submit");

//then we add the ability to have a mouse click fire off a function when it's clicked on

button.addEventListener("click", onClick, false);

function onClick(evt)

{
  evt.preventDefault(evt);//this line stops the form from submitting//by preventing its default action
  
  //Forms
  
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
	var element5 = document.getElementById("form1").elements.item(4).value;
  
  console.log(element1 + static_words1 + element2 + static_words2 + element3 + static_words3 + element4 + static_words4 + element5);
  
  //document.getElementById("myForm").elements.item(0).value;
 
}
