import { Employee, Retiree, givePromotion } from '../hr';
// import * as fromHr from '../hr'; //Must use as keyword in this technique
// then must add fromHr before imported things ex: fromHr.Employee(); fromHr.givePromotion();

describe('using classes', () => {

    describe('importing them and stuff', () => {
        it('should behave...', () => {
            const emp1 = new Employee();
            const ret1 = new Retiree();

            givePromotion(emp1);
        });
    });

    describe('creating them', () => {
        it('you can make them just like anything else and constructors', () => {
            class Car {

                private _primaryDriver: string;
                constructor(public make: string, public model: string, private startingMileage: number) {/* this is usually empty */ }

                get mileage() { return this.startingMileage; }

                get primaryDriver() { return this._primaryDriver; }
                set primaryDriver(newValue: string) { this._primaryDriver = newValue.toUpperCase(); }
            }

            const myCar = new Car('Chevy', 'Bolt', 19_000);


            expect(myCar.make).toBe('Chevy');

            expect(myCar.mileage).toBe(19_000);

            myCar.primaryDriver = 'Jeff';
            expect(myCar.primaryDriver).toBe('JEFF');
        });

    });
});
