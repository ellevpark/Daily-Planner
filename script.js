// create a date display that shows the current date 

var date = new Date ();
console.log (date);
document.getElementById("date").innerHTML = date.toDateString();
// show times from 9am-5pm on the first column 
var workTime = ["9am", "10am", "11am", "12pm"]; 

for (var i=0; i < workTime.length; i++){
var timeCol = $(".time"); 
timeCol.attr ("data-time", workTime[i]);
$(".time")[i].append (workTime[i]);
}
// create text box that takes user input 

// create a button in the last column

// when clicked, the button will trigger the input to be saved in the local storage

// ensure that the save updates data 
