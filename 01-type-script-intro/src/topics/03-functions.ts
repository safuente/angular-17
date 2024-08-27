function addNumbers(a: number, b: number) {
    return a + b
}

const result = addNumbers(2, 3)
console.log(result)


const addNumberArrow = (a: number, b: number) => {
    return `${a + b}`
}

const resultArrow = addNumberArrow(2,3);
console.log(resultArrow);

function multiply (a: number, b?: number, base: number = 2) {
    return a * base
}

const resultMultiply = multiply(5);

console.log(resultMultiply);


interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}


const healCharacter = ( character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Aragorn',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`)
    }

}

healCharacter(strider, 50);

strider.showHp()



export {};