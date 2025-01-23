const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2025, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title:
      "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2025, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2025, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2025, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2025, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 75,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2025, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  },
];
const nyCardsContainer = document.querySelector(".ny-cards-container");
function displayEventsNY(arr, nameContainer) {
  arr.forEach((element) => {
    const nyEventCardContainer = document.createElement("div");
    nyEventCardContainer.classList.add("ny-event-card");
    const nyEventCardImg = document.createElement("img");
    nyEventCardImg.classList.add("ny-event-card-img");
    nyEventCardImg.setAttribute("src", `${element.image}`);
    nyEventCardImg.setAttribute("alt", "eventimg");
    const nyEventInfoContainer = document.createElement("div");
    nyEventInfoContainer.classList.add("ny-event-info-container");
    const nyEventTimeContainer = document.createElement("div");
    nyEventTimeContainer.classList.add("ny-event-time-container");
    const calenderIcon = document.createElement("img");
    calenderIcon.setAttribute("src", "assets/img/Events near/Calender.png");
    calenderIcon.setAttribute("alt", "Calender");
    const nyEventDay = document.createElement("div");
    nyEventDay.classList.add("ny-event-day");
    nyEventDay.innerHTML = `${element.date}`;
    const nyEventThemeContainer = document.createElement("div");
    nyEventThemeContainer.classList.add("ny-event-theme");
    const nyEventThemeTitle = document.createElement("p");
    nyEventThemeTitle.classList.add("ny-event-theme-title");
    nyEventThemeTitle.textContent = `${element.title}`;

    const nyEventThemeDescription = document.createElement("div");
    nyEventThemeDescription.classList.add("ny-event-theme-discr");
    const nyEventThemeCategory = document.createElement("p");
    nyEventThemeCategory.classList.add("ny-event-theme-category");
    nyEventThemeCategory.textContent = `${element.category}`;
    const nyEventThemeDistance = document.createElement("p");
    nyEventThemeDistance.classList.add("ny-event-theme-distance");
    nyEventThemeDistance.textContent = `${element.distance}`.toString() + "km";
    nyEventThemeDescription.append(nyEventThemeCategory, nyEventThemeDistance);
    nyEventThemeContainer.append(nyEventThemeTitle, nyEventThemeDescription);
    nyEventInfoContainer.append(nyEventTimeContainer);
    nyEventTimeContainer.append(calenderIcon, nyEventDay);

    const ticketsContainer = document.createElement("div");
    ticketsContainer.classList.add("ny-tickets-container");
    const ticketsSold = document.createElement("div");
    ticketsSold.classList.add("attendees-container");
    const going = document.createElement("p");
    going.classList.add("attendees");
    going.textContent = `${element.attendees}`.toString() + " attendees";
    // const ticketsFree = document.createElement("div");
    // ticketsFree.classList.add("tickets-free");

    // const free = document.createElement("p");
    // free.classList.add("free");
    // free.textContent = "Free";
    ticketsSold.append(going);
    // ticketsFree.append(free);
    ticketsContainer.append(ticketsSold);
    if (!element.attendees) {
      going.textContent = " ";
    }

    nyEventCardContainer.append(
      nyEventCardImg,
      nyEventThemeContainer,
      nyEventInfoContainer
    );
    nameContainer.append(nyEventCardContainer, ticketsContainer);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  displayEventsNY(eventsStore, nyCardsContainer);
});

const dropdownDistance = document.querySelector(".dropdown-menu-distance");
const dropdownType = document.querySelector(".dropdown-menu-theme");
const dropdownCategory = document.querySelector(".dropdown-menu-category");

function filterEvents(event, arr) {
  let query = event.target.innerHTML.toLowerCase();
  if (query.includes("km")) {
    query = query.split(" ")[0];
    console.log(query);
  }
  const filteredEvents = arr.filter((item) => {
    return (
      item.type.toLowerCase().includes(query) ||
      item.distance.toString().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  });
  nyCardsContainer.replaceChildren();
  displayEventsNY(filteredEvents, nyCardsContainer);
}
dropdownType.addEventListener("click", function (event) {
  event.preventDefault();
  filterEvents(event, eventsStore);
});
dropdownCategory.addEventListener("click", function (event) {
  event.preventDefault();
  filterEvents(event, eventsStore);
});
dropdownDistance.addEventListener("click", function (event) {
  event.preventDefault();
  filterEvents(event, eventsStore);
});
const headerLogo = document.querySelector(".logo");
headerLogo.addEventListener("click", () => {
  window.location.href = "index.html";
});
