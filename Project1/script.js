document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting normally
    
    // Get input values
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let dob = document.getElementById("DOB").value;

    // Validate fname and lname are not empty
    if (fname === "" || lname === "") {
        alert("First Name and Last Name are required.");
        return;
    }

    // Validate age
    let birthDate = new Date(dob);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age >= 12) {
        alert("Student's age must be below 12 years.");
        return;
    }

    // If all validations pass, redirect to div4.html
    window.location.href = "nextstep.html";
});
