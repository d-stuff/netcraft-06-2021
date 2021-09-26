export function getStudentComponent(item){
    const element = document.createElement("div");
    element.classList.add("student-item");
    element.innerHTML = `<h3>${item.name}</h3><img src="${item.image}">`;
    element.addEventListener('click',() => {window.open(`${item.cvFile}`)});

    return {
        element,
    };
}