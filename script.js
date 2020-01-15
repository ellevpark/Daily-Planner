// create a date display that shows the current date 
​
// var date = new Date ();
// console.log (date);
// document.getElementById("date").innerHTML = date.toDateString();
// show times from 9am-5pm on the first column 
​
var date = moment();
$("#date").text(date.format('MMMM Do YYYY, h:mm:ss a'));
var currentTime = date.format() //give you just the current hour (turn into number)
​
var workTime = ["9am", "10am", "11am", "12pm", "1pm", "2pm"];
//second array  = [9, 10, 11] etc.
// military time for second array and for the current Time
​
for (var i=0; i < workTime.length; i++){
    var timeRow = $("<div>").addClass("row");
​
    var timeCol = $("<div>").addClass("col-sm-1 time").text(workTime[i]);
    var taskCol = $("<textarea>").addClass("col-sm-10 task");
    var saveCol = $("<button>").addClass("col-sm-1 save");
​
    var toDo = localStorage.getItem(workTime[i])
    taskCol.val(toDo);
​
    saveCol.attr ("data-time", workTime[i]);
    timeCol.text (workTime[i]);
​
    // if(time = to our current time)
    // else < past
    // time -> index of work time
    // currentTime -> moment time
​
    timeRow.append(timeCol, taskCol, saveCol);
    $(".container").append(timeRow, "<hr>")
}
// create text box that takes user input 
​
// create a button in the last column
​
// when clicked, the button will trigger the input to be saved in the local storage
​
// ensure that the save updates data 
​
$(document).on("click", ".save", function(event){
    //$(this) == event.target
    var toDo = $(this).siblings(".task").val();
    var time = $(this).attr("data-time")
    localStorage.setItem(time, toDo);
})
​
// $(".task").each(function(){
//       $(this)
// })
​
//.innerText/.textContent => .text() (most html tags)
//.value => .val() (just for textareas/input boxes)