// You and your coworkers frequently order a pizza to share for lunch.
// A basic cheese pizza costs $15.00, plus $1.25 per
// topping. Design an app that will help you and your coworkers equally split the cost of a pizza.

  $(document).ready(function(){
      $("button").on("click",totalCost);
  });

function totalCost()
{
    //define pizza cost
   costPerPizza = 15.00;
   //define cost per topping
   costPerTopping = 1.25;
   //determine number of Pizzas
    let numPizzas = parseFloat($("#pizzas").val());
    console.log("Number of Pizzas: " + numPizzas);
    //determine number of toppings
    let numToppings = parseInt($("#toppings").val());
    console.log("Number of toppings: " + numToppings);
    //determine number of people
    let numPeople = parseInt ($("#numPeople").val());
    console.log("Number of People: " + numPeople);
    //calculate number of pizza at $15.00 each + number of toppings at $1.25 each
    let total = numPizzas * 15.00 + numToppings * 1.25;

    //divide the total cost by number of people eating
    let newTotal = total / numPeople;
    $("#newTotal").text(newTotal.toFixed(2));
    $(".output").show();
}
