function get(){
    // whole.style.display = "none"
   
}

function close(){
    whole.style.display = "Block"
    whole.style.position = "fixed"
   
    
}

function next(){
    inputs.style.display = "block"

    const input = document.getElementById('inputField');
  
    const inputValue = inputField.value;
    
    const outputElement = document.getElementById('output');
    
    outputElement.textContent = 'Input value: ' + inputValue;
}

