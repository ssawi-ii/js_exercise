var a = prompt("What is your name?");
text = a.slice(0,1);
word = text.toUpperCase()+a.slice(1).toLowerCase();
alert("Hello " + word);