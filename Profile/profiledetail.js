        document.addEventListener("DOMContentLoaded", function() {
            let name = localStorage.getItem("name") || "N/A";
            let email = localStorage.getItem("email") || "N/A";
            let mobile = localStorage.getItem("mobile") || "N/A";
            
            document.getElementById("profileName").textContent = name;
            document.getElementById("profileEmail").textContent = email;
            document.getElementById("profileMobile").textContent = mobile;
            
        });

        