//PUT ANY VARIABLES AND CLASSES UP HERE ABOVE $(document).ready(function()
var dataArr = new Array();
var imgArr = new Array();
var myName; //holds JSON AboutMe.myName
var id; //holds JSON AboutMe.myID
var login;  //holds JSON AboutMe.myLogin
var campus; //holds JSON AboutMe.myCampus
var program;  //holds JSON AboutMe.Program

//termNum and progData is stored in dataArr;
class TermData {
  constructor(termNum, progData) {
    this.termNum = termNum; //holds number
    this.progData = progData;
  }
} //TermData ends here

class CourseCode {
  constructor(termNum, courseType, courseCode, img) {
    this.termNum = termNum; //holds number
    this.courseType = courseType; 
    this.courseCode = courseCode; 
    this.img = img; //holds img
  }
} //CourseCode ends here

//-------------------- //jQuery doc ready starts here -------------------
$(document).ready(function() { 
	
	$.getJSON("dataFiles/A1-JSON.json", function(data) {
    loadData(data);
  });//end of .getJSON

  //dataArr to store termNum, progData
  dataArr.push(new TermData(1, "SDNE for Term One"));
  dataArr.push(new TermData(2, "SDNE for Term Two"));
  dataArr.push(new TermData(3, "SDNE for Term Three"));
  dataArr.push(new TermData(4, "SDNE for Term Four"));
  
  //imgArr to store termNum, courseType, courseCode, img and uses termNum as primary key
  //Used for #termOne button
  imgArr.push(new CourseCode(1, "SYST", "10049", 
"images/web.png")); 
  imgArr.push(new CourseCode(1, "PROG", "10082", 
  "images/java.png"));
  imgArr.push(new CourseCode(1, "TELE", "13167", 
  "images/network.png"));

  //Used for #termTwo button
  imgArr.push(new CourseCode(2, "SYST", "10199", 
  "images/web.png"));
  imgArr.push(new CourseCode(2, "PROG", "24178", 
  "images/java.png"));
  imgArr.push(new CourseCode(2, "TELE", "33324", 
  "images/network.png"));

  //Used for #termThree button
  imgArr.push(new CourseCode(3, "SYST", "26671", 
  "images/architecture.png"));
  imgArr.push(new CourseCode(3, "PROG", "32758", 
  "images/java.png"));
  imgArr.push(new CourseCode(3, "INFO", "24178", 
  "images/security.png"));

  //Used for #termFour button
  imgArr.push(new CourseCode(4, "PROG", "32356", 
  "images/java.png"));
  imgArr.push(new CourseCode(4, "PROG", "36944", 
  "images/algorithm.png"));
  imgArr.push(new CourseCode(4, "SYST", "24444", 
  "images/web.png"));
  


  
  //jquery call to print all courses for #termOne
  $("#termOne").click(function(){
    $("#changeLPara").html(createList("1"));
  });

  //jquery call to print all courses for #termTwo
  $("#termTwo").click(function(){
    $("#changeLPara").html(createList("2"));
  });

  //jquery call to print all courses for #termThree
  $("#termThree").click(function(){
    $("#changeLPara").html(createList("3"));
  });

  //jquery call to create list output for #termFour
  $("#termFour").click(function(){
    $("#changeLPara").html(createList("4"));
  });

  //change font family, style, and color on on/off
  $("#toggle").click(function(){
    $("#changeLPara").toggleClass("changeFont");
  });

  //highlight words on on/off
  $("#words").click(function(){
    
    $("p:contains('PROG')").toggleClass("highlight");
  });

}); //jQuery document ready ends here


//inserts term number, and prints all courses with each term set to 1, 2, 3, or 4 respectively
function createList(x) {
  $(".footer").html(
    `
    <label><span style='color:white'>Login: </span></label><strong>${login}</strong>&nbsp|
    <label><span style='color:white'>Campus: </span></label><strong>${campus}</strong>&nbsp|
    <label><span style='color:white'>Program: </span></label><strong>${program}</strong>
    `);

    
  $("#changeLPara").html("");
  $("#changeLPara").append(`${dataArr[x - 1].progData}`); //-1 for array adjustment
  for (let y of imgArr) {
    if (y.termNum == x) {
      $("#changeLPara").append(
        `
        <p>
        Course:
          ${y.courseType}${y.courseCode}&nbsp<img src="${y.img}" width="30px"> 
        </p>
        `
      );
    }
  }

}; //createList ends

function loadData(data) {
  localStorage.setItem("myName", data.AboutMe.myName);
  localStorage.setItem("id", data.AboutMe.myID);
  localStorage.setItem("login", data.AboutMe.myLogin);
  localStorage.setItem("campus", data.AboutMe.myCampus);
  localStorage.setItem("program", data.AboutMe.myProgram);

  myName = localStorage.getItem("myName");
  id = localStorage.getItem("id");
  login = localStorage.getItem("login");
  campus = localStorage.getItem("campus");
  program = localStorage.getItem("program");

$("#top").html(`SYST24444 ${myName} / ${id}`); 
  
//display the p footer using jquery and template literal for formatting
$(".footer").html(
`
<label><span style='color:white'>Login: </span></label><strong>${login}</strong>&nbsp|
<label><span style='color:white'>Campus: </span></label><strong>${campus}</strong>&nbsp|
<label><span style='color:white'>Program: </span></label><strong>${program}</strong>
`);
} //loadData ends
 

 
