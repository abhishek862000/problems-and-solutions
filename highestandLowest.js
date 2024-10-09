const highAndLow = numbers => {
    let high = numbers[0]; // Initialize 'high' with the first element
    let low = numbers[0]; // Initialize 'low' with the first element

    for (let index = 1; index < numbers.length; index++) {
        const currentNumber = numbers[index];

        if (currentNumber > high) {
            high = currentNumber; // Update 'high' if the current number is greater
        } else if (currentNumber < low) {
            low = currentNumber; // Update 'low' if the current number is smaller
        }
    }

    console.log(`The highest number is: ${high}`);
    console.log(`The lowest number is: ${low}`);
};
  
highAndLow(a=[2,14,121, 3 ,4,444])