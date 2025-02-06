// function validateForm() {
//     debugger
   
//     let firstname = document.forms["registrationForm"]["firstname"].value;
//     localStorage.setItem("firstname", firstname);
//     document.getElementById("firstname").value=localStorage.getItem("firstname");
//     debugger
//     let middlename = document.forms["registrationForm"]["middlename"].value;
//     let lastname = document.forms["registrationForm"]["lastname"].value;
//     let gender = document.forms["registrationForm"]["gender"];
//     let phone = document.forms["registrationForm"]["phone"].value;
//     let email = document.forms["registrationForm"]["email"].value;

    
//     if (firstname === "") {
//         alert("Firstname is required.");
//         return false;
//     }

    
//     if (lastname === "") {
//         alert("Lastname is required.");
//         return false;
//     }

    
//     let genderSelected = false;
//     for (var i = 0; i < gender.length; i++) {
//         if (gender[i].checked) {
//             genderSelected = true;
//             break;
//         }
//     }
//     if (!genderSelected) {
//         alert("Gender is required.");
//         return false;
//     }

    
//     if (phone === "") {
//         alert("Phone number is required.");
//         return false;
//     }

   
//     let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailPattern.test(email)) {
//         alert("Please enter a valid email.");
//         return false;
//     }

    
//     alert("Form submitted successfully!");
//     return true;
// }
// localStorage.setItem("lastname", "gunja");
// // documennt.getElementById("demo").innerHTML = localStorage.getItem(lastname);


function validateForm(){

    let firstname=document.getElementById("f_name").value;
    let middlename=document.getElementById("m_name").value;
    let lastname=document.getElementById("l_name").value;
    window.localStorage.setItem('f_name',firstname);
    window.localStorage.setItem('m_name',middlename);
    window.localStorage.setItem('l_name',lastname);
    // window.localStorage.getItem("f_name")=firstname;
   let phone =  document.getElementById("phone").value;
     window.localStorage.setItem('Phone',phone);
     let email = document.getElementById("email").value;
     window.localStorage.setItem("email",email);
     alert("HELLO")

 }
