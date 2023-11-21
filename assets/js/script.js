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
   console.log("BEFORE LOOP");
   for (var hour = 9; hour < 17; hour++) {
      var containerFluidEl = $(".container-fluid");
      console.log("INSIDE LOOP");
      console.log("containerFluidEl: ", containerFluidEl);
      var divHourEl = $('<div id="hour-' + hour + '" class="row time-block future">');
      console.log("divHourEl: ", divHourEl);
      var divHourDisplayEl = $('<div class="col-2 col-md-1 hour text-center py-3">');
      divHourDisplayEl.innerText = hour;
      var textAreaEl = $('<textarea class="col-8 col-md-10 description" rows="3">');
      var buttonEl = $('<button class="btn saveBtn col-2 col-md-1" aria-label="save">');
      var iconEl = $('<i class="fas fa-save" aria-hidden="true">');
      divHourEl.appendTo(".container-fluid");
      console.log("containerFluidEl: ", containerFluidEl);
   }
   var containerFluidEl = $(".container-fluid");
   console.log("containerFluidEl: ", containerFluidEl);
   console.log("AFTER LOOP");

   // TODO: Add code to get any user input that was saved in localStorage and set
   // the values of the corresponding textarea elements. HINT: How can the id
   // attribute of each time-block be used to do this?
   //
});
