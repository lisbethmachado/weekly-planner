var text = $("<text-area>")
var saveBtn = $(".saveBtn")

$("<text-area>").on("click", function (event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var text = $(".description").val().trim();

    // The movie from the textbox is then added to our array
    text.push(text);

    // Calling renderButtons which handles the processing of our movie array
    saveBtn();
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
$(function() {
    $(".saveBtn").on("click", function(){
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id")
      localStorage.setItem(time, value);
    }) ; 
  });
