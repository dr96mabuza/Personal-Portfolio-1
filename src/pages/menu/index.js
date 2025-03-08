const menu = document.createElement("menu");
const div = document.createElement("div");
const img = document.createElement("img");
const menuList = document.createElement("ul");
const menuItems = ["Home", "Resume", "Projects", "Contact"];

div.appendChild(img);
menuItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  menuList.appendChild(listItem);
});
div.appendChild(menuList);
menu.appendChild(div);

export default menu;
