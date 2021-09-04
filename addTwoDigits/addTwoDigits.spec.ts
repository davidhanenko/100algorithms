import { addTwoDigits } from './addTwoDigits';

xdescribe(addTwoDigits.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 29;

        // act
        const response = addTwoDigits(data);

        // assert
        expect(response).toBe(11);
    });
});
 // return String(n).split('').reduce((acc, el) => acc + +el, 0)