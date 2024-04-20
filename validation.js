
    function validate(){
    var email = $('#email').val();
    
    if (email.length == 0) {
      document.getElementById("error").style.setProperty('display', 'block');
      document.getElementById("email").style.setProperty('border-color', 'red');
    }
    
    if (!email.includes('@')) {
      document.getElementById("error").style["display"]="block";
      document.getElementById("email").style.setProperty('border-color', 'red');
    }    
  
    function validateEmail(sumbittedemail) {
      var re = /\S+@\S+\.\S+/;
      return re.test(submittedemail);
    }
    
    if(!validateEmail(email)){
      document.getElementById("error").style["display"]="block";
      document.getElementById("email").style.setProperty('border-color', 'red');
    }else { //submit form here
      document.getElementById("error").style.setProperty('display', 'none');
      document.getElementById("email").style.setProperty('border-color', 'none');
      $('#emailForm').submit();
    }    
    }

   
