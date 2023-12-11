function get(){
    // whole.style.display = "none"
   
}

function close(){
    whole.style.display = "Block"
    whole.style.position = "fixed"
   
    
}

document.addEventListener("DOMContentLoaded", function() {
    var modalButton = document.getElementById('modalButton');
    modalButton.addEventListener('click', function() {
        if (nameI.value === "" || money.value === "") {
            alert("input the .....")
        }
        else {
            contain.style.display = "block"
        output.innerHTML = "Dear " + nameI.value + ","
        amountD.innerHTML = "aval bal = " + "$" + money.value
        whole.style.display = "none"
        }
        
    
     
    });
  });
  function add() {
    
    if (itemName.value === "" || itemPrice.value == "");{
        alert("input the .....")
        

    }
  }

