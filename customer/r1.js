document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    if (name.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    }

    if (phonenumber.length < 6) {
        document.getElementById("numberError").textContent = "Phone Number must be at least 10 letter characters";
        isValid = false;
    }

    if (email.trim() === "" || !email.includes("@")) {
        document.getElementById("emailError").textContent = "Valid email is required";
        isValid = false;
    }
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    if (isValid) {
        localStorage.setItem("customerName", name);
        localStorage.setItem("customerEmail", email);
        window.location.href = "../detail/customer_detail.html";
    }
});
