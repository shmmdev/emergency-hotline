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
  //   clearHistory();

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

  heartCountEl.textContent = heartCount;
  coinCountEl.textContent = coinCount;
  copyCountEl.textContent = copyCount;
}

//  Update UI to current state function
function updateUI() {
  heartCountEl.textContent = heartCount;
  coinCountEl.textContent = coinCount;
  copyCountEl.textContent = copyCount;

  // Call history adding function
}

// Clear History Function
function clearHistory() {
  historyCardsContainerEl.innerHTML = "";
  resetUI();
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

  alert("📋 Number has been copied to clipboard: " + phoneNumber);
}

// Call an Emergency Number Function
function callNumber(callBtn) {
  if (coinCount >= 20) {
    const cardEl = callBtn.parentElement.parentElement;
    const phoneNumber = cardEl.querySelector(".phone-number").textContent;
    const mainHeading = cardEl.querySelector(".card-heading").textContent;

    coinCount -= 20;
    updateUI();

    alert("📞 Calling " + mainHeading + ": " + phoneNumber);
  }
}

// Running first time
Init();
