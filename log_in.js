function log_in_precheck(){
    return false;
}
function log_in_button_on_click(){
    if(log_in_precheck()){
    }
    else{
        document.getElementById("wrong-syntax").innerHTML = "Wrong Syntax!";
    }
}