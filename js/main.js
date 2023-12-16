import { getAllRicos, deleteRicos, createRicos, updateRicos } from "./service.js";
window.onload = () => {
    loadGames();
};
const loadRicos = () => {
    const dataContainer = document.getElementById('data-container');
    getAllRicos().then(resp => {
        const gamesElement = document.createElement('div');
        resp.forEach(ricos => {
            const tagDiv =
                document.createElement('div');
            tagDiv.innerHTML =
                `
                <div class="elemento">
                    <img class="cardimg" src="${ricos.img}" alt="${jogo.title}"<hr>
                    <h5 class="cardtitle">${ricos.name}</h5>
                    <hr>
                    <p class="cardtext">R$ ${ricos.fortune}</p>                    
                </div>
                `;
            dataContainer.appendChild(tagDiv);
        });

    })
}
document.getElementById('btnCreate').addEventListener('click', () => {
    const ricos = {
        name: "The legend of Zelda",
        img: "https://zelda.nintendo.com/tears-of-the-kingdom/_images/game/logo-shadow.png",
        fortune: 100
    };
    createRicos(ricos);
});
document.getElementById('btnDelete').addEventListener('click', () => {
    const ricos = {
        name: "The legend of Zelda",
        img: "https://zelda.nintendo.com/tears-of-the-kingdom/_images/game/logo-shadow.png",
        fortune: 100,
        id: 3
    };
    deleteRicos(ricos);
});

document.getElementById('btnUpdate').addEventListener('click', () => {
    const ricos = {
        name: "The legend of Zelda 2",
        img: "https://zelda.nintendo.com/tears-of-the-kingdom/_images/game/logo-shadow.png",
        fortune: 200,
        id: 3
    };
    updateRicos(ricos);
});