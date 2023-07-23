export class Person {

    constructor ( public firstName:string, public lastName:string ,public address:string = 'No address' ) { }

}





export class Hero{

    constructor (
            public alterEgo: string,
            public age: number,
            public realName: string = 'No address',
            public person: Person
    ){        
        // this.person = new Person( realName )
    }

}


const tony = new Person('Tony','Stark', 'Las indias')

const superman = new Hero('superman', 34, 'clark', tony)


console.log( superman, tony )