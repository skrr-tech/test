function catGenerator() {
    const d = document;

    // Cat Generator HTML
    const catGContainer = d.createElement(`div`)
    catGContainer.setAttribute(`class`, `container`);

    const title = d.createElement(`h1`);
    title.textContent = `Cat Generator`

    const button = d.createElement(`button`);
    button.setAttribute(`class`, `generate-btn`);
    button.textContent = `Generate Cat`;

    let imgContainer = d.createElement(`div`);
    imgContainer.setAttribute(`class`, `flex-container`);

    catGContainer.appendChild(title);
    catGContainer.appendChild(button);
    catGContainer.appendChild(imgContainer);
    document.body.appendChild(catGContainer);

    // Cat Generator JS
    let generateBtn = document.querySelector('.generate-btn');
    let flexContainer = document.querySelector('.flex-container');
    generateBtn.onclick = function () {
        let img = document.createElement('img');
        img.setAttribute('src', "https://media1.giphy.com/media/f8ywYgttpGzzVPH5AO/source.gif");
        flexContainer.appendChild(img);
    }
}

