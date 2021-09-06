export function addImageElement() {
  const profileImageDiv = document.querySelector(".profile-img");
  const profileImg = document.createElement("img");
  profileImg.src =
    "https://image.shutterstock.com/image-vector/man-icon-flat-vector-260nw-1371568223.jpg";
  profileImageDiv.appendChild(profileImg);
}

addImageElement();

function addInfoContainer() {
  const infoContainer = document.createElement("div");
  infoContainer.className = "info-container";
  document.body.appendChild(infoContainer);
}

addInfoContainer();

function addElement() {
  const topHeader = document.querySelector(".info-container");
  const infoTitle = document.createElement("h1");
  infoTitle.innerHTML = "Nail That!";
  topHeader.appendChild(infoTitle);
}

addElement();

function addParaElement() {
  const topHeader = document.querySelector(".info-container");
  const infoText = document.createElement("p");
  infoText.innerHTML =
    "My name is Erez Vaknin, I'm 35 years old and i', living at Kiryat Motzkin";
  topHeader.appendChild(infoText);
}

addParaElement();

export function addHeaderContainer() {
  const headerContainer = document.querySelector(".header-container");
  const wrapper = document.querySelector(".info-container");
  headerContainer.appendChild(wrapper);
}
addHeaderContainer();
