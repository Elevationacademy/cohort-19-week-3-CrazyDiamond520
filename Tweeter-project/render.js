

const Renderer = function(){
    const renderPosts = function(posts){
        $("#posts").empty()
        for(let i in posts){
            let id = posts[i].id
            // console.log(posts[i].text)
            $("#posts").append(`<div class="post" data-postid="${id}"> ${posts[i].text} <div>`)
            for(let j in posts[i].comments){
                let commentid = posts[i].comments.id
                let comment = posts[i].comments[j].text
                // console.log(comment)
                $("#posts").append(`<div class="comments" data-commentid="${commentid}"> ${comment} <div>`)
            }
        }


    }
    return {renderPosts}
}

