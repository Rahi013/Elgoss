
        document.getElementById("registrationForm").addEventListener("submit", function(event) {
            event.preventDefault();
            
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let mobile = document.getElementById("mobile").value;
            
            document.getElementById("profileName").textContent = name;
            document.getElementById("profileEmail").textContent = email;
            document.getElementById("profileMobile").textContent = mobile;
            
            document.querySelector(".container").style.display = "none";
            document.getElementById("profileContainer").style.display = "block";
        });
        function editDetails() {
            window.location.href = "profiledetails.html"; // Change to actual registration page URL
        }