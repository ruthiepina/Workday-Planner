//* Wrap all code that interacts with the DOM in a call to jQuery to ensure that
//* the code isn't run until the browser has finished rendering all the elements
//* in the html.
$(() => {
   //* Adds current date to header
   let today = dayjs();
   let formatDate = dayjs(today).format("dddd, MMMM D YYYY, h:mm a");
   $("#currentDay").text(formatDate);

   let tasks = []; //* Variable to hold info to localStorage
   //* Check for any previous data located in localStorage
   tasks = JSON.parse(localStorage.getItem("myDay"));
   if (!tasks) {
      //* If there is no data, then prepare tasks array
      tasks = [];
   }

   //* Displays the workday planner
   const NOON = 12;
   const DAY_START = 9;
   const DAY_END = 18;
   for (let hour = DAY_START; hour < DAY_END; hour++) {
      let currentHour = dayjs().hour();

      //* Color code time blocks
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

      //* Creates time blocks
      let hourId = "hour-" + hour;
      $("<div id='" + hourId + "' class='row time-block " + classColor + "'></div>").appendTo("#cont-fluid");
      $("<div id='hour-text-" + hour + "' class='col-2 col-md-1 hour text-center py-3'></div>").appendTo("#" + hourId);
      $("<textarea id='textarea-" + hour + "' class='col-8 col-md-10 description' rows='3'></textarea>").appendTo("#" + hourId);
      $("<button id='btn-" + hour + "' class='btn saveBtn col-2 col-md-1' aria-label='save'></button>").appendTo("#" + hourId);
      $("<i id='icon-" + hour + "' data-hour-index='" + hour + "' class='fas fa-save' aria-hidden='true'></i>").appendTo("#btn-" + hour);

      //* Determines morning/evening time block
      let displayTime = hour;
      displayTime -= hour > NOON ? NOON : 0;
      displayTime += hour < NOON ? " AM" : " PM";
      $("#hour-text-" + hour).text(displayTime);

      //* Refresh planner from local storage
      $("#textarea-" + hour).val(tasks[hour]);
   }

   //* Event listener to save task to planner (bubbling)
   $("#cont-fluid").on("click", "i", (event) => {
      let hourIndex = $(event.target).data("hour-index");
      tasks[hourIndex] = $("#textarea-" + hourIndex).val(); //* Updates array from textarea
      localStorage.setItem("myDay", JSON.stringify(tasks)); //* Updates localStorage
   });
});
