const qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://kabuteykabutey.github.io/my-portfolio/",
    width: 128,
    height: 128,
    correctLevel: QRCode.CorrectLevel.H
})