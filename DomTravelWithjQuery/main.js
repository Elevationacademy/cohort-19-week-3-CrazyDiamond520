$(".generator").on("click", function(){
    console.log($(this).closest("div"))
    console.log($(this).closest(".computer").data().id)
    console.log($(this).closest(".computer").find(".BUS").text())
})

$(".validator").on("click", function(){
    console.log($(this).closest(".computer").find(".generator").text())
    console.log($(this).closest(".computer").find(".MB").text())
    console.log($(this).closest(".computer").find(".QR").text())
})

