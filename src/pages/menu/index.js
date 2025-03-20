import closeWindowIcon from "./../../asserts/icons/window-close.svg";

const menu = document.createElement("menu");
const div = document.createElement("div");
const img = document.createElement("img");
const menuList = document.createElement("ul");
const menuItems = ["Home", "Resume", "Projects", "Contact"];

/**
 * close menu window.
 */
const closeMenu = () => {
  menu.style.transition = "height 1s ease-in-out";
  menu.style.height = "0vh";
};

// open menu 
export const openMenu = () => {
  menu.style.transition = "height 1s ease-in-out";
  menu.style.height = "100vh";
}

/* close menu window icon */
img.src = closeWindowIcon;
img.addEventListener("click", () => {
  closeMenu();
});

div.appendChild(img);
menuItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  // close menu after each button is clicked
  listItem.addEventListener("click", () => {
    closeMenu();
  });
  menuList.appendChild(listItem);
});
div.appendChild(menuList);
menu.appendChild(div);

export default menu;
