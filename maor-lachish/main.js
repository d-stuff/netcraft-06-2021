const profile = document.querySelector('.profile');
const contact = document.querySelector('.contact');
const education = document.querySelector('.education');
const experience = document.querySelector('.experience');
const skills = document.querySelector('.skills');
const interest = document.querySelector('.interest');

profile.onclick = () => {
    document.querySelector('section.active').classList.remove('active');
    document.getElementById('profile').classList.add('active');
}

contact.onclick = () => {
    document.querySelector('section.active').classList.remove('active');
    document.getElementById('contact').classList.add('active');
}

education.onclick = () => {
    document.querySelector('section.active').classList.remove('active');
    document.getElementById('education').classList.add('active');
}

experience.onclick = () => {
    document.querySelector('section.active').classList.remove('active');
    document.getElementById('experience').classList.add('active');
}

skills.onclick = () => {
    document.querySelector('section.active').classList.remove('active');
    document.getElementById('skills').classList.add('active');
}

interest.onclick = () => {
    document.querySelector('section.active').classList.remove('active');
    document.getElementById('interest').classList.add('active');
}
