function validate()
{
	var name=document.getElementById('username').value;	
	var password=document.getElementById('password').value;
	var phone=document.getElementById('phone').value;
	var email=document.getElementById('email').value;
	var country=document.getElementById('country').value;


	var namecheck=/[A-Za-z. ]{6,20}$/;
    
    var passwordcheck=/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{10,30}$/;

    var phonecheck=/[789][0-9]{9}$/;

    var emailcheck=/[A-Za-z.]{1,}@[A-Za-z]{2,15}[.][A-Za-z]{3,}$/;


     if(!(namecheck.test(name)))
    {
        alert("UserName must be 6 characters with no numbers");
        document.getElementById('name').value="";
        document.getElementById('name').focus();
        return false;
    }
	
	if(!(passwordcheck.test(pwd)))
    {
      alert("password must have 1 uppercase, 1 special symbol and 1 digit");
      document.getElementById('password').value="";
      document.getElementById('password').focus();
       return false;
    }

    if(!(phonecheck.test(phone)))
    {
      alert("Phone must start with 7,8,9 series with  10 digits");
      document.getElementById('phone').value="";
      document.getElementById('phone').focus();
       return false;
    }

    if(!(emailcheck.test(email)))
    {
      alert("Please insert valid email");
      document.getElementById('email').value="";
      document.getElementById('email').focus();
       return false;
    }

    if(country=="")
    {
      alert("Please select the country option ");
      return false;
    }

	return true;
}