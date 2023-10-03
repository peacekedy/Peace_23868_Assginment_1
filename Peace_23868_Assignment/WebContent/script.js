
function signUpValidation() {
	var phonev = document.getElementById("phoneval").value;
	var emailv = document.getElementById("emailval").value;
	var password = document.getElementById("passwordval").value;
	var cpassword = document.getElementById("cpasswordval").value;

  
	if (!phonev || !emailv || !password || !cpassword) {
	  alert("Please fill in all fields.");
	  return;
	}
  
	if (password !== cpassword) {
	  alert("Passwords do not match.");
	  return;
	}
	if (!emailRegex.test(emailv)) {
		alert("Please enter a valid email address.");
		return;
	  }
  

	console.log("Name: " + phonev);
	console.log("Email: " + emailv);
	console.log("Password: " + password);
  }
  
  document.getElementById("signUp").addEventListener("click", function () {
	document.getElementById("container").classList.add("right-panel-active");
  });
  
  document.getElementById("signIn").addEventListener("click", function () {
	document.getElementById("container").classList.remove("right-panel-active");
  });
  