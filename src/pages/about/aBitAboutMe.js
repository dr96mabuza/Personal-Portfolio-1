const aboutMe = document.createElement("div");
const aboutMeText =
  "Software developer. " +
  "<br/>" +
  " Node.js, React, Python, Java and other developer tools and libraries.";
const paragraphOne = document.createElement("p");
const paragraphTwo = document.createElement("p");

paragraphOne.textContent = "A bit about me";
paragraphTwo.textContent = aboutMeText;

aboutMe.appendChild(paragraphOne);
aboutMe.appendChild(paragraphTwo);

export default aboutMe;
