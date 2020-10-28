var hourTime = {
  1: "one",
  2: "Two",
  3: "Three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine"
};



var d = new Date();
$("#currentDay").html(d);
console.log(currentDay)

//.format("dddd, MMMM Do YYYY");

let notes = {};
let textAreaTime;

let currentHour = moment().hour(); // Number
console.log(currentHour)

$("textarea").each(function() {
    console.log( $( this ));
    textAreaTime = parseInt($(this).attr("id"))
    console.log(textAreaTime)

    if (textAreaTime === currentHour) {
        $(this).addClass("present")
        
    } else if (textAreaTime > currentHour){
        $(this).addClass("future");
    }
 else if (textAreaTime < currentHour){
    $(this).addClass("past");
}
$(this).text(localStorage.getItem("textByUser"));

  });

  
  var sideTextSaved = document.querySelector("#exampleFormControlTextarea1")

  var textInPutFromUser;
  let timeSlot;
  
  localStorage.getItem("textInPut");

  $(".saveBtn").on("click", function(){
    //event.preventDefault()
    
    textInPutFromUser = $(this).siblings("textarea").val();

    timeSlot = $(this).parent().attr("id");
    
    sideTextSaved.textContent = timeSlot;
    sideTextSaved.textContent = textInPutFromUser;

    localStorage.setItem("textByUser", textInPutFromUser);
  
    localStorage.setItem("currentHourTime", timeSlot);
    console.log(timeSlot)

  });


//00:46:17/04:37:50  localstorage to add the aside to show message




//   $(".saveBtn").on("click", function(){
// $(this.)attr.$


// var time for localStorage value
// var text vale
//   })

// console.log(new Date());

// parsin
//save button eventlisteer

//localStorage

// showtime depending on day past present and futur

//all have ID

// dispaly what is on localstorage on the current row