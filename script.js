"use strict";

let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartCountEl = document.querySelector(".heart-count");
const coinCountEl = document.querySelector(".credit-count");
const copyCountEl = document.querySelector(".copy-count");

const heartReactionAllBtn = document.querySelectorAll(
  ".card-love-react-container"
);
const copyNumberAllBtn = document.querySelectorAll(".btn-copy");
const allCallBtn = document.querySelectorAll(".btn-call");

const historyCardsContainerEl = document.querySelector(
  ".history-cards-container"
);
const btnClearHistory = document.querySelector(".btn-clear-history");

// Initialization
function Init() {
  btnClearHistory.addEventListener("click", clearHistory);
  clearHistory();

  //   Add Event Listener to all the heart icons
  for (const heartReactBtn of heartReactionAllBtn) {
    heartReactBtn.addEventListener("click", heartReactHandler);
  }

  //   Add Event Listener to all the copy buttons
  for (const copyBtn of copyNumberAllBtn) {
    copyBtn.addEventListener("click", () => copyNumberToClipboard(copyBtn));
  }

  //   Add Event Listener to all the Call buttons
  for (const callBtn of allCallBtn) {
    callBtn.addEventListener("click", () => callNumber(callBtn));
  }

  updateUI();
}

// Reset UI Function
function resetUI() {
  heartCount = 0;
  coinCount = 100;
  copyCount = 0;

  updateUI();
}

// add history function
function addCallHistory(mainHeading = "", phoneNumber = "", callingTime = "") {
  // Call history adding
  if (phoneNumber === "") return;
  const historyCard = `<div class="history-card">
                            <div class="call-info">
                                <h5 class="history-contact-name inter-font">${mainHeading}</h5>
                                <p class="history-contact-number hind-madurai-font">${phoneNumber}</p>
                            </div>
                            <div class="time-container">
                                <p class="time-text hind-madurai-font">${callingTime}</p>
                            </div>
                        </div>`;

  historyCardsContainerEl.insertAdjacentHTML("afterbegin", historyCard);
}

//  Update UI to current state function
function updateUI() {
  heartCountEl.textContent = heartCount;
  coinCountEl.textContent = coinCount;
  copyCountEl.textContent = copyCount;
}

// Clear History Function
function clearHistory() {
  historyCardsContainerEl.innerHTML = "";
}

// Heart Reaction Function
function heartReactHandler() {
  heartCount++;
  updateUI();
}

// Copy Phone Number to Clipboard Function
function copyNumberToClipboard(copyBtn) {
  const cardEl = copyBtn.parentElement.parentElement;
  const phoneNumber = cardEl.querySelector(".phone-number").textContent;
  navigator.clipboard.writeText(phoneNumber);
  copyCount++;
  updateUI();

  showAlert("📋 Number has been copied to clipboard: " + phoneNumber);
}

// Call an Emergency Number Function
function callNumber(callBtn) {
  if (coinCount >= 20) {
    const cardEl = callBtn.parentElement.parentElement;
    const phoneNumber = cardEl.querySelector(".phone-number").textContent;
    const mainHeading = cardEl.querySelector(".card-heading").textContent;

    coinCount -= 20;
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = hours.toString().padStart(2, "0");

    const callingTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    updateUI();
    addCallHistory(mainHeading, phoneNumber, callingTime);

    // console.log(callingTime);

    showAlert("📞 Calling " + mainHeading + ": " + phoneNumber);
  } else {
    showAlert("❌ You don't have enough coin to make a call");
  }
}

// showing alert function
function showAlert(str) {
  console.log(str);
  alert(str);
}

// Running first time
Init();
