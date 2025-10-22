// Select the form by ID using jQuery
$("#serviceForm").on("submit", function () {

    event.preventDefault();

    // Test the Save button
    //console.log("Save Button clicked");

    // 1. Get the values from the form using jQUERY
      // Retrieve the values from the form inputs
      const Service = document.getElementById('serviceName').val().trim();
      const Description = document.getElementById('serviceDescription').val().trim();
      const Price = document.getElementById('servicePrice').val();
    
    // Test: Print in the console one single sentence
    // with the 3 values retrieved from the form
     console.log('The values are: ${serviceName}, ${serviceDescription}, ${servicePrice}');
  
    // 2. Validate the values
    if(!serviceName || !serviceDescription){
        alert("All values are required");

        return;
    } else {
        // 3. Save the Service - Assignment 3

        alert("Service has been saved.");

    }
 
    // 4. Clear the form
    $("#serviceForm")[0].reset();


});