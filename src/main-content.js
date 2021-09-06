export function addWorkExperience() {
  const mainContainer = document.querySelector("main");
  const firstH2 = document.createElement("h2");
  firstH2.innerHTML = "Work Experience";
  mainContainer.appendChild(firstH2);
}

addWorkExperience();

function addWorkExperienceText() {
  const mainContainer = document.querySelector("main");
  const workExeperiencePara = document.createElement("p");
  workExeperiencePara.innerHTML = "This is my work experience";
  mainContainer.appendChild(workExeperiencePara);
}

addWorkExperienceText();

function addEducation() {
  const mainContainer = document.querySelector("main");
  const educationH2 = document.createElement("h2");
  educationH2.innerHTML = "Education";
  mainContainer.appendChild(educationH2);
}

addEducation();

function addEducationParaText() {
  const mainContainer = document.querySelector("main");
  const educationPara = document.createElement("p");
  educationPara.innerHTML = "This is my work experience";
  mainContainer.appendChild(educationPara);
}

addEducationParaText();
