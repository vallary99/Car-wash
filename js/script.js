function createAccount(){
    var password = document.getElementById("password").value;
    var confirm= document.getElementById("confirm").value;

    if(password !== confirm)
    {
        alert("Confirm password does not match password");
    }

    else{
        return true;
    }
}

function bookAppointment(){
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    confirm("Your appointment has been scheduled for"+" "+date+" "+time+".");
}