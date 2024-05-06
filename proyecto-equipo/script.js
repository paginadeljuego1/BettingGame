document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores del formulario
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    // Validación básica: verificar que todos los campos estén completos
    if (name.trim() === "" || age.trim() === "") {
        document.getElementById("message").innerText = "Por favor, completa todos los campos.";
        return; // Detener la ejecución si algún campo está vacío
    }

    // Mostrar mensaje de éxito
    document.getElementById("message").innerText = "Registro exitoso. ¡BIENVENID@ A BETTING GAME, " + name + "!";

    // Redirigir a otra página después de un breve retraso (por ejemplo, 2 segundos)
    setTimeout(function() {
        window.location.href = "file:///E:/proyecto-equipo/index3.html"; // Cambiar "otra_pagina.html" por la URL de la página deseada
    }, 2000); // 2000 milisegundos = 2 segundos
});
