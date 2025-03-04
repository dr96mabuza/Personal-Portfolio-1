import nav from "./nav";

const header = document.createElement("header");
header.setAttribute("id", "header");

const div = document.createElement("div");
const img = document.createElement("img");
const ownerName = document.createElement("p");
ownerName.textContent = "SD Mabuza";
const ownerTitle = document.createElement("p");
ownerTitle.textContent = "Software Developer";

div.appendChild(img);
div.appendChild(ownerName);
div.appendChild(ownerTitle);

header.appendChild(div);
header.appendChild(document.createElement("img"));
header.appendChild(nav);

export default header;
