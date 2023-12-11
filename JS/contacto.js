function enviarMail() {
Email.send({
    Host: "smtp.elasticemail.com",
    Username: "fuentesvalentina74@gmail.com",
    Password: "5AD01578F2E2EB036EB079AA1C0A8277B4C4",
    To: "",
    From: "fuentesvalentina74@gmail.com",
    Subject: "Consulta",
    Body: "consulta",
}).then((message) => alert(message));
}
