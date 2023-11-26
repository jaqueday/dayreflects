// function to get age of user and check if over 18
function enterAuction() {
    var age = prompt("Please enter your age:"); // check age user
    if (age != null && age != "") {
        if (age < 18) {
            alert("You are not old enough to enter this auction.");
        }
        else {
            alert("You can proceed with the auction.");
            gotoAction(); // function 
        }
    } else {
        alert("Please enter your age.");
    }
}

// function called if over 18 to open minigame page
function gotoAction() {
    window.location.href = "minigame.html";
}

// minigame script
// variable with total paid on auction
let totalPaid = 0;

function startNewAuction() {
    start(); // Resets the auction
    document.getElementById('bidResult').innerText = ''; // Resets the bid result
    document.getElementById('totalPaid').innerText = "Total Paid: €"+ totalPaid;
}

function start() {
    var images = [
        '../media/art/macro02.jpg',
        '../media/art/fall02.jpg',
        '../media/art/macro03.jpg',
        '../media/art/fall03.jpg',
        '../media/art/fall01.jpg',
        '../media/art/macro01.jpg'
    ]; //images to be used as "art"

    // Get a random index using Math.random() and select the image
    var randomIndex = Math.floor(Math.random() * images.length);
    var selectedImage = images[randomIndex];

    // Add a timestamp to the image URL to prevent caching
    var uniqueImageSrc = selectedImage + "?time=" + new Date().getTime();

    // Display the image
    document.getElementById("imageContainer").innerHTML = 
        `<img src="${selectedImage}" class="img-fluid border rounded shadow-lg" alt="Random Image" style="width: 300px; height: auto; border: 50px;">`;

    alert("Place yout bet and press the bid button.");
    // enable the buttons
    document.getElementById("userBid").disabled = false;
    document.getElementById("bidButton").disabled = false;

    // Hide the initial start button
    document.getElementById("startbutton").style.display = "none";
}

function bid() {
    const userBid = parseInt(document.getElementById('userBid').value);
    const pcBid = Math.floor(Math.random() * 100) + 1; // randomize computer bid value
    const value = Math.floor(Math.random() * 50) + 1; // randomize actual value 
    let resultText = '';

    if (userBid === pcBid) {
        resultText = 'Your bid is equal to the other bid, you lost the auction.';
    } else if (userBid < pcBid) {
        resultText = 'Your bid is too low, you lost the auction.';
    } else {
        resultText = 'Congratulations! This piece of art is yours to take.' + '\n The value of the art estimate at ' + value + '€.';
        totalPaid += userBid; // add bid to total paid 
        if (userBid > value) { //check value worth
            resultText += '\n You overpaid for this piece of art.';
        }
        else if (userBid < value) {
            resultText += '\n You got a good deal for this piece of art.';
        }
    }

    document.getElementById('bidResult').innerText = resultText;

    // disable the buttons
    document.getElementById("userBid").disabled = true;
    document.getElementById("bidButton").disabled = true;
    // enable the buttons
    document.getElementById("newAuctionButton").disabled = false;
    return totalPaid
}

// once user finish give them total paid
function end(){
    alert("Thank you for playing the auction game. Your total paid is: €" + totalPaid);
    window.location.href = "../index.html";
}