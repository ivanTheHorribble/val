var solPrice = 53.6;

document.getElementById("cardNumber").addEventListener("input", function (evt) {

if(document.getElementById("cardNumber").value >=1000000000){


}


   //gets the sol amount entered by user
  var want = document.getElementById("cardNumber").value;


  //set the sol amount on credit card
  document.getElementById("amount").innerHTML = want + "SOL";
  // the amount you get on the credit card
  document.getElementById("uget").innerHTML = want * solPrice * 1000;

  //the amount you get on the input
  document.getElementById("cardName").value = want * solPrice * 1000;
});
