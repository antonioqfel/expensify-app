const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

// Always pass a string and a arrow function as arguments
test('Should add two number', () => {
    const result = add(3, 4);

    // if (result !== 7) {
    //     throw new Error(`You added 4 and 3. The result was ${result}. Expect 7 `);
    // }
    // expect is another global variable
    expect(result).toBe(7);
});

test('Should generate greeting from name', () => {
   const result = generateGreeting('Mike');
    expect(result).toBe('Hello Mike!')
});

test('Should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!')
});