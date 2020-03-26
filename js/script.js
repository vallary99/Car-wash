function validation(){
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