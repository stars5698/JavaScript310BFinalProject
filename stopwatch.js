// Donna Quach, JavaScript 310B, Autumn 2023
// Final Project - Stopwatch 

class Time {
    constructor(mins, secs) {
        this.mins = mins; 
        this.secs = secs; 

        // static method
        Time.getUserTime = function(mins, secs) {
            return console.log(`You have selected ${mins} minute(s) and ${secs} second(s).`);
        };
        

        // Event listener
        // const minuteVal = document.getElementById('minute').value;
        //     const secondVal = document.getElementById('second').value;

        //     if(minuteVal != null && secondVal != null)
        //     {
        //         
        //     }
        //     else
        //     {
        //         return console.log('Please enter in minute(s) and second(s)');
        //     }
    }
}

const myTime = new Time(6, 2);
Time.getUserTime(6, 2);


// Access minute element
const minuteElement = document.getElementById('minute'); 

// Access second element
const secondElement = document.getElementById('second'); 

// Access form element
const formElement = document.getElementById('connect-form'); 

// Access time element
const timeElement = document.getElementById('time');

// Access start button element
const startButton = document.getElementById('startBtn');

// Access stop button element
const stopButton = document.getElementById('stopBtn');

let isEntryValid = false; 

// Check if user entered enough digits for minute(s) and/or second(s)
const checkLength = (userInput, mindigits) => {
    if(userInput.value.trim().length >= mindigits) {
        userInput.parentElement.classList.remove('invalid');
        return true;
    }
    else {
        userInput.parentElement.classList.add('invalid');
        return false; 
    }
}

const checkMinute = (minuteField) => {
    const minuteConstraint = /^\d+$/; 

    // Check if input for minute(s) meets validation requirements 
    if(minuteConstraint.test(minuteField.value.trim())) {
        minuteField.parentElement.classList.remove('invalid');
        console.log(`Minutes: ${minuteField.value.trim()}`);
    }
    else
    {
        minuteField.parentElement.classList.add('invalid');
        console.log(`Minutes: ${minuteField.value.trim()}`);
    }

}; 

const checkSecond = (secondField) => {
    const secondConstraint = /^\d{0,2}$/; 
    // const secondConstraint = /^\d+$/;
    // Check if input for second(s) meets validation requirements 
    if(secondConstraint.test(secondField.value.trim()) && (secondField.value.trim() >= 0 && secondField.value.trim() < 60))
    {
        secondField.parentElement.classList.remove('invalid');
        console.log(`Seconds: ${secondField.value.trim()}`);
    }
    else
    {
        secondField.parentElement.classList.add('invalid');
        console.log(`Seconds: ${secondField.value.trim()}`);
    }
}; 

formElement.addEventListener('submit', (e) => {
    e.preventDefault(); 

    if(checkLength(minuteElement, 1) && checkLength(secondElement, 1) && checkMinute(minuteElement)) 
    {
        isEntryValid = true; 

    }
    else {
        isEntryValid = false; 
        e.preventDefault(); 
    }
}); 


// If input is valid, convert minute to seconds and display on page every second 
startButton.addEventListener('click', (e) => 
{
    let minElementValue = minuteElement.value.trim();
    let minElementSec = minElementValue * 60; 
    let secondCount = 0; 

    let countTime = setInterval(function() 
    {
        if(minElementSec > 0)
        {
            minElementSec--; 
            secondCount++;
            timeElement.innerHTML = `${secondCount} (s)`; 

            // Stop stopwatch before clock is finished after clicking Stop button
            stopButton.addEventListener('click', (e) => 
            {
                clearInterval(countTime);
            });
        }
        else
        {
            clearInterval(countTime); 
        }
    }, 1000);

}); 


