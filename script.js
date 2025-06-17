// List of daily quotes
const quotes = [
  "Success is no accident. – Pelé",
  "Hard work beats talent when talent doesn't work hard.",
  "Stay hungry. Stay foolish. – Steve Jobs",
  "Small steps every day lead to big results.",
  "Discipline is the bridge between goals and accomplishment."
];

// Pick quote based on current day
const today = new Date();
const index = today.getDate() % quotes.length; // Change quote daily
document.getElementById("quote-box").textContent = quotes[index];
