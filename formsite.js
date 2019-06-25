//the premise is that I will enter sums in the fields and end with a total cost after pressing the button
//I need to assign values to the fields, get the value of those fields and calculate them.

//1. log out the current value of each field. DONE
//2. Add a standard tax rate. check for a state with a different tax rate and give it a unique one. DONE
//3. Identify and separate the functions I need. DONE
//      3A. One that runs everything needed when the window is loaded. 
//          Things done when window is loaded: 
//              1. Maybe I'll think of something
//      3B. One that runs everything when the form is submitted.
//          Things doen when button is pressed: 
//              1. evt handler on button || 2. check for a unique shipping state value || 3. take data from fields  || 4. Math on them for total
//4. add the evt handler on the button press. DONE
//5. add code that takes data from all the fields for calculation DONE
//6. give items a value DONE
//7. calculate the data DONE
//8. display the result DONE
$('document').ready(function () {

    var totalEstimate = $('#btn-total');

    var totalNum = $('#total-quantity');


    //JQuery just doesn't do this?
    var stateDropDown = document.getElementById('states');

    var writtenTotal = $('#total-field');


    //evt handler for btn press
    totalEstimate.click(function (event) {

        event.preventDefault();
        //these events need to be wrapped in the btn press function. That's why it works in one area but not the other.

        var numOfShears = parseInt(document.getElementById('shears').value, 10) || 0;

        var numOfMilks = parseInt(document.getElementById('milk').value, 10) || 0;

        var numOfHats = parseInt(document.getElementById('hat').value, 10) || 0;

        var totalQuantity = numOfShears + numOfMilks + numOfHats


        //assigns a var of 1 to tax rate to signify a regular tax rate
        //shippingState is the selected value of the state from the drop down
        //if statement applies the unique tax rate if the state is ma or nh


        var taxRate = 1;
        var shippingState = stateDropDown.value;


        if (shippingState === "ma") {
            taxRate = 1.025;
        } else if (shippingState === "nh") {
            taxRate = 1.05;
        }


        var totalWithoutTax = (15 * numOfShears) + (6 * numOfMilks) + (30 * numOfHats);

        var grandTotal = (totalWithoutTax * taxRate).toFixed(2);


        $(totalNum).html("Your Total Number of Items: " + totalQuantity);
        $(writtenTotal).html("Your Total Cost: " + "$" + grandTotal);


    })

});