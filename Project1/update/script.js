document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    // Get input values
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const dob = document.getElementById("DOB").value;

    // Validate fname and lname are not empty
    if (!fname || !lname) {
        alert("First Name and Last Name are required.");
        return;
    }

    // Validate age
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Check if the age is valid
    if (age < 0 || isNaN(age)) {
        alert("Please enter a valid Date of Birth.");
        return;
    }

    if (age >= 12) {
        alert("Student's age must be below 12 years.");
        return;
    }

    // If all validations pass, redirect to the next page
    window.location.href = "nextstep.html";
});
