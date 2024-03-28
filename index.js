function calculateAge() {
    // Get user input
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value - 1; // Months are 0-indexed
    const day = document.getElementById("day").value;
  
    // Get today's date
    const today = new Date();
  
    // Create a date object for the user's birthday
    const birthDate = new Date(year, month, day);
  
    // Calculate the difference in milliseconds
    const diffInMs = today.getTime() - birthDate.getTime();
  
    // Convert milliseconds to years (rounded down)
    const age = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));
  
    // Display the age
    const ageDisplay = document.getElementById("age-display");
    ageDisplay.textContent = `Your age is: ${age}`;
  }
  