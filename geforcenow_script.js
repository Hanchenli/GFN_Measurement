// This script fetch real bandwidth, used bandwidth, frame lost per second, packet lost per second, and ping in ms every second and outputs to developer console.
//Notice there could be problem in the initial scrapping. You may need to cut off the some initial portions of data. 

function fetchAndLog() {
    const numberSpan = document.querySelectorAll('span.standard-base');
    if (numberSpan.length > 0) {
        console.log(parseInt(numberSpan[0].textContent));
        console.log(parseInt(numberSpan[1].textContent));
        console.log(parseInt(numberSpan[2].textContent));
        console.log(parseInt(numberSpan[3].textContent));
    }
}

const intervalId = setInterval(fetchAndLog, 1000);

//
let logData = ''; // Create a variable to store the log data

function fetchAndLog() {
    const numberSpan = document.querySelectorAll('span.standard-base');
    if (numberSpan.length > 0) {
        logData += `${parseInt(numberSpan[0].textContent)}\n`;
        logData += `${parseInt(numberSpan[1].textContent)}\n`;
        logData += `${parseInt(numberSpan[2].textContent)}\n`;
        logData += `${parseInt(numberSpan[3].textContent)}\n`;
    }

    const numberSpan2 = document.querySelectorAll('span.compact-text-spacing2');
    if (numberSpan2.length > 0) {
        logData += `${parseInt(numberSpan2[2].textContent)}\n`;
    }
}

const intervalId = setInterval(fetchAndLog, 1000);

// When you want to retrieve the logs, simply access the logData variable
// For example, you can stop the interval and print the logs to the console like this:

setTimeout(() => {
    clearInterval(intervalId); // Stop logging
    console.log(logData); // Print the logs to the console
    // You can use logData for any other purpose you need
}, 10000); //thie is time in ms