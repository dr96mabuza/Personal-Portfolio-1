import "./style/meyer.css";
import "./style/style.css";
// import "./style/tabletStyle.css";
import "./style/mobileStyle.css";

// import standalone pages
import header from "./pages/header";
import aboutSection from "./pages/about";
import menu from "./pages/menu";
import resume from "./pages/resume";
import contact from "./pages/contact";
import projects from "./pages/projects";
import footer from "./pages/footer";


// add pages to main document/body
document.querySelector("body").appendChild(header);
document.querySelector("body").appendChild(aboutSection);
document.querySelector("body").appendChild(contact);
document.querySelector("body").appendChild(resume);
document.querySelector("body").appendChild(projects);
document.querySelector("body").appendChild(footer);
document.querySelector("body").appendChild(menu);



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
    ["resume", "contact"].toString().includes(button.textContent.toLowerCase())
  ) {
    document.querySelector(
      `#${button.textContent.toLowerCase()}`,
    ).style.display = "flex";
  } else if (button.textContent.toLowerCase() === "projects") {
    document.querySelector(
      `#${button.textContent.toLowerCase()}`,
    ).style.display = "grid";
  } else {
    document.querySelector("#about").style.display = "flex";
  }
};

/**
 * Insures that the section is viewed from the top, always.
 * @param {HTMLElement} button
 */
const backToTop = () => {
  document.documentElement.scrollTop = 0;
};

/* nav buttons */
document
  .querySelectorAll(
    "#about button, nav > ul > li, #header p:nth-child(2), menu > div > ul > li",
  )
  .forEach((button) => {
    button.addEventListener("click", () => {
      displayNoneAll();
      displaySelectedSection(button);
      backToTop();
    });
  });
