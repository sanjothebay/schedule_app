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
  
  localStorage.getItem("textInPut");



  $(".saveBtn").on("click", function(){
    //event.preventDefault()
    

    var textInPutFromUser = $(this).siblings("textarea").val();

    var textInPutFromUser = $(this).parent("id").val();
    
    sideTextSaved.textContent = textInPutFromUser;

     
    localStorage.setItem("textByUser", textInPutFromUser);
  
    localStorage.setItem("currentHourTime", textAreaTime);

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