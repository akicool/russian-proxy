const calendarBtn = document.querySelector('.calendar-btn');
const calendars = document.querySelector('.calendars');
const calendarButtonLeft = document.querySelector('.calendar-button-left');

const hideCalendars = () => {
  calendars.classList.remove('open');
};

calendarBtn.addEventListener('click', () => {
  calendars.classList.add('open');
});

calendarButtonLeft.addEventListener('click', () => {
  calendars.classList.remove('open');
});

window.addEventListener('click', (event) => {
  if (!event.target.closest('.calendars') && !event.target.closest('.calendar-btn') && calendars.classList.contains('open')) {
    hideCalendars();
  }
});

function createCalendar(calendarId) {
  var calendar = document.querySelector("#" + calendarId);
  var date = new Date();
  var month = date.getMonth();
  var year = date.getFullYear();

  var monthNames = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

  var daysInMonth = new Date(year, month + 1, 0).getDate();
  var firstDayOfMonth = new Date(year, month, 1).getDay();

  document.querySelector(".month-year").textContent = monthNames[month] + " " + year;
  document.querySelector(".month-year-2").textContent = monthNames[month] + " " + year;

  calendar.innerHTML = "";

  var dateCounter = 1;
  for (var row = 0; row < 6; row++) {
    var newRow = document.createElement("tr");

    for (var col = 0; col < 7; col++) {
      var newCell = document.createElement("td");

      if ((row === 0 && col < firstDayOfMonth) || dateCounter > daysInMonth) {
        newCell.textContent = "";
      } else {
        newCell.textContent = dateCounter;
        newCell.addEventListener("click", function() {
        });
        dateCounter++;
      }

      newRow.appendChild(newCell);
    }

    calendar.appendChild(newRow);
  }
}

function prevMonth() {
  var date = new Date();
  date.setMonth(date.getMonth() - 1);
  createCalendar("calendar-body");
  createCalendar("calendar2");
}

function nextMonth() {
  var date = new Date();
  date.setMonth(date.getMonth() + 1);
  createCalendar("calendar-body");
  createCalendar("calendar2");
}

// Создание календаря при загрузке страницы
window.onload = function() {
  createCalendar("calendar-body");
  createCalendar("calendar2");
};
