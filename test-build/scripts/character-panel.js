var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { render, html } from "lit-html";
var CharacterPanelElement = /** @class */ (function (_super) {
    __extends(CharacterPanelElement, _super);
    function CharacterPanelElement() {
        var _this = _super.call(this) || this;
        _this.shadow = _this.attachShadow({ mode: "open" });
        _this.Name = "";
        _this.Dexterity = 10;
        _this.CurrentHealth = 10;
        _this.MaxHealth = 10;
        _this.Initiative = 2;
        _this.Classes = [{ name: "Commoner", level: 1 }];
        _this.render();
        return _this;
    }
    Object.defineProperty(CharacterPanelElement.prototype, "totalInitiative", {
        get: function () {
            return this.Initiative + this.dexterityModifier;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharacterPanelElement.prototype, "dexterityModifier", {
        get: function () {
            return Math.floor((this.Dexterity - 10) / 2);
        },
        enumerable: true,
        configurable: true
    });
    CharacterPanelElement.prototype.render = function () {
        render(this.template, this.shadow);
    };
    Object.defineProperty(CharacterPanelElement.prototype, "template", {
        get: function () {
            return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t<link rel=\"stylesheet\" href=\"../styles/character-panel.css\" />\n\n\t\t\t<div id=\"wrapper\">\n\t\t\t\t<div class=\"character-icon\">\n\t\t\t\t\t<div class=\"character-health\">\n\t\t\t\t\t\t<div class=\"current-health\">", "</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"character-details\">\n\t\t\t\t\t<div class=\"character-name\">", "</div>\n\t\t\t\t\t<div class=\"character-info\">", " (+", ")</div>\n\t\t\t\t</div>\n\t\t\t</div>"], ["\n\t\t\t<link rel=\"stylesheet\" href=\"../styles/character-panel.css\" />\n\n\t\t\t<div id=\"wrapper\">\n\t\t\t\t<div class=\"character-icon\">\n\t\t\t\t\t<div class=\"character-health\">\n\t\t\t\t\t\t<div class=\"current-health\">", "</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"character-details\">\n\t\t\t\t\t<div class=\"character-name\">", "</div>\n\t\t\t\t\t<div class=\"character-info\">", " (+", ")</div>\n\t\t\t\t</div>\n\t\t\t</div>"])), this.CurrentHealth, this.Name, this.Initiative, this.dexterityModifier);
        },
        enumerable: true,
        configurable: true
    });
    CharacterPanelElement.prototype.setCharacter = function (character) {
        Object.assign(this, character);
        this.render();
    };
    return CharacterPanelElement;
}(HTMLElement));
export { CharacterPanelElement };
customElements.define("character-panel", CharacterPanelElement);
export default CharacterPanelElement;
var templateObject_1;
