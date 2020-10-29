$(document).ready(
    function () {
        //store base pizza cost
        var basePizza = 15
        //store topping price
        var priceTopping = 1.25

        //add event handler
        $("#calcButton").click(calcCost)

        function calcCost() {
            //Get number of people and parse to Number
            var numPeople = parseInt($("#numPeople").val())

            //Get Number of toppings and parse to Number
            var numToppings = parseInt($("#numToppings").val())

            //Multiply number of toppings by topping cost
            var totalToppingCost = priceTopping * numToppings

            // add total topping cost to base pizza price
            var totalPizzaCost = totalToppingCost + basePizza

            // Divide total cost by number of people
            var totalPerPerson = totalPizzaCost / numPeople

            //Display Total Late Fee in Dollars on page
            $("#totalOutput").text(totalPerPerson.toFixed(2))

            $(".display").show()
        }
    }
)