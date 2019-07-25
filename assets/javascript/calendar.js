var queryURL =
  "https://www.eventbriteapi.com/v3/events/search/?location.address=toronto&location.within=10km&expand=venue&price=free&token=VNY6JP3JJDWS6LAXZSVY";

let clanedar;
let calendarEl;
let final_events = [];

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function(datas) {
  var data = datas.events;
  data.forEach(event => {
    final_events.push({
      title: event.name.text,
      url: event.url,
      start: event.start.local,
      end: event.end.local,
    });
  });
  document.getElementById("calendar").innerHTML = "";
  loadCalendar();
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("calendar").innerHTML = "";
  loadCalendar();
});

var loadCalendar = function() {
  calendarEl = document.getElementById("calendar");
  var dateNow = Date(Date.now());
  var formattedDate = moment(dateNow).format("YYYY-MM-DD");
  calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ["dayGrid"],
    defaultView: "dayGridMonth",
    defaultDate: formattedDate,
    header: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
      backgroundColor: "#F00",
    },
    events: final_events,
  });
  calendar.render();
};
