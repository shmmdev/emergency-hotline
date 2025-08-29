"use strict";

let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartCountEl = document.querySelector(".heart-count");
const coinCountEl = document.querySelector(".credit-count");
const copyCountEl = document.querySelector(".copy-count");

const historyCardsContainerEl = document.querySelector(
  ".history-cards-container"
);
const btnClearHistory = document.querySelector(".btn-clear-history");

// Initialization
function Init() {
  btnClearHistory.addEventListener("click", clearHistory);
  clearHistory();
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

// Clear History Function
function clearHistory() {
  historyCardsContainerEl.innerHTML = "";
  resetUI();
}

// Running first time
Init();
