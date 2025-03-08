import buttonsContainer from "./buttons";
import aboutMe from "./aBitAboutMe";

const aboutSection = document.createElement("section");
aboutSection.setAttribute("id", "about");

const profileImage = document.createElement("img");
profileImage.setAttribute("alt", "profile");
const div = document.createElement("div");
const greeting = document.createElement("h1");
greeting.textContent = "Hello";

div.appendChild(greeting);
div.appendChild(aboutMe);
div.appendChild(buttonsContainer);

aboutSection.appendChild(profileImage);
aboutSection.appendChild(div);

export default aboutSection;
