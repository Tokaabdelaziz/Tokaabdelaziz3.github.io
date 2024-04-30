document.getElementById("helpingform").addEventListener("submit", function (event) {
    event.preventDefault();
    const phonenumber = document.getElementById("phone number").value;
    const email = document.getElementById("email").value;
    window.location.replace("anotherpage2.html");
});
