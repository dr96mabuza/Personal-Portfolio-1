import nav from "./nav";
import profileSrc from "./../../asserts/images/204Sifiso Mabuza simabuz022.jpg";
import openMenuIcon from "./../../asserts/icons/dots-vertical.svg";
import { openMenu } from "../menu";

const header = document.createElement("header");
header.setAttribute("id", "header");

const div = document.createElement("div");
const img = document.createElement("img");
img.src = profileSrc;
const ownerName = document.createElement("p");
ownerName.textContent = "SD Mabuza";
const ownerTitle = document.createElement("p");
ownerTitle.textContent = "Software Developer";

div.appendChild(img);
div.appendChild(ownerName);
div.appendChild(ownerTitle);

const burgerMenu = document.createElement("img")
/* open menu icon */
// const burgerMenuIcon = document.querySelector("#header > img");
burgerMenu.src = openMenuIcon;
burgerMenu.addEventListener("click", () => {
  openMenu()
});

header.appendChild(div);
header.appendChild(burgerMenu);
header.appendChild(nav);



export default header;
