const url = "https://ats2cr.deta.dev/";

var author = document.getElementById("author");
var title = document.getElementById("title");
var content = document.getElementById("content");
var notify = document.getElementById("noti");

function addPoem() {

    const poem = {
        author: author.value,
        title: title.value,
        content: content.value
    }

    fetch(url, {
        method: "POST",
        body: JSON.stringify(poem),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(
            notify.innerText = "Poem added successfully!",
            author.value = "",
            title.value = "",
            content.value = "",
            setTimeout(() => {
                notify.innerText = "";
            }, 2000)
        )
        .catch(err => console.log(err.message))
}
