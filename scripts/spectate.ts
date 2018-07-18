import "@webcomponents/webcomponentsjs/webcomponents-loader.js";
import CharacterPanel from "./character-panel.js";

let randomInt = (min: number, max: number) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getInit(c: any) {
	return {
		total: (c.dexterity - 10) / 2 + c.initiative,
		mod: (c.dexterity - 10) / 2
	};
}

fetch("http://localhost:3000/session/MNQ8MPQ4/characters")
	.then(j => j.json())
	.then(characters => {
		characters = characters.sort(
			(a, b) => b.Initiative - a.Initiative || b.Dexterity - a.Dexterity
		);
		console.log(characters);

		let characterContainer = document.querySelector("#characters");

		characters.forEach(c => {
			let characterPanel = new CharacterPanel();
			characterPanel.setCharacter(c);
			characterContainer.appendChild(characterPanel);
		});
	});
