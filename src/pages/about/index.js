import buttonsContainer from "./buttons";
import aboutMe from "./aBitAboutMe";
import profileSrc from "./../../asserts/images/204Sifiso Mabuza simabuz022.jpg";

const aboutSection = document.createElement("section");
aboutSection.setAttribute("id", "about");

const profileImage = document.createElement("img");
profileImage.setAttribute("alt", "profile");
profileImage.src = profileSrc;
const div = document.createElement("div");
const greeting = document.createElement("h1");
greeting.textContent = "Hello";

div.appendChild(greeting);
div.appendChild(aboutMe);
div.appendChild(buttonsContainer);

aboutSection.appendChild(profileImage);
aboutSection.appendChild(div);

export default aboutSection;
