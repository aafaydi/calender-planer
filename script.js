$(document).ready(() => {

  //listing on the useer when clicking on save button
    $(".saveBtn").on("click", function() {

      // assosite time and descr to the click
      var value = $(this).siblings(".description").val();

      var time = $(this).parent().attr("id");
  
     // save to local storage
      localStorage.setItem(time, value);

    });

   // to get the current time and compare it to a block time
    function hourUpdater() {

      var currentHour = moment().hours();
  
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } 

        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 

        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
        
      });
    }


  
    hourUpdater();

    // interval to check if the time need to be updated and load current date
    var interval = setInterval(hourUpdater, 15000);
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  


    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  
  });
  