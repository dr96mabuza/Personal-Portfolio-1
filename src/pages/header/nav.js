const navItems = ["Resume", "Projects", "Contact"];
const nav = document.createElement("nav");
const unorderdList = document.createElement("ul");

navItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  unorderdList.appendChild(listItem);
});

nav.appendChild(unorderdList);

export default nav;
