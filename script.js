const url = "https://api.jsonstorage.net/v1/json/a7966e7c-3e7b-4b61-ae9e-4de65b74494e/7ad8ab28-752e-4f02-8fc1-929ad97a1f6f";

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

const getPoems = async () => {
    const response = await fetch(url);    
    if (response.status !== 200) {
        throw new Error('Oops... Something went wrong :(');
    }
    const poems = await response.json();
    return poems;
}

const selectPoems = async (poems) => {
    const ran = Math.floor(Math.random() * poems.length);
    return poems[ran];
}

const author = document.getElementsByClassName("author")[0];
const title = document.getElementsByClassName("title")[0];
const verses = document.getElementsByClassName("verses")[0];
author.innerHTML = '<i class="fa-solid fa-scroll fa-2xl fa-fade"></i>'

getPoems()
    .then(poems => selectPoems(poems))
    .then(poem => {

        var lines = poem.content.split("\n");
        lines = addBreaks(lines);

        author.innerHTML = poem.author;
        title.innerHTML = poem.title;
        typing(lines, verses);

    })
    .catch(err => console.log(err.message))
