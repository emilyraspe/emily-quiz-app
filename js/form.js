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
  const card = document.createElement("section");

  main.append(card);
  card.classList.add("cards");
});
