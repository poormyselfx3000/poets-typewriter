// get response from https://allpoetry.com/Caythuearam#t_main 


const getPoems = async () => {
    const url = "https://allpoetry.com/Caythuearam#t_main";
    const response = await fetch(url);    
    if (response.status !== 200) {
        throw new Error('Oops... Something went wrong :(');
    }
    const poems = await response.json();
    if (poems.titles === undefined) {
        throw new Error('Oops... Something went wrong :(');
    }
    return poems;
}

const poems = getPoems();