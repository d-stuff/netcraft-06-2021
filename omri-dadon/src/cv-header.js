
function addImgElement() {
    const profileImgDiv = document.querySelector(".profile-img");
    const profileImg = document.createElement("img");
    profileImg.src =
     "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
     profileImgDiv.appendChild(profileImg);
}
addImgElement()

function addInfoContainer() {
    const infoContainer = document.createElement("div");
    infoContainer.className = "info-container";
    document.body.appendChild(infoContainer);
}
addInfoContainer();

function addElement() {
    const topHeader = document.querySelector(".info-container");
    const infoTitle = document.createElement("h1");
    infoTitle.innerHTML = " Omri Dadon CV";
    topHeader.appendChild(infoTitle);
} 
addElement();

function addPharaElement() {
    const topHeader = document.querySelector(".info-container");
    const infoText = document.createElement("p");
    infoText.innerHTML = "this is the text of the";
    topHeader.appendChild(infoText);
} 
addPharaElement();

function addHeaderContainer() {
    const headerContainer = document.querySelector(".header-container");
    const wrapper = document.querySelector(".info-container");
    headerContainer.appendChild(wrapper);
}
addHeaderContainer();