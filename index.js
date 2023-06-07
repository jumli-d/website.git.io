var user = document.getElementById("user_name");
var password = document.getElementById("user_password");
function ok() {
  var j = user.value
  switch (j) {
    case "jumli": {
      alert("you can't use my name")
    } break;
    case "": {
      alert("it seems emty please fill the below input")
    }
    default:
      var let = 1

  }
  var p = password.value

  if (p == 123456) {
    alert("your password is too simple")
  }
  if (p < 99999)
    alert("password my contain aleast 6 degits ")
  if (p > 99999)
    var go = 1;
  if (go == let) {
    window.location.href = "test.html"

  }


}

function insta() {
  window.location.href = "https://www.instagram.com/jumli_d/";
}
function gmail() {
  window.location.href = "https://mail.google.com/mail/u/0/#sent?compose=CllgCHrgltTpNFdNJGzjplQRCBddXQThGBzfBhZwpvbSGnfxBmsDSxHJcrfGlSHcvqKpwclnCLB";
}
/*function showpassword(){
  if (password === "user_password") {
    password.type = "text";
    
    
  }
  else{
    password = "user_password";
  }
}
function showpass(){
   show.style.backgroundImage ="url('hide.png')"
}
function popup(){
    
}
popup.classname*/
