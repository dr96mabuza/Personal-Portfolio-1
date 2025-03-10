import { projects as projectsList } from "./projects.json";
import img1 from "./../../asserts/images/Screenshot from 2024-03-11 12-41-12.png";
import img2 from "./../../asserts/images/pankaj-patel-_SgRNwAVNKw-unsplash (1).jpg";
import img3 from "./../../asserts/images/Screenshot from 2024-03-11 13-02-41.png";

const projects = document.createElement("section");
projects.setAttribute("id", "projects");
const header = document.createElement("h2");
header.textContent = "Projects";
projects.appendChild(header);

projectsList.forEach((element) => {
  const projectContainer = document.createElement("div");
  projectContainer.setAttribute("class", "project");
  const div = document.createElement("div");
  const img = new Image();
  img.setAttribute("alt", element.name);
  [img1, img2, img3].map((item) => {
    item === element.src ? (img.src = item) : "";
  });

  const h2 = document.createElement("h2");
  h2.setAttribute("class", "projectName");
  h2.textContent = element.name;
  const p = document.createElement("p");
  p.setAttribute("class", "projectDescription");
  p.textContent = element.description;

  div.appendChild(h2);
  div.appendChild(p);
  projectContainer.appendChild(div);
  projectContainer.appendChild(img);
  projects.appendChild(projectContainer);
});

export default projects;
