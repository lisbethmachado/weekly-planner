var text = $("<text-area>")
var saveBtn = $(".saveBtn")

$("<text-area>").on("click", function (event) {
    event.preventDefault();
    var text = $(".description").val().trim();
    text.push(text);

    // Calling renderButtons which handles the processing of our movie array
    saveBtn();
  });
  $(".present").attr(now);

  var userInput = [""]
  moment().calendar(null, {
    sameDay: function (now) {
      if (this.isBefore(now)) {
        return '[Will Happen Today]';
      } else {
        return '[Happened Today]';
      }
      /* ... */
    }
  });

  $(function() {
    $(".saveBtn").on("click", function(){
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("time")
      localStorage.setItem(time, value);
    }) ; 
  });
// // on page load date displayed with moment js 

// var current time 

// var PresentBlock

//  on saveBtn event listener store the description
//  var storeDescription
// localStorage setItem storeDescription

// if current time === PresentBLock {
//     addClass present
// } 
// else if {
//     current time < PresentBLock {
//         remove present class 
//         addclass past
//     }
//     else {
//         remove past
//         remove present 
//         add present
//     }
// }
// local storage getItem
