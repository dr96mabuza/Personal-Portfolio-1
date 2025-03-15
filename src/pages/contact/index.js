import contactForm from "./contactForm";
import { email, phone } from "./contactDetails";

const contact = document.createElement("section");
contact.setAttribute("id", "contact");
const header = document.createElement("h2");
header.textContent = "Contact";
const paragraph = document.createElement("p");
paragraph.textContent = "Looking forward to hearing from you.";
const contactsContainer = document.createElement("div");
contactsContainer.appendChild(phone());
contactsContainer.appendChild(email());
const div = document.createElement("div");
div.appendChild(contactsContainer);
div.appendChild(contactForm);

contact.appendChild(header);
contact.appendChild(paragraph);
contact.appendChild(div);

export default contact;
