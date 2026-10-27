const resultados = {
    carrie: {
        nombre: "YOU ARE CARRIE BRADSHAW!",
        imagen: "look2.carrie.jpg",
        descripcion: "You're creative, curious and always looking for the next great story. You love fashion, friendship and romance."    
    },

    samantha: {
        nombre: "YOU ARE SAMANTHA JONES!",
        imagen: "samantha.jpeg",
        descripcion: "You're confident, independent and spontaneous. You enjoy life to the fullest and always stay true to yourself."
    },

    charlotte: {
        nombre: "YOU ARE CHARLOTTE YORK!",
        imagen: "charlotte.webp",
        descripcion: "You're romantic, elegant and caring. You value friendship, loyalty and meaningful relationships."
    },

    miranda: {
        nombre: "YOU ARE MIRANDA HOBBES!",
        imagen: "miranda.webp",
        descripcion: "You're intelligent, practical and independent. You speak your mind and work hard for what you want."
    }
};

function calcularResultado () {
    const puntajes = {
        carrie: 0,
        samantha: 0,
        charlotte: 0,
        miranda: 0
    };

    for (let i = 1; i <= 10; i++) {
        const respuesta = document.querySelector (
            'input[name="q' + i + '"]:checked'
        );

        if (!respuesta) {
            alert("Please answer all 10 questions!");
            return;
        }

        puntajes[respuesta.value]++;
    }

let personaje = "carrie";
let mayorPuntaje = puntajes.carrie;

if (puntajes.samantha > mayorPuntaje) {
    personaje = "samantha";
    mayorPuntaje = puntajes.samantha;
}

if (puntajes.charlotte > mayorPuntaje) {
    personaje = "charlotte";
    mayorPuntaje = puntajes.charlotte;
}

if (puntajes.miranda > mayorPuntaje) {
    personaje = "miranda";
}

const resultado = resultados[personaje];

document.getElementById ("QuizResult").innerHTML =
"<h2>" + resultado.nombre + "</h2>" +
'<img src="' + resultado.imagen + '"alt="' + resultado.nombre + '">' +
"<p>" + resultado.descripcion + "</p>" +
'<button type="button" class="QuizButton" onclick="reiniciarQuiz()">TAKE THE QUIZ AGAIN</button>';

document.getElementById("QuizResult").hidden = false;

document.getElementById("QuizResult").scrollIntoView ({
    behavior: "smooth"
});
}

function reiniciarQuiz() {
    document.getElementById("QuizForm").reset();

    const resultado = document.getElementById("QuizResult");
    resultado.innerHTML = "";
    resultado.hidden = true;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.calcularResultado = calcularResultado;
window.reiniciarQuiz = reiniciarQuiz;
