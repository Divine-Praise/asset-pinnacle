const firstName = document.querySelector('#fn');
const lastName = document.querySelector('#ln');
const userName = document.querySelector('#un');
const email = document.querySelector('#email');
const number = document.querySelector('#num');
const password = document.querySelector('#pw');
const confirmPassword = document.querySelector('#cw');
const form = document.querySelector('#form')
const button = document.querySelector('#button');

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(firstName.value === "" || lastName.value === "" || userName.value === "" || email.value === "" || number.value === "" || password.value === "" || confirmPassword.value === ""){
        // alert("Please fill in the fields correctly");
    }else{
        const userdetails = {
            FirstName: firstName.value,
            LastName: lastName.value,
            Username: userName.value,
            Email: email.value,
            PhoneNumber: number.value,
            password: password.value,
            confirmPassword: confirmPassword.value
        }
        console.log(userdetails);
    }
})
