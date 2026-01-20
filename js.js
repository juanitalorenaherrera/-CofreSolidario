document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue inmediatamente

    // Validar los checkboxes de calidad
    const checkLavada = document.getElementById('check-lavada').checked;
    const checkEstado = document.getElementById('check-estado').checked;

    if (!checkLavada || !checkEstado) {
        alert("Por favor confirma que la ropa está en buen estado para continuar.");
        return;
    }

    // Capturar datos (Para simular el proceso)
    const nombre = document.getElementById('nombre').value;
    
    // Aquí podrías enviar los datos a un servidor
    // Por ahora, mostraremos un mensaje de éxito
    alert(`¡Gracias ${nombre}! Hemos recibido tu solicitud. Te contactaremos pronto al celular registrado para confirmar la recogida.`);
    
    // Resetear formulario
    this.reset();
});
