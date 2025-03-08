const buttonsContainer = document.createElement("div");
buttonsContainer.setAttribute("class", "buttons");

const buttonNames = ["Resume", "Projects", "Contact"];
buttonNames.forEach((name) => {
  const button = document.createElement("button");
  button.textContent = name;
  buttonsContainer.appendChild(button);
});

export default buttonsContainer;
