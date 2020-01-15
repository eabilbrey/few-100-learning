describe('declaring variables', () => {
    it('an example', () => {
        const name = 'Bob';
        expect(name).toBe('Bob');
    });
    it('what happened above?', () => {
        const something = 'idk';
        expect(something).toBe('idk');

    });
    it('declaring a variable with let', () => {
        let age: number | string;

        age = 50;

        age = 51;

        age = 'old';

        let x: any;

        x = 'dog';
        x = 34;
        x = [];

        function add(a: any, b: any) {
            return a + b;
        }
    });

    it('initializing a variable defines (infers) the type', () => {

        let name = 'Bob';

        name = 'Steve';

        name = 'Kara';

        // name = 1138; // Error! It is inferred to be a string because we create it that way.
    });

});

describe('a bit about strings', () => {
    it('can be delimited with single or double', () => {

        const name = 'Bob';

        // tslint:disable-next-line: quotemark
        expect(name).toBe('Bob');

        const story = 'She said "Hello! How is your day going?" on the way out the door.';

        const author = 'Flannery O\'Connor';

        // tslint:disable-next-line: quotemark
        const author2 = "Flannery O'Connor";

    });
    it('string literals - interpreted strings', () => {
        const name = `Bob`;
        expect(name).toBe('Bob');

        const story = `Chapter 1

        It was a dark and stormy night.

        The End.`;

        const age = 27;

        const message = 'The name is ' + name + ' and the age is ' + age + '.';
        const message2 = `The name is ${name} and the age is ${age}.`;
        expect(message).toBe(message2);

        const newElement = `<div>
        <h2>${name} is ${age}</h2>
        </div>`;
    });

    it('const- be careful', () => {

        const x = 12;

        // x =14;

        const favoriteNumbers = [2, 4, 9, 27];

        favoriteNumbers[2] = 10;
        console.log(favoriteNumbers);

        interface Movie {
            title: string;
            yearReleased?: number; // ? after property makes it optional
        }

        const movie: Movie = {
            title: 'The Rise of Skywalker',
            yearReleased: 2020
        };

        const otherMovie: Movie = {
            title: 'The Big Lebowski',
            yearReleased: 1998
        };

        movie.yearReleased = 2019;
        console.log(movie.yearReleased);
    });
    describe('various types', () => {
        it('number literals', () => {
            const bigNumber = 123_456_789.23;

            const color = 0xFF;
            const permissions = 0o33;
            const binary = 0b0101010;

        });

    });
});

describe('array destructuring and tuples', () => {

    it('array destructuring', () => {
        const friends = ['David', 'Sean', 'Amy'];

        // const first = friends[0];
        // const last = friends[2];
        const [first, , last] = friends;

        expect(first).toBe('David');
        expect(last).toBe('Amy');
    });

    it('using destructuring with rest', () => {
        const toDos = ['Clean garage', 'Fix tire', 'Mop floors'];

        const [next, ...others] = toDos; // the rest operator.

        expect(next).toBe('Clean garage');
        expect(others).toEqual(['Fix tire', 'Mop floors']);

    });

    it('tuples- basic example', () => {

        let stuff: [boolean, number];

        stuff = [true, 140];
    });

    it('type aliases', () => {

        type ThingWithLettersAndJunk = string;

        let name: ThingWithLettersAndJunk;

        type ArtistNameAndAge = [string, string, number];
        let warren: ArtistNameAndAge;

        warren = ['Warren', 'Ellis', 53];

        name = 'Joey';

    });

    it('an oop example', () => {

        interface NameResult { fullName: string; length: number; }
        function formatName(first: string, last: string): NameResult {
            const fullName = `${last}, ${first}`;
            return {
                fullName,
                length: fullName.length
            };
        }

        // const answer = formatName('Han', 'Solo');
        // expect(answer.fullName).toBe('Solo, Han');
        // expect(answer.length).toBe(9);

        const { fullName, length: john } = formatName('Han', 'Solo');
        expect(fullName).toBe('Solo, Han');
        expect(john).toBe(9);
    });

    it('a truth table', () => {
        expect(true).toBeTruthy();
        expect(false).toBeFalsy();
        expect('').toBeFalsy();
        expect(' ').toBeTruthy();
        expect(undefined).toBeFalsy();
        expect(null).toBeFalsy();
        expect(0).toBeFalsy();
        expect(-1).toBeTruthy();
        // this means if you use one of these as a predicate in an if statement, you will get either true or false.
        // e.g.
        if ('tacos') {
            // it is true!
        }
    });

    it('a tuple example', () => {

        type NameResult = [string, number];

        function formatName(first: string, last: string): NameResult {
            const fn = `${last}, ${first}`;
            return [fn, fn.length];
        }

        const [fullName, length] = formatName('Luke', 'Skywalker');
        expect(fullName).toBe('Skywalker, Luke');
        expect(length).toBe(15);
    });
});

describe('enums and union constants', () => {
    enum seatType { window, aisle, middle }

    function getSeatForTicket(ticketNumber: number): seatType {
        if (ticketNumber % 2 === 0) {
            return seatType.window;
        } else {
            return seatType.aisle;
        }
    }

    it('using enums', () => {

        const getMySeat = getSeatForTicket(108);
        let cost = 0;

        switch (getMySeat) {
            case seatType.window: {
                cost = 100;
                break;
            }

            case seatType.aisle: {
                cost = 150;
                break;
            }

            case seatType.middle: {
                cost = 75;
                break;
            }
            default: {
                // something else
            }
        }
        expect(cost).toBe(100);
    });

    it('with union constants', () => {
        type seatType = 'aisle' | 'window' | 'middle';

        const mySeat: seatType = 'window';
    });

    it('type assertions', () => {
        let x: any;
        x = 'Tacos';

        // expect(x.howLong).toBe(5);

        const y = x as string;

        expect(y.length).toBe(5);

        // tslint:disable-next-line: no-angle-bracket-type-assertion
        const z = <string>x;

        // tslint:disable-next-line: no-angle-bracket-type-assertion
        expect((<string>x).length).toBe(5);

    });
});
