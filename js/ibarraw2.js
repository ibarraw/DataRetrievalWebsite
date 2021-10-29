//PUT ANY VARIABLES AND CLASSES UP HERE ABOVE $(document).ready(function()
var myName; //holds JSON AboutMe.myName
var id; //holds JSON AboutMe.myID
var login;  //holds JSON AboutMe.myLogin
var campus; //holds JSON AboutMe.myCampus
var program;  //holds JSON AboutMe.Program


$(document).ready(function() { 
  console.log("inside doc ready");
	$.getJSON("dataFiles/A1-JSON.json", function(data) {
    console.log("inside json");
    localStorage.setItem("myName", data.AboutMe.myName);
    localStorage.setItem("id", data.AboutMe.myID);
    localStorage.setItem("login", data.AboutMe.myLogin);
    localStorage.setItem("campus", data.AboutMe.myCampus);
    localStorage.setItem("program", data.AboutMe.myProgram);
  });//end of .getJSON

  myName = localStorage.getItem("myName");
  id = localStorage.getItem("id");
  login = localStorage.getItem("login");
  campus = localStorage.getItem("campus");
  program = localStorage.getItem("program");

  //change h1 tag
  $("#header1").html(`My name is: ${myName}`); //template literal
  $("#header1").css("color", "red");
  $("#header1").css("text-decoration-line", "underline");
  $("#header1").css("text-decoration-style", "double");

  //change h2 tag
  $("#header2").html(`My student number is: ${id}`);
  $("#header2").css("color", "blue");
  $("#header2").css("text-decoration-line", "overline underline");
  $("#header2").css("text-decoration-style", "wavy");

  //change h3 tag
  $("#header3").html(`My login name is: ${login}`);
  $("#header3").css("color", "orange");
  $("#header3").css("text-decoration", "underline");
  $("#header3").css("text-decoration-style", "wavy");

  //change h4 tag
  $("#header4").html(`My campus is: ${campus}`);
  $("#header4").css("color", "green");
  $("#header4").css("text-decoration", "underline");
  $("#header4").css("text-decoration-style", "wavy");

  //change h5 tag
  $("#header5").html(`My program is: ${program}`);
  $("#header5").css("color", "purple");
  $("#header5").css("text-decoration", "overline underline");
  $("#header5").css("font-style", "italic");
}); //end of doc ready
