// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else{
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else{
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

        let currentHealth = this.saxonArmy[randomSaxon].health;
        let currentDamage = this.vikingArmy[randomViking].strength;

        let outcome = this.saxonArmy[randomSaxon].receiveDamage(currentDamage);
        
        if(currentHealth <= currentDamage){
            this.saxonArmy.splice(randomSaxon, 1);
        }

        return outcome;
    }

    saxonAttack(){
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);

        let currentHealth = this.vikingArmy[randomViking].health;
        let currentDamage = this.saxonArmy[randomSaxon].strength;

        let outcome = this.vikingArmy[randomViking].receiveDamage(currentDamage);
        
        if(currentHealth <= currentDamage){
            this.vikingArmy.splice(randomViking, 1);
        }

        return outcome;
    }

    showStatus(){
        if(!this.vikingArmy.length && this.saxonArmy.length){
            return "Saxons have fought for their lives and survived another day...";
        }
        else if(this.vikingArmy.length && !this.saxonArmy.length){
            return "Vikings have won the war of the century!";
        }
        else{
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
