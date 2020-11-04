//exrecise 1+2

const newname = $('<li>'+ name  + "<li>")
$('#button').on('click', function(){
    const name = $("#humanname").val()
    console.log(name)
    $(".mylist").append(`<li class="children">${name}<li>`)
})

$(".children").on("click", function(){
    // console.log($(this))
    $(this).remove()
})

//exrecise 4


