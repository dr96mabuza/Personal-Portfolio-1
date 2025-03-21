const contactForm = document.createElement("form");
contactForm.setAttribute("action", "/");
contactForm.setAttribute("method", "post");

const inputsContainer = document.createElement("div");
const inputLabels = ["First Name", "Last Name", "Email", "Subject"];
inputLabels.forEach((item) => {
  const inputContainer = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");
  input.setAttribute("type", item === "Email" ? "email" : "text");
  input.setAttribute("for", item);
  input.setAttribute("min", item === "Email" ? 8 : 3);
  input.setAttribute("max", 45);
  input.required = true;
  label.textContent = item;
  inputContainer.appendChild(label);
  inputContainer.appendChild(input);
  inputsContainer.appendChild(inputContainer);
});

const messageContainer = document.createElement("div");
messageContainer.setAttribute("id", "message");
const messageInputContainer = document.createElement("div");
const label = document.createElement("label");
label.textContent = "Message";
const textArea = document.createElement("textarea");
textArea.setAttribute("cols", 30);
textArea.setAttribute("rows", 10);
textArea.setAttribute("min", 10);
textArea.setAttribute("max", 250);
textArea.required = true;
messageInputContainer.appendChild(label);
messageInputContainer.appendChild(textArea);
const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Submit";
messageContainer.appendChild(messageInputContainer);
messageContainer.appendChild(submitButton);

contactForm.appendChild(inputsContainer);
contactForm.appendChild(messageContainer);

export default contactForm;
