function sendMail() {
    var params = {
        name: document.getElementById("form-name").value,
        email: document.getElementById("form-email").value,
        subject: document.getElementById("form-subject").value,
        message: document.getElementById("form-message").value,
    };

    const serviceID = "service_0wnb2n5";
    const templateID = "template_cnbpang";

    emailjs.send(serviceID, templateID, params)
        .then((ress) => {
            document.getElementById("form-name").value = "";
            document.getElementById("form-email").value = "";
            document.getElementById("form-subject").value = "";
            document.getElementById("form-message").value = "";
            console.log(ress);
            alert("Your message sent successfully");
        })
        .catch((err) => {
            console.log("Error: ", err);
            alert("Failed to send message.");
        });
        
}
//Chrome is moving towards a new experience that allows users to choose to browse without third-party cookies.