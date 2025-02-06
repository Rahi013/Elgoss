document.addEventListener("DOMContentLoaded", function () {
    // Attach event listener after DOM is loaded
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload on form submission

        let username = document.getElementById("first").value;
        let password = document.getElementById("password").value;

        // Fixed username and password
        const fixedUsername = "admin";
        const fixedPassword = "1234";

        if (username === "" || password === "") {
            alert("Please enter both username and password!");
            return;
        }

        // Check if entered credentials match the fixed values
        if (username === fixedUsername && password === fixedPassword) {
            localStorage.setItem("username", username);

            alert("Login successful!");
            window.location.href = "dashboard.html"; 
        } else {
            alert("Invalid username or password!");
        }
    });

    // Check if user is already logged in
    if (localStorage.getItem("username")) {
        alert(`Welcome back, ${localStorage.getItem("username")}!`);
        window.location.href = "dashboard.html"; 
    }
});
