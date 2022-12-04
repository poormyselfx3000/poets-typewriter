// const addBreaks = (lines) => {
//     let poem = "";
//     for (let i = 0; i < lines.length; i++) {
//         poem += lines[i] + "<br>"
//     }
//     return poem;
// }

let index = 0;
const typing = (poem, verses) => {    
    setTimeout(() => {
        if (index === poem.length) return;
        if (poem[index] === '<') index += 2;
        verses.innerHTML = poem.slice(0, index);
        index++;
        typing(poem, verses);
    }, 90);     
}

// getPoems()
//     .then(titles => selectTitle(titles))
//     .then(poem => {
//         const title = document.getElementsByClassName("title")[0];
//         title.innerHTML = poem.title;
        
//         author.innerHTML = poem.author;
//         const verses = document.getElementsByClassName("verses")[0];
//         const lines = addBreaks(poem.lines);
//         typing(lines, verses);
//     })
//     .catch(err => console.log(err.message))

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
    const content = body.match(/<content>(.*)<\/content>/);
    console.log("title");
    console.log(title);
    console.log("content");
    console.log(content);
    return {title, content};
}

const author = document.getElementsByClassName("author")[0];
author.innerHTML = '<i class="fa-solid fa-scroll fa-2xl fa-fade"></i>'


getPoems()
    .then(poems => selectPoems(poems))
    .then(poem => {
        author.innerHTML = poem.author;

        poemEx = extractPoem(poem.body);
        console.log("poemEx.title");
        console.log(poemEx.title);
        console.log("poemEx.content");
        console.log(poemEx.content);
        // const title = document.getElementsByClassName("title")[0];
        // title.innerHTML = poemEx.title;
        
        // const verses = document.getElementsByClassName("verses")[0];


        // typing(lines, verses);
    })
    .catch(err => console.log(err.message))

