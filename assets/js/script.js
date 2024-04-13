
$("#chicago1, #chicago2").dblclick(function () {
    $(this).css(
        {
            color: "red",
        }
    )
})
$("#recipe1, #recipe2, #recipe3, #recipe").on("click", function () {
    if ($("#recipe1, #recipe2, #recipe3, #recipe, #recipe4").is(":visible")) {
        $("#recipe1, #recipe2, #recipe3, #recipe, #recipe4").hide();
        $("#recipe1, #recipe2, #recipe3, #recipe, #recipe4").text("mostrar");
    } else {
        $("#recipe1, #recipe2, #recipe3, #recipe, #recipe4").show();
        $("#recipe1, #recipe2, #recipe3, #recipe, #recipe4").text("ocultar");
    }
})