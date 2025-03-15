const skills = (skillItems) => {
  const skillsContainer = document.createElement("div");
  skillsContainer.setAttribute("id", "skills");

  const skillsHeader = document.createElement("h3");
  skillsHeader.textContent = "Skills & Expertise";
  const skillsList = document.createElement("ul");
  skillItems.forEach((skill) => {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
  });

  skillsContainer.appendChild(skillsHeader);
  skillsContainer.appendChild(skillsList);

  return skillsContainer;
};

export default skills;
