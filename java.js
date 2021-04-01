/*
You and your coworkers frequently order a pizza to share for lunch. A basic cheese pizza costs $15.00, plus $1.25 per
topping. Design an app that will help you and your coworkers equally split the cost of a pizza.
 */
$(document).ready(function() {
    $("button").on("click", pizzaTotalCost);
});
function pizzaTotalCost() {
    //Define the pizza cost
    costPerPizza = 15.00;

    //Define topping cost
    costPerTopping = 1.25;

    //Determine number of pizzas
    let numPizzas = parseFloat($("#pizzas").val());
    console.log("Number of pizzas: " + numPizzas);
    //Determine number of toppings
    let numToppings = parseFloat($("#toppings").val());
    console.log("Number of topping: " + numToppings);
    //Determine number of people
    let numCoworkers = parseFloat($("#numCoworkers").val());
    console.log("Number of Coworkers: " + numCoworkers);

    //total = number of pizzas (15.00) + number of toppings (1.25)
    let total = numPizzas * 15.00 + numToppings * 1.25;



    //How many co-workers are eating pizza? And Divide total cost by number of coworkers

    let newTotal = total / numCoworkers;

    $("#newTotal").text(newTotal.toFixed(2));

    $(".output").show();

}








