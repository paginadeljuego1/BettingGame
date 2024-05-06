document.addEventListener("DOMContentLoaded", function() {
    // Obtener el contenedor donde se agregará el formulario
    var formContainer = document.getElementById('form-container');

    // Crear el formulario
    var form = document.createElement('form');

    // Crear un campo de entrada para el número de jugador
    var playerNumberLabel = document.createElement('label');
    playerNumberLabel.textContent = 'Número de jugador:';
    var playerNumberInput = document.createElement('input');
    playerNumberInput.type = 'text';
    playerNumberInput.id = 'player-number';
    playerNumberLabel.appendChild(playerNumberInput);
    form.appendChild(playerNumberLabel);

    // Crear un campo de entrada para la cantidad de dinero a apostar
    var betAmountLabel = document.createElement('label');
    betAmountLabel.textContent = 'Cantidad de dinero a apostar:';
    var betAmountInput = document.createElement('input');
    betAmountInput.type = 'number';
    betAmountInput.type = '#000000';
    betAmountInput.id = 'bet-amount';
    betAmountLabel.appendChild(betAmountInput);
    form.appendChild(betAmountLabel);

    // Crear un botón de envío
    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Enviar';
    form.appendChild(submitButton);

    // Agregar el formulario al contenedor
    formContainer.appendChild(form);

    // Agregar evento de envío al formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener los valores del formulario
        var playerNumber = playerNumberInput.value;
        var betAmount = betAmountInput.value;

        // Validar los valores del formulario (opcional)

        // Hacer algo con los valores del formulario (por ejemplo, mostrarlos en un mensaje)
        var result = document.getElementById('result');
        result.textContent = 'Número de jugador: ' + playerNumber + ', Cantidad de dinero a apostar: ' + betAmount;
    });
});
