window.onload = function() {
    let name = localStorage.getItem("customerName");
    let email = localStorage.getItem("customerEmail");

    if (name) document.getElementById("customerName").textContent = name;
    if (email) document.getElementById("customerEmail").textContent = email;
};
