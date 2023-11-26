// Select all elements with the class card
var hoverOver = document.querySelectorAll('.hover-over');

// Function to add shadow
function addShadow() {
    this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
}

// Function to remove shadow
function removeShadow() {
    this.style.boxShadow = 'none';
}

// Apply event listeners to each element
hoverOver.forEach(function(box) {
    box.addEventListener('mouseover', addShadow);
    box.addEventListener('mouseout', removeShadow);
});


// Form validation and message
function formMessage() {
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userType = document.getElementById("userType").value;
    var message = document.getElementById("messageArea").value;

    if (userName === "") {
        alert("Please enter your name.");
        return false;
    } else if (userEmail === "") {
        alert("Please enter your email.");
        return false;
    } else if (userType === "") {
        alert("Please select a user type.");
        return false;
    } else if (message === "") {
        alert("Please enter your message.");
        return false;
    }

    alert("Form submitted successfully!");
    alert (userName+ " Thank you for your details. We will be in touch via "+ userEmail + " shortly.")
    return true;
}

