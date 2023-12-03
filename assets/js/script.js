// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
   // TODO: Add code to display the current date in the header of the page.
   //* Adds current date to header
   var today = dayjs();
   var formatDate = dayjs(today).format("dddd, MMMM D YYYY, h:mm a");
   $("#currentDay").text(formatDate); //* document.getElementById("currentDay").textContent = formatDate;

   // TODO: Add a listener for click events on the save button. This code should
   // use the id in the containing time-block as a key to save the user input in
   // local storage. HINT: What does `this` reference in the click listener
   // function? How can DOM traversal be used to get the "hour-x" id of the
   // time-block containing the button that was clicked? How might the id be
   // useful when saving the description in local storage?
   //

   // TODO: Add code to apply the past, present, or future class to each time
   // block by comparing the id to the current hour. HINTS: How can the id
   // attribute of each time-block be used to conditionally add or remove the
   // past, present, and future classes? How can Day.js be used to get the
   // current hour in 24-hour time?
   //

   const NOON = 12;
   for (let hour = 0; hour < 24; hour++) {
      let currentHour = dayjs().hour();
      let classColor = "";

      if (currentHour > hour) {
         classColor = "past";
      } else {
         if (currentHour === hour) {
            classColor = "present";
         } else {
            classColor = "future";
         }
      }

      let hourId = "hour-" + hour;
      $(
         "<div id='" +
            hourId +
            "' class='row time-block " +
            classColor +
            "'></div>"
      ).appendTo("#cont-fluid");
      $(
         "<div id='hour-text-" +
            hour +
            "' class='col-2 col-md-1 hour text-center py-3'></div>"
      ).appendTo("#" + hourId);

      let displayTime = hour;
      displayTime -= hour > NOON ? NOON : 0;
      displayTime += hour < NOON ? " AM" : " PM";
      $("#hour-text-" + hour).text(displayTime);

      $(
         "<textarea id='textarea-" +
            hour +
            "' class='col-8 col-md-10 description' rows='3'></textarea>"
      ).appendTo("#" + hourId);
      $(
         "<button id='btn-" +
            hour +
            "' class='btn saveBtn col-2 col-md-1' aria-label='save'></button>"
      ).appendTo("#" + hourId);
      $(
         "<i id='icon-" + hour + "' class='fas fa-save' aria-hidden='true'></i>"
      ).appendTo("#btn-" + hour);
   }
   console.log("containerFluidEl: ", $("#cont-fluid"));

   // TODO: Add code to get any user input that was saved in localStorage and set
   // the values of the corresponding textarea elements. HINT: How can the id
   // attribute of each time-block be used to do this?
   //
});
