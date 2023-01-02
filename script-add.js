const url = "https://ats2cr.deta.dev/";

function addPoem() {
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const poem = {
        author: author,
        title: title,
        content: content
    }

    fetch(url, {
        method: "POST",
        body: JSON.stringify(poem),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err.message))
}
