let captchachecked = false;
function submitHandler(event){
    debugger;
if(captchachecked)
{
let outputdate=document.querySelector(".outputdate");
let inputdate=document.querySelector(".inputdate");
console.log("inputdate", inputdate.value);
let formattedDate=new Date(inputdate.value).toLocaleDateString();
outputdate.value=formattedDate;
}
else{
    alert("Please check reCaptcha to submit form");
    event.preventDefault();
 }
}
function timestamp() { 
    var response = document.getElementById("g-recaptcha-response");
     if (response == null || response.value.trim() == "") 
     {
     var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
     elems["ts"] = JSON.stringify(new Date().getTime());
     document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
     } 
     
     } 
     setInterval(timestamp, 500); 
function captcha_success() {
captchachecked = true;
}
    