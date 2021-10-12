// Create objects
const username = document.getElementById('username');
const output = document.querySelector('.output-field .note');
const outputTwo = document.querySelector('.output-field .note-2');
const btn = document.getElementById('display-btn');

// Time interval for the each typed letter.
const timeFrame = 200;

let restOfText = 'Here you can have all the access to Mobile Devices.';

// let restOfText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellendus modi debitis vitae voluptatem in mollitia hic incidunt accusamus impedit aut quo voluptatibus adipisci culpa pariatur, officiis exercitationem dolorem neque magni quod quidem reiciendis beatae dolorum. Repudiandae beatae voluptatibus, at sunt magni mollitia nulla tenetur asperiores eius ducimus sequi dolore?';

// Hide the border left of outputTwo
outputTwo.style.borderRight = `none`;


// Add click event for the button
btn.addEventListener('click', displayText);


// Add functionality for displaying the text in the browser
function displayText() {

    // Delete the older word/s(if present) in the welcome note.
    output.textContent = 'Welcome to my site ';
    outputTwo.textContent = '';
    
    // Change the username and restOfText into a new String and split it to form an array of each word in it.
    let letters = new String(username.value).split("");
    let lettersTwo = new String(restOfText).split("");



// Test area
    // console.log(new String(username.value));
    // console.log(letters);
    // console.log(new String(restOfText));
    // console.log(lettersTwo);
    console.log(letters.length);
    console.log((letters.length + 1) * 1000);
    // console.log(lettersTwo);



// Form the first sentence
    let count = 0;
    setInterval(() => {

        // Limit the count 
        if ( count < letters.length ) {
            output.textContent += `${letters[count]}`;
            count ++;
        }
    }, (1000));
    




// Form the second sentence
    let newCount = 0;

    if ( letters.length >= 1) {

        setTimeout(() => {
        
            // Clear the previous output
            // output.textContent = '';
            
    
            setInterval(() => {
    
                // Limit the newCount
                if ( newCount < lettersTwo.length ) {
                    outputTwo.textContent += `${lettersTwo[newCount]}`;
                    newCount ++;
                }
            }, timeFrame);


        }, (letters.length + 1) * 1000);


        setTimeout(() => {
            outputTwo.style.borderRight = `2px solid`;
        }, (letters.length + 1.2) * 1000);

    } else {

        alert('Type your name');
        username.focus();
        letters.pop();
        lettersTwo.pop();
        outputTwo.style.borderRight = `none`;
    }


    
    


// Clear username field
    username.value = '';
}
