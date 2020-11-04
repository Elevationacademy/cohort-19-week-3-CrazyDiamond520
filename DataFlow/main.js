//Data Flow

const posts = [
    {name: "shlomo", text: "hello shlomo"},
    {name: "shimon", text: "hello shimon"}
]

const render = function(){
    for (let i of posts){
        let text = i.text
        console.log(text)
        $("body").append(`<div class="text">${text}<div>`)
    }
}

$("button").on("click", function(){
    let name = $("#name").val()
    let text = $("#text").val()
    console.log(name)
    console.log(text)
})

render()