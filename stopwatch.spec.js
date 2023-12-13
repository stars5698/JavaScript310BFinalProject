// Donna Quach, JavaScript 310B, Autumn 2023
// Final Project - Stopwatch 

// Create unit tests with Jasmine to test the following cases:
// Minute is a number 
// Second is a number between 0 and 59 seconds 



describe("Test Case 1 for the Stopwatch", () => {
    it("should determine whether the input in the minute textbox is an actual number", () => {
        const minuteExample = 60;
        const minuteExample2 = 'a';
        const result1 = checkMinute(minuteExample);
        const result2 = checkMinute(minuteExample2);

        expect(result1).toEqual(true);
        expect(result2).toEqual(false);
    }); 
});

describe("Test Case 2 for the Stopwatch", () => {
    it("should determine whether the input in the seconds textbox is between 0 and 59", () => {
        const secondExample = 32;
        const secondExample2 = 61; 

        const result3 = checkSecond(secondExample);
        const result4 = checkSecond(secondExample2);

        expect(result3).toEqual(true);
        expect(result4).toEqual(false);
    }); 

});
