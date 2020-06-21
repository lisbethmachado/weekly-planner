// use class for "past", "present", and "future" to apply styles
// to the time-block divs accordingly. (you'll need to do this in your
// JavaScript code. Don't forget to delete this comment when you are done.
// The classes are used as examples below and should be removed from the html
// in the finished product.)
var userInput = [];

var text = document.getElementById(".description")

init();

function init() {
    // Get stored todos from localStorage
    // Parsing the JSON string to an object
    var storedTasks = JSON.parse(localStorage.getItem(".description"));
};
    moment().calendar(null, {
        sameDay: function (now) {
            if (this.isBefore(now)) {
                return '[Will Happen Today]';
            } else {
                return '[Happened Today]';

            }
        }
    });


    function storeTask() {
        $(".saveBtn").on("click", function () {
        localStorage.setItem(".description", JSON.stringify(userInput));
        event.preventDefault();
        userInput.push(".description");
        console.log(this)
    });
};

    $(function () {
        $(".saveBtn").on("click", function () {
            var value = $(this).siblings(".description").val();
            var time = $(this).parent().attr("#time")
            localStorage.setItem(time, value);
            userInput.push(".description");
            event.preventDefault();
            alert("You saved a task!")
        });
    });