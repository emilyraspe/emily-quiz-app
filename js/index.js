// toggle function for bookmark
const bookmark = document.querySelectorAll('[data-js="bookmark"]');

bookmark.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    if (bookmark.classList.contains("cards--icon--active")) {
      bookmark.classList.remove("cards--icon--active");
    } else {
      bookmark.classList.add("cards--icon--active");
    }
  });
});

//toggle function for answer
const answerButton = document.querySelectorAll('[data-js="answer-button"]');
const answer = document.querySelectorAll('[data-js="answer"]');

answerButton.forEach((answerButton, index) => {
  answerButton.addEventListener("click", () => {
    if (answer[index].hasAttribute("hidden")) {
      answer[index].removeAttribute("hidden");
      answerButton.textContent = "Hide answer";
    } else {
      answer[index].setAttribute("hidden", true);
      answerButton.textContent = "Show answer";
    }
  });
});
