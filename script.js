function abc() {
  document.getElementById("form").style.background = "rgb(236,240,245)";
  document.getElementById("form").style.boxShadow="5px 5px 5px 5px";
}
abc.onmouseenter=()=>{
  document.getElementsByName("form").style.animation="1.5s ease-in";
}
document.getElementById("inner").onmouseenter = bmw;
document.getElementById("inner").style.boxShadow="1px 1px 1px 1px";
document.getElementById("outer").onmouseenter = roll;
document.getElementById("outer").style.boxShadow="1px 1px 1px 1px";

function bmw() {
  document.getElementById("inner").style.color = "#fff";
  document.getElementById("inner").style.background = "#000";
}
function roll() {
  document.getElementById("outer").style.color = "#fff";
  document.getElementById("outer").style.background = "rgb(0,0,0)";
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// var message1="Please enter ur EMAIL: "; 
// var message2="Please enter ur phone no ";
//  alert("Welcome to\nmy portfolio");
//  alert(message1 + message2);

//  var name=prompt("What is your name?", "");
// alert("Welcome to my world! " + name); 
//  var age=prompt("Tell me your age.", "Your age: ");
//  if ( age == null){ // If user clicks the Cancel button 
// alert("Not sharing your age with me");
// } 
// else{
//  alert(age + " is young"); 
// }
//  alert(prompt("Where do you live? ", ""));

//  if(confirm("Are you really OK?") == true){
//  alert("Then we can proceed!"); 
//   } 
//   else{
//  alert("We'll try when you feel better? "); 
//   }

//   function welcome(){ // Function defined within <head> tags
//  var place="San Francisco";
//  alert("Welcome to "+ place + "!");
//  welcome();
//  }
 
// console.log("<h1> Hello world</h1>");

// function greetings(){ // Function defined within <head> tags 
//   document.bgColor="lightblue"; 
//   alert("Greetings to you!");
//  }

var UId= "abc123";
var EMAIL="bilal@gmail.com";
var UserName= "Bilal khan";
var Password=1234;

console.log(UId);
console.log(EMAIL);
console.log(UserName);
console.log(Password);

console.log(`
   Unique ID is: ${UId}
   EMAIL is : ${EMAIL}
   UserName is : ${UserName}
   Password is : ${Password}
`);
var user = {
     FirstName: "Bilal",
     LastName: "Khan",
     role : "Admin",
     LoginCount : 32,
     facebookSignIn: true,

};

console.log(user.FirstName);
console.log(user.LastName);
console.log(user.LoginCount);
console.log(user.role);
console.log(user.facebookSignIn);


//  const Pass=12345;
// if (Pass>=12345) {
//   console.log("login successfully");
// }
// else{
//   console.log("Try again!");
// }