$(function () {
    // Añadir evento click solo a los botones y no a todo el contenedor de la tarjeta
    $(".toggle-btn").on("click", function () {
        // $(this) se refiere al botón que fue clickeado.
        // .closest('.card') selecciona la tarjeta ('.card') más cercana a ese botón.
        $(this).closest('.card').toggle(); // Oculta o muestra la tarjeta
    });
});
