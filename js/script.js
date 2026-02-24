// Get elements
const form = document.getElementById("userForm");
const greeting = document.getElementById("greeting");
const ageInMonthsDiv = document.getElementById("ageInMonths");
const adultMessage = document.getElementById("adultMessage");
const quotesDiv = document.getElementById("quotes");

// Function to calculate age in months
function calculateMonths(age) {
    return age * 12;
}

// Function to display motivational quotes
function displayQuotes() {
    quotesDiv.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        quotesDiv.innerHTML += "<p> Keep pushing forward and never give up!</p>";
    }
}

// Check if user data exists in localStorage
window.onload = function () {
    const savedName = localStorage.getItem("name");
    const savedAge = localStorage.getItem("age");

    if (savedName && savedAge) {
        showUserData(savedName, savedAge);
    }
};

// Handle form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    // Store in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);

    showUserData(name, age);
});

// Display all personalized data
function showUserData(name, age) {
    greeting.innerHTML = `Hello, ${name}! Welcome to our website.`;
    ageInMonthsDiv.innerHTML = `You are ${calculateMonths(age)} months old.`;

    // Adult check
    if (age >= 18) {
        adultMessage.innerHTML = "You can access adult content.";
    } else {
        adultMessage.innerHTML = " You are too young for adult content.";
    }

    displayQuotes();
}