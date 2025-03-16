function displayCalendar(inputDate) {
  const calendarBody = document.getElementById('calendar-body');
  const monthYearElement = document.getElementById('month-year');

  // Set currentDate to the inputDate or the current date if inputDate is not provided
  const currentDate = inputDate || new Date();
  currentDate.setDate(1); // Set currentDate to the first day of the month

  // Display the month and year in the monthYearElement
  const monthOptions = { month: 'long' };
  const monthName = new Intl.DateTimeFormat('en-US', monthOptions).format(currentDate);
  const year = currentDate.getFullYear();
  monthYearElement.textContent = `${monthName} ${year}`;

  // Clear the calendar body before populating new dates
  calendarBody.innerHTML = '';

  // Calculate necessary values for calendar generation
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(); // Day of the week of the first day
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); // Number of days in the current month
  const daysInPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate(); // Number of days in the previous month
  const daysInNextMonth = 42 - (daysInMonth + firstDay); // Number of days in the next month needed for layout

  // Array to hold calendar dates with events
  const calendarDates = [];

  // Populate calendarDates array with dates and associated events
  for (let i = 1 - firstDay; i <= daysInMonth; i++) {
        const day = i > 0 ? i : '';
        const events = getEventsForDay(currentDate.getFullYear(), currentDate.getMonth(), day);
        calendarDates.push({ day, events });
      }

  // Generate calendar grid by iterating through calendarDates array
  let row;
  calendarDates.forEach((date, index) => {
    if (index % 7 === 0) {
      row = calendarBody.insertRow();
    }

    const cell = row.insertCell();
    cell.textContent = date.day;

    // Remove the .current-day class from all cells
    cell.classList.remove('current-day');

    // Check if the current date matches the date being iterated and apply .current-day class if true
    if (
      date.day === new Date().getDate() &&
      currentDate.getMonth() === new Date().getMonth() &&
      currentDate.getFullYear() === new Date().getFullYear()
    ) {
      cell.classList.add('current-day');
    }

    // Event handling for clicking on events, if applicable
    if (date.events.length > 0) {
      const dot = document.createElement('div');
      dot.className = 'dot';
      cell.appendChild(dot);

      dot.addEventListener('click', function () {
        openModal(date.events);
      });
    }
  });
}

    function getEventsForDay(year, month, day) {
      
      //January
      if (month === 0 && day === 1) {
        return [`New Year on ${year}-01-${day}`];
      } 
      
      else if (month === 0 && day === 21) {
        return [`MEZC - Youth Council at University Church on ${year}-01-${day}`];
      } 
      

      
      //February
      else if (month === 1 && day === 8) {
        return [`KEMD - Closing date for all Inductions on ${year}-02-${day}`,,`All Churches along with their Companies and branches should ensure that they get done with the inductions.`];
      } 
      
      
      
      
      
      //March
      else if (month === 2 && day === 2) {
        return [`KEMD - Fundraising Music Fellowship on ${year}-03-${day}`,,`This fundraising is for the music and media`];
      } 
      
      else if (month === 2 && day === 9) {
        return [`KEMD - PreachersTraining Seminar on ${year}-03-${day}`,,`All chosen preachers from all churches should attend this program without fail.`];
      } 
      
      else if (month === 2 && day === 9) {
        return [`KEMD - Leadership Seminar on ${year}-03-${day}`,,`All KEMD youths are edged to attend the Leadership seminar. It will be in zones.`];
      }
      
      else if (month === 2 && day === 15) {
        return [`KEMD - Global Youth Day on ${year}-03-${day}`];
      }

      else if (month === 2 && day === 16) {
        return [`MEZC - Youth Week of Prayer starting on ${year}-03-${day}`,,`All leaders should attend this program without fail. The only exception are the Pathfinder directors and their committees for the conference has organized for them a CMT specifically for them. All other members are welcome to attend.`];
      } 
          
                else if (month === 3 && day === 6) {
        return [`KEMD - Fun, Arts and Skills Day on ${year}-04-${day}`,`KEMD - Assessments on ${year}-03-${day}`];
      }
          
      else if (month === 3 && day === 13) {
        return [`Rockside Drill Clinic on ${year}-04-${day}`];
      }
          
      else if (month === 3 && day === 20) {
        return [`KEMD - Pathfinder Fair on ${year}-04-${day}`];
      }
      

      
      
      
      
      //April
      else if (month === 3 && day === 18) {
        return [`KEMD - Music Camp on ${year}-04-${day}`];
      }


      
      //May
          else if (month === 4 && day === 27) {
        return [`KEMD - Capacity Building on ${year}-04-${day}`];
      }
          
      else if (month === 4 && day === 29) {
        return [`KEMD - Assessments (Classes & Honors) on ${year}-04-${day}`];
      }

      
      
      //June
      else if (month === 5 && day === 29) {
        return [`KEMD - Quiz and Debate on ${year}-06-${day}`];
      }
      
      
      
      
      //July
      else if (month === 6 && day === 19) {
        return [`KEMD - Investiture on ${year}-07-${day}`];
      }
      
      else if (month === 6 && day === 27) {
        return [`KEMD - Parades Day on ${year}-07-${day}`];
      }
      


      //August

          
      //September
      else if (month === 8 && day === 14) {
        return [`KEMD - Preacher’s Training Seminar on ${year}-09-${day}`];
      }
      
      else if (month === 8 && day === 21) {
        return [`KEMD - Assessments on ${year}-09-${day}`];
      }
      
      
      //October
      else if (month === 9 && day === 19) {
        return [`KEMD - Silver and Gold Expedition on ${year}-10-${day}`];
      }
      

      
      
      
      //November

      
      
      
      
      //December
      else if (month === 11 && day === 7) {
        return [`KEMD - End of Year Party on ${year}-12-${day}`];
      }

      
      
      return [];
    }

    function openModal(events) {
      const modal = document.getElementById('eventModal');
      const eventList = document.getElementById('eventList');

      eventList.innerHTML = '';

      events.forEach(event => {
        const listItem = document.createElement('p');
        listItem.textContent = event;
        eventList.appendChild(listItem);
      });

      modal.style.display = 'block';
    }

    function closeModal() {
      const modal = document.getElementById('eventModal');
      modal.style.display = 'none';
    }

    function showPreviousMonth() {
  const currentDate = new Date(document.getElementById('month-year').textContent);
  currentDate.setMonth(currentDate.getMonth() - 1);
  displayCalendar(currentDate);
}

function showNextMonth() {
  const currentDate = new Date(document.getElementById('month-year').textContent);
  currentDate.setMonth(currentDate.getMonth() + 1);
  displayCalendar(currentDate);
}


  // Call displayCalendar when the page is fully loaded
  window.onload = function() {
    displayCalendar();
  };