const readline = require('readline'); 

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        reader.question("Enter a number: ",answer => {
            console.log(`the number you entered is ${answer}`);
            let answerInteger = parseInt(answer); 
            sum = sum + answerInteger;
            console.log(`partial sum: ${sum}`);
            addNumbers(sum,numsLeft-1,completionCallback);
        });
    } else {
        completionCallback(sum); 
        reader.close();
    }

}


addNumbers(0,3, banana => console.log(`Total Sum: ${banana}`)); 