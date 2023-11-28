var clickCount = 0;

function handleButtonClick() {
    clickCount++;

    var output = document.getElementById('output');
    var counter = document.getElementById('counter');

    output.innerHTML = 'Button clicked <span id="counter">' + clickCount + '</span> times.';
    
    if (clickCount % 2 === 0) {
        output.style.color = 'blue'; 
    } else {
        output.style.color = 'red'; 
    }

    console.log('Inner text of output:', output.innerText);
}
