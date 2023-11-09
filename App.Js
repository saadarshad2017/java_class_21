 // Get the link element by its ID
    var myLink = document.getElementById('myLink');

    // Add a click event listener
    myLink.addEventListener('click', function() {
      // Show an alert when the link is clicked
      alert('Welcome To SMIT');
    });


    // 2nd

     // Function to show alert message
     function showMessage(message) {
        alert(message);
      }

    //   3rd

     // Function to delete the corresponding row
     function deleteRow(button) {
        var row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
      }


    //   4rth

    // Function to change the image source
    function changeImage(newSrc) {
        var imgElement = document.getElementById('myImage');
        imgElement.src = newSrc;
      }

    //   5th

    // Initial counter value
    var counterValue = 0;

    // Function to increase the counter
    function increaseCounter() {
      counterValue++;
      updateCounter();
    }

    // Function to decrease the counter
    function decreaseCounter() {
      counterValue--;
      updateCounter();
    }

    // Function to update the counter value in the browser
    function updateCounter() {
      var counterElement = document.getElementById('counter');
      counterElement.textContent = counterValue;
    }