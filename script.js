function sendMail(){
    let parms = {
        email : document.getElementById("user_email").value,
        message : document.getElementById("additionalText").value,
         }

        emailjs.send("service_ih8imph","template_sl5sd0h", parms).then(alert("Mail został wysłany!"))



}