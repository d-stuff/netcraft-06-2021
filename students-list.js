import {getStudentComponent} from './student-item.js';

export function getStudentsListComponent(studentsList){
    const wrapper = document.createElement('div');
    wrapper.classList.add('students-list');
    renderStudentList(studentsList);

    function renderStudentList(studentsList){
        wrapper.innerHTML = "";
        studentsList
            .map(item => getStudentComponent(item).element)
            .map(element => wrapper.appendChild(element));
    }

    return {
        element: wrapper,
    }
}

