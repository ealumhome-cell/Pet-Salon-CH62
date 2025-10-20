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
}

// A Pet class is defined with a constructor method that initializes an object with name, species, and age properties.
class Pet {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }

}

// Three new Pet objects are created using the `new` keyword.
const pet1 = new Pet('Violet', 11, "Male", 'American Bully', "Grooming");
const pet2 = new Pet('Ruby', 11, "Male", 'American Bully', "Grooming")
const pet3 = new Pet('Jewel', 11, "Male", 'American Bully', "Grooming")

// Access and display the properties of the pets.
console.log(pet1); // Pet { name: ' Violet', species: 'Dog', age: 5 }
console.log(pet2); // Pet { name: 'Ruby', species: 'Cat', age: 3 }
console.log(pet3); // Pet { name: 'Jewel', species: 'Turtle', age: 12 }

// Assume this is your array of pets
let petSalon = {
    pets: []
};

// Renamed from displayPet() to displayRow()
function displayRow(pet) {
    console.log("Test")
    const tableBody = document.getElementById("pet-table-body");
    const row = document.createElement("tr");

    row.innerHTML += `
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td>
    `;

    tableBody.appendChild(row);
}

// Example usage assuming you have a way to populate petSalon.pets
// For example, if you have a form submission, you would call this function.
// Here is a sample loop for demonstration:
function displayAllPets() {
    console.log("display all pets")
    // Clear existing table rows before re-displaying
    const tableBody = document.getElementById("pet-table-body");
    tableBody.innerHTML = "";

    // Loop through all pets in the salon and call displayRow for each one
    for(index=0; index<pets.length; index++){
        displayRow(pets[index])
    }
    
    /*for (let pet of petSalon.pets) {
        displayRow(pet);
    }*/
}

// Call the function to display pets when the page loads
window.onload = displayAllPets;

// Example of adding a new pet and updating the display
function addPet(newPet) {
    petSalon.pets.push(newPet);
    displayAllPets(); // Re-display all pets to include the new one
}

// Example of how you would get pet info and add it
// from a form (assuming you have inputs with corresponding IDs)
document.getElementById("your-register-button-id").addEventListener("click", function() {
    let newPet = {
        name: document.getElementById("pet-name").value,
        age: document.getElementById("pet-age").value,
        gender: document.getElementById("pet-gender").value,
        type: document.getElementById("pet-type").value,
        breed: document.getElementById("pet-breed").value,
        service: document.getElementById("pet-service").value,
    };
    addPet(newPet);
});