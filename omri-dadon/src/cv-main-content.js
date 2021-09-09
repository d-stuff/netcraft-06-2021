// const workExperiencePhara = document.createElement('p');
// const education = document.createElement.className('h2.education');
// const educationPhara = document.createElement('p');

function addWorkExperienceTitle() {
    const mainContainer = document.querySelector("main");
    const workExperienceTitle = document.createElement("h2");
    workExperienceTitle.innerHTML = "Work Experience";
    mainContainer.appendChild(workExperienceTitle);
  }
  addWorkExperienceTitle();

  function addWorkExperiencePhara() {
    const mainContainer = document.querySelector("main");
    const workExperiencePhara = document.createElement("p");
    workExperiencePhara.innerHTML = "this is my pharagraph";
    mainContainer.appendChild(workExperiencePhara);
  }
  addWorkExperiencePhara();
  
function addEducationTitle() {
    const mainContainer = document.querySelector("main");
    const educationTitle = document.createElement("h2");
    educationTitle.innerHTML = "Education";
    mainContainer.appendChild(educationTitle);
  }
  addEducationTitle();

  function addEducationPhara() {
    const mainContainer = document.querySelector("main");
    const eductionPhara = document.createElement("p");
    eductionPhara.innerHTML = "this is my pharagraph";
    mainContainer.appendChild(eductionPhara);
  }
  addEducationPhara();
  