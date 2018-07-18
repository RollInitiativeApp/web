import "@webcomponents/webcomponentsjs/webcomponents-loader.js";
import CharacterPanel from "./scripts/character-panel.js";
var randomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function getInit(c) {
    return {
        total: (c.dexterity - 10) / 2 + c.initiative,
        mod: (c.dexterity - 10) / 2
    };
}
fetch("http://localhost:3000/session/MNQ8MPQ4/characters")
    .then(function (j) { return j.json(); })
    .then(function (characters) {
    characters = characters.sort(function (a, b) { return b.Initiative - a.Initiative || b.Dexterity - a.Dexterity; });
    console.log(characters);
    var characterContainer = document.querySelector("#characters");
    characters.forEach(function (c) {
        var characterPanel = new CharacterPanel();
        characterPanel.setCharacter(c);
        characterContainer.appendChild(characterPanel);
    });
});
