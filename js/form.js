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
  const tag = formElements.tags.value;

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data: ", data);

  //add card
  const divForCard = document.createElement("div");
  const card = document.createElement("section");

  main.append(divForCard);
  divForCard.append(card);
  divForCard.classList.add("content");
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
});
