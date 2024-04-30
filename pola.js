
let username = document.getElementById('username');
let email = document.getElementById('email');
let date = document.getElementById('date');
let submit = document.getElementById('submit');

document.forms[0].onsubmit = function(e) {
    let usernamevalid = false;
    let emailvalid = false;
    let datevalid = false;
    var letters = /^[A-Za-z]+$/;
    if(username.value !== "" && username.value.length <= 12 && username.value.match(letters)){
        usernamevalid = true;
        username.style.borderBottomColor = "green";
    } else {
        alert("Username is not valid. You must input letters only and maximum is 12 letters.");
        username.style.borderBottomColor = "red";
    }

    if(email.value !== "" && email.value.match(/^[A-Za-z0-9._-]+@[A-Za-z]+\.[a-z]{2,4}$/)){
        emailvalid = true;
    } else {
        alert("Email is not valid.");
        email.style.borderBottomColor = "red";
    }

    function validdate(date){
        var partsofdate = date.split("-");
        var day = parseInt(partsofdate[0]);
        var month = parseInt(partsofdate[1]);
        var year = parseInt(partsofdate[2]);
        var inputDate = new Date(year, month - 1, day);
        if(year <= 2023 && year > 2026 ) {
            return false;
        } else {
            return inputDate.getDate() === day && inputDate.getMonth() === month - 1 && inputDate.getFullYear() === year;
        }
    }
    if(validdate = true){
        datevalid = true;
    }
    else{
        datevalid = false;
        alert('Please input a year greater than 2023 and less than 2026')
    }

  

    if(!usernamevalid || !emailvalid || !datevalid) {
        e.preventDefault();
    }
}

document.links[0].onmouseenter = function(event){
    event.preventDefault();
    alert("You are on the home page.");
};
window.localStorage.setItem("userame" , username)
window.localStorage.setItem("email" , email)
window.localStorage.setItem("date" , date)
