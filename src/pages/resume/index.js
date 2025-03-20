import skills from "./skills";
import resumeJSON from "./resume.json";
import education from "./education";
import workExperience from "./workExperience";

const separation = (fieldName) => {
  const container = document.createElement("div");
  container.setAttribute("class", "separation");
  const header = document.createElement("h3");
  header.textContent = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
  container.appendChild(header);
  const contentContainer = document.createElement("div");
  const resumeItems =
    fieldName === "education"
      ? education(resumeJSON[fieldName])
      : workExperience(resumeJSON[fieldName]);
  resumeItems.forEach((item) => contentContainer.appendChild(item));
  container.appendChild(contentContainer);
  return container;
};

const resume = document.createElement("section");
resume.setAttribute("id", "resume");
const resumeHeader = document.createElement("h2");
resumeHeader.textContent = "Resume";
resume.appendChild(resumeHeader);
resume.appendChild(separation("work experience"));
resume.appendChild(separation("education"));

resume.appendChild(skills(resumeJSON.skills));

export default resume;
