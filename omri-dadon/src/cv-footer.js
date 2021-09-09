
function getSkillContainer() {
    const cvFooter = document.querySelector("footer");
    const skillContainer = document.createElement("div");
    skillContainer.className = "skills-container";
    cvFooter.appendChild(skillContainer);
}
getSkillContainer();

function addSkillTitel() {
    const cvFooter = document.querySelector(".skills-container");
    const skillTitle = document.createElement("h2");
    skillTitle.className = "skill-title";
    skillTitle.innerHTML = "Skills";
    cvFooter.appendChild(skillTitle);
}
addSkillTitel()

function getContactInfo() {
    const cvFooter = document.querySelector("footer");
    const contactInfo = document.createElement("div");
    contactInfo.className = "contact-info-container";
    cvFooter.appendChild(contactInfo);
}
getContactInfo();

function addContactInfoTitel() {
    const cvFooter = document.querySelector(".contact-info-container");
    const contactInfoTitle = document.createElement("h2");
    contactInfoTitle.className = "contact-info-title";
    contactInfoTitle.innerHTML = "Contact Information";
    cvFooter.appendChild(contactInfoTitle);
}
addContactInfoTitel()