var email=document.getElementById('email').value.trim();
var pass=document.getElementById('passward').value.trim();
function validation(){
   
    if(email.length==""){
        alert("Your email is empty")
    }
    if(pass.length=="")
    {
        alert("Your passward is empty")
    }
   if(pass.length>0){

    if (pass.length < 8) {
        alert("Password must be at least 8 characters");
        
      }
   }
   
   
}


