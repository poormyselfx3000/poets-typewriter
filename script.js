const url = "https://2q1vx3.deta.dev/";

const addBreaks = (lines) => {
    let poem = "";
    for (let i = 0; i < lines.length; i++) {
        poem += lines[i] + "<br>"
    }
    return poem;
}

let index = 0;
const typing = (poem, verses) => {    
    setTimeout(() => {
        if (index === poem.length) return;
        if (poem[index] === '<') index += 2;
        verses.innerHTML = poem.slice(0, index);
        index++;
        typing(poem, verses);
    }, 50);     
}

const getPoem = async () => {
    const response = await fetch(url);
    if (response.status !== 200) {
        throw new Error('Oops... Something went wrong :(');
    }
    const poem = await response.json();
    return poem;
}

const author = document.getElementsByClassName("author")[0];
const title = document.getElementsByClassName("title")[0];
const verses = document.getElementsByClassName("verses")[0];
author.innerHTML = '<i class="fa-solid fa-scroll fa-2xl fa-fade"></i>'

getPoem()
    .then(poem => {

        var lines = poem.content.split("\n");
        lines = addBreaks(lines);

        author.innerHTML = poem.author;
        title.innerHTML = poem.title;
        typing(lines, verses);

    })
    .catch(err => console.log(err.message))
