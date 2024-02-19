// toggle function for bookmark
const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  if (bookmark.classList.contains("cards--icon--active")) {
    bookmark.classList.remove("cards--icon--active");
  } else {
    bookmark.classList.add("cards--icon--active");
  }
});

//toggle function for answer
const answerButton = document.querySelector('[data-js="answer-button"]');
const answer = document.querySelector('[data-js="answer"]');

answerButton.addEventListener("click", () => {
  if (answer.hasAttribute("hidden")) {
    answer.removeAttribute("hidden");
    answerButton.textContent = "Hide answer";
  } else {
    answer.setAttribute("hidden", true);
    answerButton.textContent = "Show answer";
  }
});
