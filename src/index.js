import "./style/meyer.css";
import "./style/style.css";
import "./style/tabletStyle.css";
import "./style/mobileStyle.css";

const project1 = document.querySelector("#project1");
const project2 = document.querySelector("#project2");
const project3 = document.querySelector("#project3");
const project4 = document.querySelector("#project4");
const project5 = document.querySelector("#project5");
const project6 = document.querySelector("#project6");
const headerImageContainer = document.querySelector("#headerImageContainer");
const footer = document.querySelector("#footer");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

const myImage = new Image();
myImage.src = require("./images/pexels-pixabay-210881.jpg");

const myImage1 = new Image();
myImage1.src = require("./images/julie-molliver-Z3vFp7szCAY-unsplash.jpg");

const myImage2 = new Image();
myImage2.src = require("./images/ivan-kazlouskij-AWYePc-i7mo-unsplash.jpg");

const myImage3 = new Image();
myImage3.src = require("./images/hunter-haley-s8OO2-t-HmQ-unsplash.jpg");

const myImage4 = new Image();
myImage4.src = require("./images/haupes-I7iJOE4fsYo-unsplash.jpg");

const myImage5 = new Image();
myImage5.src = require("./images/greg-rosenke-xoxnfVIE7Qw-unsplash.jpg");

const heroImage = new Image();
heroImage.src = require("./images/204Sifiso Mabuza simabuz022.svg");

const footerImage = new Image();
footerImage.src = require("./images/438Sifiso Mabuza simabuz022.svg");

const phoneIcon = new Image();
phoneIcon.setAttribute("class", "contactIcon");
phoneIcon.src = require("./icons/phone-outline.svg");

const emailIcon = new Image();
emailIcon.setAttribute("class", "contactIcon");
emailIcon.src = require("./icons/email-outline.svg");

headerImageContainer.appendChild(heroImage);
project1.appendChild(myImage);
project2.appendChild(myImage1);
project3.appendChild(myImage2);
project4.appendChild(myImage3);
project5.appendChild(myImage4);
project6.appendChild(myImage5);
footer.appendChild(footerImage);
email.appendChild(emailIcon);
phone.appendChild(phoneIcon);
