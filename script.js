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
const meetupCities = [
  {
    image: "assets/img/Popular Cities/chicago.webp.svg",
    cityName: "Chicago",
  },
  {
    image: "assets/img/Popular Cities/miami.webp.svg",
    cityName: "Miami",
  },
  {
    image: "assets/img/Popular Cities/nashville.webp.svg",
    cityName: "Nashville",
  },
  {
    image: "assets/img/Popular Cities/new_york.webp.svg",
    cityName: "New York",
  },
  {
    image: "assets/img/Popular Cities/san_francisco.webp.svg",
    cityName: "San Francisco",
  },
];
const frienshipCards = [
  {
    image: "assets/img/Friendship/HowToTurn.webp.png",
    title: "I Used Meetup to Make Friends at Brunch",
    text: "New Jersey-based writer and college student Brianna Stryke, wanted to meet friends in her hometown. Learn how she used Meetup to make connections by joining a Girls Night Out Meetup group.",
  },
  {
    image: "assets/img/Friendship/Friendsbruch.png",
    title: "How to Turn Casual Connections into Close Friendships",
    text: "It’s proven that close friendships are harder to make as an adult. But don’t sweat it: here’s what you can do to simplify the process.",
  },
  {
    image: "assets/img/Friendship/DoYouHaveRihgtNummer.webp.png",
    title: "Do You Have the “Right” Number of Friends?",
    text: "Studies from around the world have tried to help people answer this question. Learn about the three tiers of friendship and how to fulfill them.",
  },
];
const cardsContainer = document.querySelector(".cards-container");
const upcomingOnlineEventsContainer = document.querySelector(
  ".cards-container-upcoming"
);
const meetupCitiesImg = document.querySelector(".meetup-cities-img");
const friendshipCardsContainer = document.querySelector(
  ".friendship-cards-container"
);
const nyCardsContainer = document.querySelector(".ny-cards-container");

function displayEvents(arr, nameContainer) {
  arr.forEach((element) => {
    const eventCardContainer = document.createElement("div");
    eventCardContainer.classList.add("event-card");
    const eventCardImg = document.createElement("img");
    eventCardImg.classList.add("event-card-img");
    eventCardImg.setAttribute("src", `${element.image}`);
    eventCardImg.setAttribute("alt", "eventimg");
    const eventThemeContainer = document.createElement("div");
    eventThemeContainer.classList.add("event-theme");
    const eventThemeTitle = document.createElement("p");
    eventThemeTitle.classList.add("event-theme-title");
    eventThemeTitle.textContent = `${element.title}`;
    const eventThemeDescription = document.createElement("div");
    eventThemeDescription.classList.add("event-theme-discr");
    const eventThemeCategory = document.createElement("p");
    eventThemeCategory.classList.add("event-theme-category");
    eventThemeCategory.textContent = `${element.category}`;
    const eventThemeDistance = document.createElement("p");
    eventThemeDistance.classList.add("event-theme-distance");
    eventThemeDistance.textContent = `${element.distance}`.toString() + " km";
    eventThemeDescription.append(eventThemeCategory, eventThemeDistance);
    eventThemeContainer.append(eventThemeTitle, eventThemeDescription);

    const eventInfoContainer = document.createElement("div");
    eventInfoContainer.classList.add("event-info-container");
    const eventTimeContainer = document.createElement("div");
    eventTimeContainer.classList.add("event-time-container");
    const calenderIcon = document.createElement("img");
    calenderIcon.setAttribute("src", "assets/img/Events near/Calender.png");
    calenderIcon.setAttribute("alt", "Calender");
    const eventDay = document.createElement("div");
    eventDay.classList.add("event-day");
    eventDay.innerHTML = `${element.date}`;

    const ticketsContainer = document.createElement("div");
    ticketsContainer.classList.add("tickets-container");
    const ticketsSold = document.createElement("div");
    ticketsSold.classList.add("tickets-sold");
    const ticketsSoldCardImg = document.createElement("img");
    ticketsSoldCardImg.setAttribute(
      "src",
      "assets/img/Events near/Checkmark.png"
    );
    ticketsSoldCardImg.setAttribute("alt", "eventTicketsSoldCardImg");
    const going = document.createElement("p");
    going.classList.add("going");
    going.textContent = `${element.attendees}`.toString() + "going";
    const ticketsFree = document.createElement("div");
    ticketsFree.classList.add("tickets-free");
    const ticketsFreeCardImg = document.createElement("img");
    ticketsFreeCardImg.setAttribute("src", "assets/img/Events near/Ticket.png");
    ticketsFreeCardImg.setAttribute("alt", "eventTicketsSoldCardImg");
    const free = document.createElement("p");
    free.classList.add("free");
    free.textContent = "Free";
    ticketsSold.append(ticketsSoldCardImg, going);
    ticketsFree.append(ticketsFreeCardImg, free);
    ticketsContainer.append(ticketsSold, ticketsFree);

    eventCardContainer.append(
      eventCardImg,
      eventThemeContainer,
      eventInfoContainer,
      ticketsContainer
    );
    eventThemeContainer.append(eventThemeTitle, eventThemeDescription);
    eventInfoContainer.append(eventTimeContainer);
    eventTimeContainer.append(calenderIcon, eventDay);
    nameContainer.append(eventCardContainer);

    if (!element.attendees) {
      going.textContent = "0 going";
    }
  });
}

function getClosestEvent(arr) {
  const now = new Date(); // Текущая дата и время
  let futureEventsfiltered = [];
  // Фильтруем события, которые происходят в будущем
  const futureEvents = arr.filter((event) => new Date(event.date) > now);

  // Если нет будущих событий, возвращаем null
  if (futureEvents.length === 0) {
    return null;
  }

  // Сортируем события по дате (по возрастанию)
  futureEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

  // for (let i = 0; i < futureEvents.length; i++) {
  //   futureEventsfiltered = arr[i];
  // }

  if (futureEvents.length > 4) {
    futureEventsfiltered = futureEvents.slice(0, 4);
  } else {
    futureEventsfiltered = futureEvents;
  }
  // Возвращаем события, которое будет следующим
  return futureEventsfiltered;
}

function displayCities(arr) {
  arr.forEach((element) => {
    const meetupCitiesImgContainer = document.createElement("div");
    meetupCitiesImgContainer.classList.add("meetup-cities-img-container");
    const citiesImg = document.createElement("img");
    citiesImg.classList.add("event-card-img");
    citiesImg.setAttribute("src", element.image);
    citiesImg.setAttribute("alt", "citiesImg");
    const meetupCitiesName = document.createElement("p");
    meetupCitiesName.classList.add("meetup-cities-name");
    meetupCitiesName.textContent = `${element.cityName}`;
    meetupCitiesImgContainer.append(citiesImg, meetupCitiesName);
    meetupCitiesImg.append(meetupCitiesImgContainer);
  });
}
function displayFrieshipCards(arr) {
  arr.forEach((element) => {
    const friendshipCard = document.createElement("div");
    friendshipCard.classList.add("friendship-card");
    const friendshipCardImg = document.createElement("img");
    friendshipCardImg.setAttribute("src", element.image);
    friendshipCardImg.setAttribute("alt", "friendshipCardImg");
    const friendshipCardTitle = document.createElement("h3");
    friendshipCardTitle.classList.add("friendship-card-title");
    friendshipCardTitle.textContent = `${element.title}`;
    const friendshipCardText = document.createElement("p");
    friendshipCardText.classList.add("friendship-card-text");
    friendshipCardText.textContent = `${element.text}`;
    friendshipCard.append(
      friendshipCardImg,
      friendshipCardTitle,
      friendshipCardText
    );
    friendshipCardsContainer.append(friendshipCard);
  });
}
function redirectToEvents() {
  window.location.href = "ny-events.html";
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("loadevent");

  displayEvents(eventsStore, cardsContainer);
  displayEvents(getClosestEvent(eventsStore), upcomingOnlineEventsContainer);
  displayCities(meetupCities);
  displayFrieshipCards(frienshipCards);
});

const joinMeetupBtn = document.querySelector(".join-meetup-btn");
joinMeetupBtn.addEventListener("click", () => {
  window.location.href = "ny-events.html";
});
