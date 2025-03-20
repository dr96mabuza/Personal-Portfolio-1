import linkedinSrc from "./../../asserts/icons/iconmonstr-linkedin-1.svg";
import githubSrc from "./../../asserts/icons/iconmonstr-github-5.svg";

const socialMediaProfileLinks = [
  // to be moved to constants file
  {
    alt: "linkedin",
    href: "https://www.linkedin.com/in/sifiso-doctor-mabuza-901772208/",
    src: linkedinSrc,
  },
  { alt: "github", href: "https://github.com/dr96mabuza", src: githubSrc },
];
const socials = document.createElement("div");
socials.setAttribute("id", "followMe");
const followMeText = document.createElement("p");
followMeText.textContent = "Follow Me";

const links = document.createElement("div");
socialMediaProfileLinks.forEach((item) => {
  const aTag = document.createElement("a"); // a element to redirect to website on click
  aTag.setAttribute("href", item.href);
  aTag.setAttribute("target", "_blank");
  const imgTag = document.createElement("img"); // create img element to hold img
  imgTag.setAttribute("alt", item.alt);
  imgTag.setAttribute("src", item.src);
  imgTag.setAttribute("target", "_blank");
  aTag.appendChild(imgTag); // add img to a. whole img to be clickable
  links.appendChild(aTag); // add a and img to parent container
});
socials.appendChild(followMeText);
socials.appendChild(links); // socials/Container has two children

export default socials;
