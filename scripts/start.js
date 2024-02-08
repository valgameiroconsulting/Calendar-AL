var calendarEl = document.getElementById('controlAddIn');

var calendar = new FullCalendar.Calendar(calendarEl, {
  dateClick: function(info) {
    // Send Date to BC
    alert('Date has been clicked: ', info.dateStr);
    Microsoft.Dynamics.NAV.InvokeExtensibilityMethod(
      "OnInvoke",
      [ info.dateStr ],
      false
    )
  },
  plugins: [ 'dayGrid', 'timeGrid', 'list', 'bootstrap', 'interaction' ],
  timeZone: 'UTC',
  themeSystem: 'bootstrap',
  header: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
  },
  weekNumbers: true,
  eventLimit: true, // allow "more" link when too many events
  events: 'https://fullcalendar.io/demo-events.json'
});

calendar.render();

//Initialize();

Microsoft.Dynamics.NAV.InvokeExtensibilityMethod(
  'OnControlAddInReady',  // event name from ControlAddin
  [],                     // parameters, if any
  false,                  // skip if Busy
  function() {
    //Initialize();         // callback, JS function to execute after AL stack finishes
  }
);

function Initialize() {
  let root = document.getElementById("calendarControl");
  let button = document.createElement("button");
  button.innerText = 'Invoke AL';
  root.appendChild(button);
  button.addEventListener("click", click);
}

function click() {
  
}