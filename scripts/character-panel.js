import { render, html } from "lit-html";
export class CharacterPanelElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.Name = "";
        this.Dexterity = 10;
        this.CurrentHealth = 10;
        this.MaxHealth = 10;
        this.Initiative = 2;
        this.Classes = [{ name: "Commoner", level: 1 }];
        this.render();
    }
    get totalInitiative() {
        return this.Initiative + this.dexterityModifier;
    }
    get dexterityModifier() {
        return Math.floor((this.Dexterity - 10) / 2);
    }
    render() {
        render(this.template, this.shadow);
    }
    get template() {
        return html `
			<link rel="stylesheet" href="../styles/character-panel.css" />

			<div id="wrapper">
				<div class="character-icon">
					<div class="character-health">
						<div class="current-health">${this.CurrentHealth}</div>
						
					</div>
				</div>

				<div class="character-details">
					<div class="character-name">${this.Name}</div>
					<div class="character-info">${this.Initiative} (+${this.dexterityModifier})</div>
				</div>
			</div>`;
    }
    setCharacter(character) {
        Object.assign(this, character);
        this.render();
    }
}
customElements.define("character-panel", CharacterPanelElement);
export default CharacterPanelElement;
