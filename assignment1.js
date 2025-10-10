// Pet Registration: Initialize the pets array with 3 pets using object literals.
const pets = [
    {
        name: "Violet",
        age: 11,
        gender: "Female",
        service: "Grooming",
        breed: "American Bully"
    },
    {
        name: "Ruby",
        age: 2,
        gender: "Female",
        service: "Nail Trimming",
        breed: "French Bulldog"
    },
    {
        name: "Jewel",
        age: 2,
        gender: "Male",
        service: "Bath and Brush",
        breed: "French Bulldog"
    }
];

// Function to calculate and display the total number of registered pets.
function displayPetCount() {
    // Use getElementById to access the HTML element with the id 'petCount'.
    const countElement = document.getElementById("petCount");
    // Update the innerHTML of the element with the length of the pets array.
    countElement.innerHTML = pets.length;
}

// Function to display the names of all registered pets.
function displayPetNames() {
    // Use getElementById to get the unordered list element.
    const petListElement = document.getElementById("petList");
    
    // Clear any existing content in the list.
    petListElement.innerHTML = "";

    // Use a for loop to iterate through the pets array.
    for (let i = 0; i < pets.length; i++) {
        // Create a new list item (<li>) for each pet.
        const petListItem = document.createElement("li");
        // Set the text content of the list item to the pet's name.
        petListItem.textContent = pets[i].name;
        // Append the new list item to the unordered list.
        petListElement.appendChild(petListItem);
    }
}

// Call the functions when the page loads to display the initial data.
window.onload = function() {
    displayPetCount();
    displayPetNames();
};