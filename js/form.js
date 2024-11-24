// 2922AD0322B7EB9B2736CB3D0D908DEAAF526CE5ADF2A8BE7966DE64F62968533BB928A59C3F64D3E4AD7B56D432697E


const form = document.querySelector(".form");
function sendEmail(){
   
    const fullName = document.getElementById("name");
    const emailAddress = document.getElementById("email");
    const phoneNumber = document.getElementById("phone");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    const messageBody="Name" + fullName + "</br> Phone" +phoneNumber + "</br> Email" + emailAddress + "</br> Subject" + subject+ "</br> Message" + message; 
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "solinsomurad@gmail.com",
        Password : "1AAC5E6187E8BAFA180E92B3C10CD92EC08A",
        To : 'solinsomurad@gmail.com',
        From : "solinsomurad@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => alert(message)
    );
}

// API Anahtarınızı buraya yapıştırın.
// const API_KEY = "1AAC5E6187E8BAFA180E92B3C10CD92EC08A";


// function sendEmail(event) {
//     event.preventDefault();
//     const bodyMessage = `Full Name : ${fullName.value}<br>
//      Email Address: ${emailAddress.value}<br> 
//      Phone Number : ${phoneNumber.value}<br> 
//      Subject : ${subject.value}<br> 
//      Message : ${message.value}<br>`;

//     fetch("https://api.elasticemail.com/v2/email/send", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             apikey: API_KEY,
//             to: "solinsomurad@gmail.com",  // E-posta alıcısı
//             from: "solinnmurad@gmail.com",     // Gönderen (formdaki e-posta)
//             subject: subject.value,
//             bodyHtml: bodyMessage,
//         })
//     })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 Swal.fire({
//                     title: "Success!",
//                     text: "Message sent successfully!",
//                     icon: "success"
//                 });
//             } else {
//                 Swal.fire({
//                     title: "Error!",
//                     text: `Message sending failed: ${data.error}`,
//                     icon: "error"
//                 });
//             }
//         })
//         .catch(error => {
//             Swal.fire({
//                 title: "Error!",
//                 text: `An error occurred: ${error.message}`,
//                 icon: "error"
//             });
//         });
// }

form.addEventListener("submit", sendEmail);