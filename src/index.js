import "./style/meyer.css";
import "./style/style.css";
// import "./style/tabletStyle.css";
// import "./style/mobileStyle.css";

const profileSrc = require("./asserts/images/204Sifiso Mabuza simabuz022.jpg");
const project2Src = require("./asserts/images/pankaj-patel-_SgRNwAVNKw-unsplash (1).jpg");
const project1Src = require("./asserts/images/Screenshot from 2024-03-11 12-41-12.png");
const project3Src = require("./asserts/images/Screenshot from 2024-03-11 13-02-41.png");
const linkedinSrc = require("./asserts/icons/iconmonstr-linkedin-1.svg");
const githubSrc = require("./asserts/icons/iconmonstr-github-5.svg");

/* first project img */
document.querySelector("img[alt='project1']").src = project1Src;

/* second project img */
document.querySelector("img[alt='project2']").src = project2Src;

/* third project img */
document.querySelector("img[alt='project3']").src = project3Src;

/* header image and hero image */
document.querySelector("#header > div > img").src = profileSrc;
document.querySelector("img[alt='profile']").src = profileSrc;

/* footer linkedin icon */
document.querySelector("img[alt='linkedin']").src = linkedinSrc;

/* footer github icon */
document.querySelector("img[alt='github']").src = githubSrc;
