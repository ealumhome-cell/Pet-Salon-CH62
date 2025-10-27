// Select the form by ID using jQuery
$("#servicesForm").on("submit", function (event) {
    console.log("Services...");
    
    event.preventDefault();

    // Test the Save button
    //console.log("Save Button clicked");

    // 1. Get the values from the form using jQUERY
      // Retrieve the values from the form inputs
      const service = $('#serviceName').val().trim();
      const description = $('#serviceDescription').val().trim();
      const price = $('#servicePrice').val();

    // Assignment 1 alerts
      if(service == "") {
        console.log("EMPTY..");
        $('#serviceName').addClass("border border-danger border-2")
        $('#descriptionName').addClass("border border-danger border-2")
        $('#priceName').addClass("border border-danger border-2")
        
        
      }

    
    // Test: Print in the console one single sentence
    // with the 3 values retrieved from the form
     console.log(`The values are: ${service}, ${description}, ${price}`);
  
    // 2. Validate the values
    if(!service || !description){
        alert("All values are required");

        return;
    } else {
        // Assignment 3 Save to the local storage Service 
    }

    //localStorage.setItem("userNameKey", username);  
    //localStorage.setItem("NameKey", name); 
    //localStorage.setItem("AgeKey", age); 
    //localStorage.setItem("PasswordKey", password);  
    localStorage.setItem("service", service)
    localStorage.setItem("description", description)
    localStorage.setItem("price", price)
  

    alert("Service has been saved.");
})
 
    // 4. Clear the form
   $("#servicesForm")[0].reset()


    // Add a CSS class for the red border
    //<style>
    //.error-border {
    //   border: 2px solid red;
    //}
    //</style>

// jQuery script
$(document).ready(function() {
  $('#service-registration-form').on('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    let isValid = true;

    // Remove any existing red borders
    $('#service-registration-form input, #service-registration-form textarea').removeClass('error-border');

    // Validate each input field
    $('#service-registration-form input, #service-registration-form textarea').each(function() {
      if ($(this).val().trim() === '') {
        $(this).addClass('error-border');
        isValid = false;
      }
    });

    // If all fields are valid, proceed with registration
    if (isValid) {
      // Get form values
      const serviceName = $('#serviceName').val();
      const serviceDescription = $('#description').val();
      const servicePrice = $('#provider').val();

      // Create a new Service object
      const newService = new Service(serviceName, description, price);
      console.log('New Service Registered:', newService);

      // Clear the form fields
      $('#service-registration-form')[0].reset();

      // Clear all red borders (although they were already removed at the start, this ensures a clean state)
      $('#service-registration-form input, #service-registration-form textarea').removeClass('error-border');
    }
  });
});
