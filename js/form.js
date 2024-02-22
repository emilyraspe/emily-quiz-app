// form

const form = document.querySelector('[data-js="form"]');
const body = document.querySelector('[data-js="body"]');
const main = document.querySelector('[data-js="main"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Data from form
  const formElements = event.target.elements;
  const question = formElements.yourQuestion.value;
  const answer = formElements.yourAnswer.value;
  const tag = "#" + formElements.tags.value;

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  //add card
  const divForCard = document.createElement("div");
  const card = document.createElement("section");

  main.append(divForCard);
  divForCard.append(card);
  divForCard.classList.add("content--form--card");
  card.classList.add("cards");

  //innerhtml for card
  card.innerHTML = `
  <i class="fa-solid fa-bookmark cards--icon" data-js="bookmark"></i>
  <p class="cards--text">
  ${question}
  </p>

  <button data-js="answer-button">Show answer</button>
  <p hidden class="cards--text" data-js="answer">
  ${answer}
  </p>
  <div class="cards--categories--main">
    <span class="cards--categories">  ${tag} </span>
  </div>`;

  //bookmark
  const bookmark = card.querySelector('[data-js="bookmark"]');
  bookmark.addEventListener("click", () => {
    if (bookmark.classList.contains("cards--icon--active")) {
      bookmark.classList.remove("cards--icon--active");
    } else {
      bookmark.classList.add("cards--icon--active");
    }
  });

  //toggle function for answer
  const answerButton = card.querySelector('[data-js="answer-button"]');
  const answerText = card.querySelector('[data-js="answer"]');

  answerButton.addEventListener("click", () => {
    if (answerText.hasAttribute("hidden")) {
      answerText.removeAttribute("hidden");
      answerButton.textContent = "Hide answer";
    } else {
      answerText.setAttribute("hidden", true);
      answerButton.textContent = "Show answer";
    }
  });
});

//function for Counter
function CharacterCounter(inputElement, counterElement, maxLength) {
  inputElement.addEventListener("input", (event) => {
    let numberOfCharacters = event.target.value.length;
    let numbersLeft = maxLength - numberOfCharacters;
    counterElement.innerHTML = numbersLeft;
  });
}

// Charactercounter Question
const charactersQuestion = document.querySelector(
  '[data-js="charactersQuestion"]'
);
const counterQuestion = document.querySelector(".counterQuestion");
const maxLengthQuestion = 150;
CharacterCounter(charactersQuestion, counterQuestion, maxLengthQuestion);

// Charactercounter Answer
const charactersAnswer = document.querySelector('[data-js="charactersAnswer"]');
const counterAnswer = document.querySelector(".counterAnswer");
const maxLengthAnswer = 150;
CharacterCounter(charactersAnswer, counterAnswer, maxLengthAnswer);

//Color for counter
