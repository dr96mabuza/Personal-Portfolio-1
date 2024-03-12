import "./style/meyer.css";
import "./style/style.css";
// import "./style/tabletStyle.css";
import "./style/mobileStyle.css";

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

/**
 * hide all content sections
 */
const displayNoneAll = () => {
  document
    .querySelectorAll("#about, #resume, #contact, #projects")
    .forEach((item) => {
      // eslint-disable-next-line no-param-reassign
      item.style.display = "none";
    });
};

/**
 * Displays the selected content section only.
 * @param {HTMLElement} button
 */
const displaySelectedSection = (button) => {
  if (
    ["resume", "contact"]
      .toString()
      .includes(button.textContent.toLowerCase())
  ) {
    document
      .querySelector(`#${button.textContent.toLowerCase()}`)
      .style.display = "flex";
  } else if (button.textContent.toLowerCase() === "projects") {
    document
      .querySelector(`#${button.textContent.toLowerCase()}`)
      .style.display = "grid";
  } else {
    document
      .querySelector("#about")
      .style.display = "grid";
  }
};

/* nav buttons */
document
  .querySelectorAll("#about button, nav > ul > li, #header p:nth-child(2)")
  .forEach((button) => {
    button.addEventListener("click", () => {
      displayNoneAll();
      displaySelectedSection(button);
    });
  });
