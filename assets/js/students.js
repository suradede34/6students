let students = [
    {
        id: 1,
        name: "Atakan",
        lastname: "Arıkan",
        gender: "Erkek",
        section: "Frontend",
        role: "Öğrenci",
    },
    {
        id: 2,
        name: "Busenur",
        lastname: "Savaş",
        gender: "Kadın",
        section: "Frontend",
        role: "Öğrenci",
    },
    {
        id: 3,
        name: "Ece",
        lastname: "Kubilay",
        gender: "Kadın",
        section: "Frontend",
        role: "Öğrenci",
    },
    {
        id: 4,
        name: "Elif Yağmur",
        lastname: "Şahin",
        gender: "Kadın",
        section: "Frontend",
        role: "Öğrenci",
    },
    {
        id: 5,
        name: "Gaye",
        lastname: "Dinç",
        gender: "Kadın",
        section: "Frontend",
        role: "Öğrenci",
    },
    {
        id: 6,
        name: "Gökdeniz",
        lastname: "Keleş",
        gender: "Erkek",
        section: "Frontend",
        role: "Öğrenci",
    },
    {
        id: 7,
        name: "Hilal",
        lastname: "Baran",
        gender: "Kadın",
        section: "Frontend",
        role: "Öğrenci",
    },
    {
        id: 8,
        name: "Mehmet Akif",
        lastname: "Küçükyılmaz",
        gender: "Erkek",
        section: "Frontend",
        role: "Öğrenci",
    },
    {
        id: 9,
        name: "Merve",
        lastname: "Özel",
        gender: "Kadın",
        section: "Frontend",
        role: "Öğrenci",
    },
    {
        id: 10,
        name: "Muhammet Ali",
        lastname: "Şafak",
        gender: "Erkek",
        section: "Frontend",
        role: "Öğrenci",
    },
    {
        id: 11,
        name: "Ömer",
        lastname: "Kuluç",
        gender: "Erkek",
        section: "Frontend",
        role: "Öğrenci",
    }
];



const femaleList = document.getElementById('femaleList');
const maleList = document.getElementById('maleList');
const femaleCount = document.getElementById('femaleCount');
const maleCount = document.getElementById('maleCount');

let femaleStudents = students.filter(student => student.gender === "Kadın");
let maleStudents = students.filter(student => student.gender === "Erkek");

femaleStudents.forEach(student => {
    femaleList.innerHTML += `<li>${student.name} ${student.lastname}</li>`;
});


maleStudents.forEach(student => {
    maleList.innerHTML += `<li>${student.name} ${student.lastname}</li>`;
});


femaleCount.textContent = `Kadin Ogrenci Sayisi: ${femaleStudents.length}`;
maleCount.textContent = `Erkek Ogrenci Sayisi: ${maleStudents.length}`;



