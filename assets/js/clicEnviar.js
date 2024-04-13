/*función que muestra un mensaje de alerta cuando se ha enviado el 
mensaje del formulario de contacto solo cuando se llenen todos los campos*/
$(function () {
    $("form").on("submit", function (event) {
        event.preventDefault(); // Previene el envío del formulario

        if (this.checkValidity()) {
            alert("El mensaje fue enviado correctamente"); //se crea alerta

            // Restablece el formulario a su estado inicial
            this.reset();

            // Aquí podrías colocar tu código para enviar el formulario vía AJAX, por ejemplo
            
        }
    });
});

