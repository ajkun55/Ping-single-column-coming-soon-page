
    function validate(){
    var email = $('#email').val();
    
    if (email.length == 0) {
      document.getElementById("error").style.setProperty('display', 'block');
    }
    
    if (!email.includes('@')) {
      document.getElementById("error").style["display"]="block";
    }    
    var emailHost = email.substr((-1)*(email.length - email.indexOf('@') - 1));
    
    var allowedDomains = ["gmail.com","hotmail.com","yahoo.com"];
    
    var inAllowed = false;
    for(i=0;i<allowedDomains.length;i++){
      if (allowedDomains[i] == emailHost) {
        inAllowed = true;
      }
    }
    
    if (!inAllowed) {
      document.getElementById("error").style["display"]="block";
    }else { //submit form here
      document.getElementById("error").style.setProperty('display', 'none');
      $('#emailForm').submit();
    }    
    }

   
