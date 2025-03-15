const workExperience = (workExperienceItems) => {
  const resumeItems = new Array();

  workExperienceItems.forEach((element) => {
    const contentContainer = document.createElement("div");
    const container = document.createElement("div");

    container.setAttribute("class", "resumeItem");
    const duration = document.createElement("p");
    duration.setAttribute("class", "duration");
    duration.textContent = `${element.duration.start} - ${element.duration.end}`;
    container.appendChild(duration);

    const position = document.createElement("p");
    position.setAttribute("class", "position");
    position.textContent = `${element.company} | ${element.position}.`;
    container.appendChild(position);

    const description = document.createElement("p");
    description.setAttribute("class", "description");
    description.textContent = element.description;
    container.appendChild(description);

    contentContainer.appendChild(container);
    resumeItems.push(contentContainer);
  });

  return resumeItems;
};

export default workExperience;
