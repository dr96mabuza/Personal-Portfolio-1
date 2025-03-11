const education = (educationItems) => {
  const resumeItems = new Array();

  educationItems.forEach((element) => {
    const contentContainer = document.createElement("div");
    const educationContainer = document.createElement("div");

    educationContainer.setAttribute("class", "resumeItem");
    const duration = document.createElement("p");
    duration.setAttribute("class", "duration");
    duration.textContent = `${element.duration.start} - ${element.duration.end} | ${element.duration.comment}`;
    educationContainer.appendChild(duration);

    const position = document.createElement("p");
    position.setAttribute("class", "position");
    position.textContent = `${element.institute} | ${element.qualification} NQF ${element.nqf}.`;
    educationContainer.appendChild(position);

    const description = document.createElement("p");
    description.setAttribute("class", "description");
    description.textContent = element.description;
    educationContainer.appendChild(description);

    contentContainer.appendChild(educationContainer);
    resumeItems.push(contentContainer);
  });

  return resumeItems;
};

export default education;
