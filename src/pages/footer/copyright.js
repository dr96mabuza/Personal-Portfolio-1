const copyrightContainer = document.createElement("div");
const copyrightDetails = document.createElement("p");
copyrightDetails.textContent = "\u00A9 2024 By Sifiso Mabuza"; // fix special char
const designInspo = document.createElement("p");
designInspo.textContent = "Design from ";
const designInspoWebpageLink = document.createElement("a");
designInspoWebpageLink.setAttribute("target", "_blank");
designInspoWebpageLink.setAttribute(
  "href",
  "https://www.wix.com/website-template/view/html/2846?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv%2Fpersonal&tpClick=view_button&esi=d5e00fc7-fc19-4734-bce1-594aa8e066fe",
);
designInspoWebpageLink.textContent = "wix";

designInspo.appendChild(designInspoWebpageLink);
copyrightContainer.appendChild(copyrightDetails);
copyrightContainer.appendChild(designInspo);

export default copyrightContainer;
