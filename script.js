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
    const url = "https://mockend.com/phudinhtruongk18/poets-typewriter/poem";
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

const extractPoem = (body) => {
    const title = body.match(/<title>(.*)<\/title>/);
    const content = body.match(/<content>((.|\n)*)<\/content>/)[1];
    var lines = content.split("\n");
    return {title, lines};
}

const author = document.getElementsByClassName("author")[0];
const title = document.getElementsByClassName("title")[0];
const verses = document.getElementsByClassName("verses")[0];
author.innerHTML = '<i class="fa-solid fa-scroll fa-2xl fa-fade"></i>'

getPoems()
    .then(poems => selectPoems(poems))
    .then(poem => {

        poemEx = extractPoem(poem.body);
        
        const lines = addBreaks(poemEx.lines);

        author.innerHTML = poem.author;
        title.innerHTML = poemEx.title;
        typing(lines, verses);

    })
    .catch(err => console.log(err.message))
