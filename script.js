//store base pizza cost
var basePizza = 15
//store topping price
var priceTopping = 1.25

function costPerson() {
    //Get number of people
    var numPeople = prompt("How many People")

    // Convert to number data type (no decimals)
    numPeople = parseInt(numPeople)

    //Get Number of toppings
    var numToppings = prompt("How many Toppings")

    // Convert to number data type (no decimals)
    numToppings = parseInt(numToppings)

    //Multiply number of toppings by topping cost
    var totalToppingCost = priceTopping * numToppings

    // add total topping cost to base pizza price
    var totalPizzaCost = totalToppingCost + basePizza

    // Divide total cost by number of people
    var totalPerPerson = totalPizzaCost / numPeople

    //Display cost per person in Dollars
    alert(`Total Cost Per Person $${totalPerPerson.toFixed(2)}`)
}