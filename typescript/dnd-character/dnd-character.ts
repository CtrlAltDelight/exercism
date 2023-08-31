export class DnDCharacter {
	public strength: number;
	public dexterity: number;
	public constitution: number;
	public intelligence: number;
	public wisdom: number;
	public charisma: number;
	public hitpoints: number;

	constructor() {
		this.strength = DnDCharacter.generateAbilityScore();
		this.dexterity = DnDCharacter.generateAbilityScore();
		this.constitution = DnDCharacter.generateAbilityScore();
		this.intelligence = DnDCharacter.generateAbilityScore();
		this.wisdom = DnDCharacter.generateAbilityScore();
		this.charisma = DnDCharacter.generateAbilityScore();
		this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
	}

	public static generateAbilityScore(): number {
		let rolls = [];
		for(let i = 0; i < 4; i++) {
			rolls.push(Math.floor(Math.random() * 6) + 1); // Math.random returns decimal [0, 1)
		}
		rolls.sort();
		return rolls[1] + rolls[2] + rolls[3];
	}

	public static getModifierFor(abilityValue: number): number {
		return Math.floor((abilityValue - 10) / 2);
	}
}
