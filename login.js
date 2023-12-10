function myfun() {
    var a = document.getElementById("passwords").value;
    var b = document.getElementById("passwordss").value;
    if(a==""){
        document.getElementById("messages").innerHTML="*Please Fill Password*";
        return false;
    }

if(a.length < 4 ){
document.getElementById("messages").innerHTML="*Wrong Password*";
    return false;
}
if(a.length > 4 ){
document.getElementById("messages").innerHTML="*Wrong Password*";
    return false;
}

if(a!=b){
document.getElementById("messages").innerHTML="*Wrong Password*";
    return false;
}
}