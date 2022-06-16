import "./style.css";
import image from "./images/pexels-pixabay-210881.jpg";

const project1 = document.querySelector("#project1");
const project2 = document.querySelector("#project2");
const project3 = document.querySelector("#project3");
const project4 = document.querySelector("#project4");
const project5 = document.querySelector("#project5");
const project6 = document.querySelector("#project6");

const myImage = new Image();
myImage.src = image;

project1.appendChild(myImage);
project2.appendChild(myImage);
project3.appendChild(myImage);
project4.appendChild(myImage);
project5.appendChild(myImage);
project6.appendChild(myImage);
