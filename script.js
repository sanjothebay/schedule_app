var d = new Date();
$("#currentDay").html(d);
console.log(currentDay)


let currentHour = moment().hour(); // Number
console.log(currentHour)

$("textarea").each(function() {
    console.log( $( this ));
    let textAreaTime = parseInt($(this).attr("id"))
    console.log(textAreaTime)

    if (textAreaTime === currentHour) {
        $(this).addClass("present")
        
    } else if (textAreaTime > currentHour){
        $(this).addClass("future");
    }
 else if (textAreaTime < currentHour){
    $(this).addClass("past");
}

  });


  $(".saveBtn").on("click", function(){

    var lastname = localStorage.getItem("key");
    var lastname = localStorage.getItem("key");

    localStorage.setItem("time-block", "value");
  }







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