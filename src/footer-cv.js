const cvFooter = document.querySelector("footer");

function addSkillsContainer() {
  const skillsContainer = document.createElement("div");
  skillsContainer.className = "skills-container";
  cvFooter.appendChild(skillsContainer);
}

addSkillsContainer();

function addSkillTitle() {
  const skillTitle = document.querySelector(".skills-container");
  const skillTitleH2 = document.createElement("h2");
  skillTitleH2.innerHTML = "Skills Title";
  skillTitle.appendChild(skillTitleH2);
}

addSkillTitle();

function addContactInfo() {
  const contactInfo = document.createElement("div");
  contactInfo.className = "contact-info";
  cvFooter.appendChild(contactInfo);
}

addContactInfo();

function addContactInfoTitle() {
  const contactInfoTitle = document.querySelector(".contact-info");
  contactInfoTitle.className = "contact-info";
  cvFooter.appendChild(contactInfo);
}
