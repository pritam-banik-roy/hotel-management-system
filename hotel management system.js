function generateInvoice() {
    var name = document.getElementById("name").value;
    var checkin = document.getElementById("checkin").value;
    var checkout = document.getElementById("checkout").value;
    var roomtype = document.getElementById("roomtype").value;
    var rate = 0;
    
    switch(roomtype) {
        case "single":
            rate = 100;
            break;
        case "double":
            rate = 150;
            break;
        // Add more cases for other room types if needed
        default:
            rate = 0;
            break;
    }
    
    // Calculate the number of nights based on the check-in and check-out dates
    var checkinDate = new Date(checkin);
    var checkoutDate = new Date(checkout);
    var diffInTime = checkoutDate.getTime() - checkinDate.getTime();
    var diffInDays = diffInTime / (1000 * 3600 * 24);
    
    // Calculate the total cost of the stay based on the rate and number of nights
    var totalCost = rate * diffInDays;
    
    // Display the invoice details
    document.getElementById("invoice").innerHTML = "Name: " + name + "<br>" +
        "Room type: " + roomtype + "<br>" +
        "Check-in: " + checkin + "<br>" +
        "Check-out: " + checkout + "<br>" +
        "Rate per night: $" + rate + "<br>" +
        "Number of nights: " + diffInDays + "<br>" +
        "Total cost: $" + totalCost.toFixed(2);
}
