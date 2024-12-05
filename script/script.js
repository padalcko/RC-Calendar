document.addEventListener("DOMContentLoaded", () => {
  const calendarContainer = document.querySelector(".calendar-container");

  const eventDates = {
    "2025-01-26":
      "Всесвітній день дій проти наркотиків (Global Day of Action Against Drugs)",
    "2025-04-19":
      "День велосипеда – Альберт Гофманн здійснив першу подорож під впливом ЛСД.",
    "2025-04-20":
      "Всесвітній день канабісу – неофіційне свято культури канабісу.",
    "2025-04-30":
      "Всесвітній день порятунку життя за допомогою замісної терапії опіоїдами (World Opiate Substitution Therapy Awareness Day)",
    "2025-06-17":
      "День народження Олександра Шульгіна – хіміка, який синтезував МДМА та багато фенетиламінів.",
    "2025-06-26":
      "Міжнародний день боротьби зі зловживанням наркотиками та їх незаконним обігом (International Day Against Drug Abuse and Illicit Trafficking)",
    "2025-07-15":
      "День соціальної підтримки людей, які проходять реабілітацію від наркоманії",
    "2025-07-18":
      "Міжнародний день нагадування про шкоду психоактивних речовин (International Day of Remembrance for the Harm of Psychoactive Substances)",
    "2025-08-10": "Відкриття героїну Феліксом Гофманом у компанії Bayer",
    "2025-08-15":
      "День Психоделічної Революції - свято засноване на Психофорумі його власником - Францем. ",
    "2025-09-09":
      "Всесвітній день тверезості та боротьби з алкоголізмом (World Sobriety Day)",
    "2025-09-15":
      "Міжнародний день відмови від наркотиків (International Day for Abstinence from Drugs)",
    "2025-09-21":
      "День легалізації медичного використання канабісу (Medical Cannabis Legalization Day)",
    "2025-10-01":
      "Міжнародний день профілактики наркоманії (International Drug Prevention Day)",
    "2025-10-10":
      "Всесвітній день психічного здоров'я (World Mental Health Day)",
    "2025-10-17":
      "День легалізації канабісу в Канаді (Cannabis Legalization Day in Canada)",
    "2025-11-02": "День боротьби з наркотиками в Україні",
    "2025-11-11":
      "День народження Альберта Гофманна – хіміка, який синтезував ЛСД у 1938 році.",
    "2025-11-16":
      "Альберт Гофманн уперше синтезував ЛСД (лізергінову кислоту діетиламід)",
    "2025-11-16":
      "Міжнародний день толерантності (International Day for Tolerance)",
    "2025-12-01": "Всесвітній день боротьби зі СНІДом (World AIDS Day)",
  };

  // Дані про місяці та кількість днів у них
  const months = [
    { name: "Січень", days: 31 },
    { name: "Лютий", days: 28 }, // 2025 рік — не високосний
    { name: "Березень", days: 31 },
    { name: "Квітень", days: 30 },
    { name: "Травень", days: 31 },
    { name: "Червень", days: 30 },
    { name: "Липень", days: 31 },
    { name: "Серпень", days: 31 },
    { name: "Вересень", days: 30 },
    { name: "Жовтень", days: 31 },
    { name: "Листопад", days: 30 },
    { name: "Грудень", days: 31 },
  ];

  // 1 січня 2025 року — середа (2 = ср)
  let startDay = 2;

  // Генеруємо календар для кожного місяця
  months.forEach((month, index) => {
    const calendar = document.createElement("div");
    calendar.className = "calendar";

    // Додаємо назву місяця
    const title = document.createElement("h2");
    title.className = "calendar-title";
    title.textContent = `${month.name} 2025`;
    calendar.appendChild(title);

    // Додаємо дні тижня
    const weekdays = document.createElement("div");
    weekdays.className = "calendar-weekdays";
    ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"].forEach((weekday) => {
      const day = document.createElement("div");
      day.className = "weekday";
      day.textContent = weekday;
      weekdays.appendChild(day);
    });
    calendar.appendChild(weekdays);

    // Додаємо сітку з днями
    const grid = document.createElement("div");
    grid.className = "calendar-grid";

    // Додаємо пусті блоки перед першим днем місяця
    for (let i = 0; i < startDay; i++) {
      const emptyDay = document.createElement("div");
      emptyDay.className = "calendar-day empty";
      grid.appendChild(emptyDay);
    }

    // Додаємо дні місяця
    for (let day = 1; day <= month.days; day++) {
      const dayBlock = document.createElement("div");
      const eventKey = `2025-${String(index + 1).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`;

      dayBlock.className = "calendar-day";
      dayBlock.textContent = day;

      if (eventDates[eventKey]) {
        dayBlock.classList.add("event-day");
        dayBlock.dataset.description = eventDates[eventKey];

        dayBlock.addEventListener("click", () => {
          document.getElementById("modal-description").textContent =
            eventDates[eventKey];
          document.getElementById("modal").style.display = "block";
        });
      }

      grid.appendChild(dayBlock);
    }

    // Оновлюємо перший день наступного місяця
    startDay = (startDay + month.days) % 7;

    calendar.appendChild(grid);
    calendarContainer.appendChild(calendar);
  });

  // Закриття модального вікна
  const modal = document.getElementById("modal");
  const closeButton = document.getElementById("close-button");

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
