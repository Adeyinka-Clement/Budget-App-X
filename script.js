function get() {
  // whole.style.display = "none"
}
// itemPrice - money.value

function close() {
  whole.style.display = "Block";
  whole.style.position = "fixed";
}

// document.addEventListener("DOMContentLoaded", function() {
//     var modalButton = document.getElementById('modalButton');
//     modalButton.addEventListener('click', function() {
//         if (nameI.value === "" || money.value === "") {
//             alert("input the .....")
//         }
//         else {
//             contain.style.display = "block"
//         output.innerHTML = "Dear " + nameI.value + ","
//         var newMoney = money.value - itemPrice.value

//         amountD.innerHTML = "aval bal = " + "$" + newMoney
//         whole.style.display = "none"
//         }

//     });
//   });


var newMoney;

function nextJsT() {
    if (nameI.value === "" || money.value === "") {
        // alert("input the .....");
    alert("input your values into the spaces provided");

    } else {
        contain.style.display = "block";
        var newMoney1 = document.getElementById("money").value;
        newMoney = newMoney1
    output.innerHTML = "Dear " + nameI.value + ",";
    console.log(newMoney);

    amountD.innerHTML = "aval bal = " + "$" + newMoney;
    whole.style.display = "none";
  }
}

function add() {
    
    amountD.innerHTML = ""
  if (itemName.value === "" || itemPrice.value === "" || Number(itemPrice.value) > Number(newMoney) || Number(amountD.value) < 0 ){
    alert("can you please coperate");
    cart.style.display = "none"
    display.style.display = "none"
    all.style.display = "none"

    

  } else {
    display.style.display = "flex"
    cart.style.display = "block"
    var money2 = Number(newMoney - itemPrice.value) ;
    newMoney = "$" + money2 
    console.log(money2);
    amountD.innerHTML += "aval bal = " + newMoney;
    display.innerHTML += `
    <h4 class = "col-6">${itemName.value}</h4>
    <h4 class = "col-6">$${itemPrice.value}</h4>

    
    `
  }
  
  

  itemPrice.value = "";
  itemName.value = "";
}


