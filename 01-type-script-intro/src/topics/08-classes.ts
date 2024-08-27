import { Person } from './08-classes';

export class Person {
    // public name: string; // ? asigna undefined
    // private address: string; // al compilarse a javascript se puede acceder

    // Lo anterior se puede hacer directamente en el cconstructor

    constructor(
        public firstName: string,
        public lastName: string, 
        private address: string = 'No address'
    ) {}
    // Método corto de definir una clase directamente usando el constructor
}
/* 
/* export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName, 'New york')
    }
} */

 // Ejemplo composición frente a herencia (mejor composición frente a herencia)
export class Hero  {


    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        
    }
}
const tony = new Person('Tony', 'Stark', 'New York')
const ironman = new Hero('Ironman', 45,'Rober Downey Jr', tony)

console.log(ironman)