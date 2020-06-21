$(document).ready(function () {
    $(".saveBtn").on("click", function (event) {
        var value = $(this).siblings(".description9", ".description").val();
        // console.log("value", value);
        var time = $(this).parent().attr("#time");
        // console.log("time: ", time)
        localStorage.setItem(time, value);
        moment(value).toDate();
    });
    console.log("value from local storage: ", localStorage.getItem("hour-9"));
    $(".description9").val(localStorage.getItem("hour-9"));
    $(".description10").val(localStorage.getItem("hour-10"));
    $(".description11").val(localStorage.getItem("hour-11"));
    $(".description12").val(localStorage.getItem("hour-12"));
})