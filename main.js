import {getStudentsListComponent} from './students-list.js';

const studentsList= [{name:'Ortal Tsarfati', cvFile:'./ortal/cv.html', image:'https://cdn.pixabay.com/photo/2019/06/28/11/22/kuala-4303984_1280.jpg'}]

const studentsContainer = document.querySelector('.studentsContainer');
const studentListComponent = getStudentsListComponent(studentsList);
studentsContainer.appendChild(studentListComponent.element);