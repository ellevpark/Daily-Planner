$(document).ready(function() {
// Display the current date and time 
var date = moment();
$("#date").text(date.format('MMMM Do YYYY, h:mm:ss a'));
var currentTime = moment().format('HH');
console.log (currentTime);
// create variable for times 

var workTime = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var militaryTime  = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

//create a for loop to create elements with time, content, and a save button. 
for (var i=0; i < workTime.length; i++){
    var timeRow = $("<div>").addClass("row");
    var timeCol = $("<div>").addClass("col-sm-1 time").text(workTime[i]);
    var taskCol = $("<textarea>").addClass("col-sm-10 task");
    var saveCol = $("<button>").addClass("col-sm-1 save");

    var toDo = localStorage.getItem(workTime[i]);
    taskCol.val(toDo);
    saveCol.attr ("data-time", workTime[i]);
    timeCol.text (workTime[i]);

    if (parseInt(currentTime) === parseInt(militaryTime[i])){
        console.log ("its a match!");
        $(".row").css("background-color", "light pink");
    }
    else if (parseInt(currentTime) <= parseInt(militaryTime[i])){
        console.log ("this is the past");
    }
    else if (parseInt(currentTime) >= parseInt(militaryTime[i])){
        console.log ("this is the future");

    }
  
    timeRow.append(timeCol, taskCol, saveCol);
    $(".container").append(timeRow, "<hr>");
}
// Create a save function that will store the input into the local storage
$(document).on("click", ".save", function(event){
    //$(this) == event.target
    var toDo = $(this).siblings(".task").val();
    var time = $(this).attr("data-time")
    localStorage.setItem(time, toDo);
});
})

