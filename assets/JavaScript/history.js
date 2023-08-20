function createCalendar() {
    var calendar = document.querySelector("#calendar-body");
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
            alert("Вы выбрали " + monthNames[month] + " " + this.textContent + ", " + year);
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
    createCalendar(date.getMonth(), date.getFullYear());
  }
  
  function nextMonth() {
    var date = new Date();
    date.setMonth(date.getMonth() + 1);
    createCalendar(date.getMonth(), date.getFullYear());
  }
  
  // Создание календаря при загрузке страницы
  window.onload = function() {
    createCalendar();
  };