const main = document.querySelector('main');
const element = document.createElement('form');

getSearchFormComponent(element);


function getSearchFormComponent() {

    element.classList.add('search-form');
    main.appendChild(element);
    element.innerHTML = `<label>
		<input placeholder="Search CV">
	</label>
	<button>
		<img src="http://simpleicon.com/wp-content/uploads/magnifier-2.png" class="submit-img" alt="search">
	</button>`;

    const input = element.querySelector('input');

    element.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(input.value);
        studentsCv.forEach(function(students) {
            if (students.name == input.value) {
                console.log(students);
                const result = document.createElement('div');
                main.appendChild(result);
                result.innerHTML = `${students.name}  , ${students.mail}, <a href="${students.cvFile}">${students.cvFile}  </a>`;
            }
        })
        input.value = '';
    })

    return {
        element
    }
}
// Test to see if the search works
const studentsCv = [{
        name: "Shaked Shaul",
        mail: "shukeds@gmail.com",
        cvFile: "/shaked-shaul/cv.html"
    },
    {
        name: "Matan Vilensky",
        mail: "matanv@gmail.com",
        cvFile: "/matan-vilensky/matan-cv.html"
    },
    {
        name: "Omri Dadon",
        mail: "omridadon@gmail.com",
        cvFile: "/omri-dadon/CV.html"
    },
    {
        name: "Ortal Tsarfati",
        mail: "ortalts89@gmail.com",
        cvFile: "/ortal/cv.html"
    },
    {
        name: "Alex",
        mail: "sashaa1819@gmail.com",
        cvFile: "?"
    },
    {
        name: "Maor Lachish",
        mail: "mlachish1@gmail.com/",
        cvFile: "/maor-lachish/cv.html"
    },
    {
        name: "Alon Saban",
        mail: "Alonsaban3@gmail.com",
        cvFile: "/AlonSaban/cv.html"
    },
    {
        name: "Liron Shushan",
        mail: "liron08648@gmail.com",
        cvFile: "?"
    },
    {
        name: "Yasmin Bordiny",
        mail: "bordiny@gmail.com",
        cvFile: "?"
    },
    {
        name: "Nadav Shlomi",
        mail: "NadavSSS@gmail.com",
        cvFile: "?"
    },
    {
        name: "Ben Vered",
        mail: "ben.vered@gmail.com",
        cvFile: "?"
    },
    {
        name: "Erez Vaknin",
        mail: "erezva86@gmail.com",
        cvFile: "?"
    },
    {
        name: "Yehuda Or",
        mail: "yudaor252@gmail.com",
        cvFile: "?"
    },
    {
        name: "David Levy",
        mail: "david@davidlevy.co.il",
        cvFile: "/david-levy/cv.html"
    }
];