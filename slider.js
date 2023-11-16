const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%"; //para que regrese a la normalidad
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%"; //para que regrese a la normalidad
    }, 500);
}
btnRight.addEventListener('click', function () {
    Next();
});
btnLeft.addEventListener('click', function () {
    Prev();
});

setInterval(function () {
    Next();
}, 5000);

document.getElementById("C1").innerHTML = "Son aquellas que se realizan para determinar las condiciones de salud física, mental y social del trabajador antes de su contratación.";

document.getElementById("C2").innerHTML = "Son un tipo de examen ocupacional que tiene como fin evaluar y monitorear por parte del colaborador los factores de riesgo en su actividad laboral.";

document.getElementById("C3").innerHTML = "Una audiometría es una prueba que mide la capacidad de una persona para escuchar el sonido. Sirve para determinar el perfil audiológico y encontrar posibles problemas de audición.";

document.getElementById("C4").innerHTML = "La espirometría es una prueba fundamental para evaluar la función pulmonar";

document.getElementById("C5").innerHTML = "Es una sencilla exploración que obtiene un registro de la actividad eléctrica del corazón mediante unos electrodos aplicados en la piel.";

document.getElementById("C6").innerHTML = "Es un proceso centrado en la relación médico-paciente que busca brindar apoyo a las necesidades de salud-enfermedad, sufrimiento e incertidumbre que tiene el paciente cuando se ve afectada su integridad física, humana y emocional.";

