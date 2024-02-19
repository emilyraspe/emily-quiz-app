// darkmode
const body = document.querySelector('[data-js="body"]');
const toggleSwitch = document.querySelector('[data-js="toggleSwitch"]');
const profileCategoriesOne = document.querySelector(
  '[data-js="profileCategoriesOne"]'
);
const profileCategoriesTwo = document.querySelector(
  '[data-js="profileCategoriesTwo"]'
);

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("darkmode");
  profileCategoriesOne.classList.toggle("profile--categories--sm--darkmode");
  profileCategoriesTwo.classList.toggle("profile--categories--sm--darkmode");
});
