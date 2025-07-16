document.addEventListener("DOMContentLoaded", function () {
    const materias = document.querySelectorAll(".materia");

    // Cargar estado guardado
    materias.forEach((materia, index) => {
        if (localStorage.getItem(`materia-${index}`) === "completada") {
            materia.classList.add("completada");
        }

        materia.addEventListener("click", () => {
            materia.classList.toggle("completada");

            if (materia.classList.contains("completada")) {
                localStorage.setItem(`materia-${index}`, "completada");
            } else {
                localStorage.removeItem(`materia-${index}`);
            }
        });
    });
});
