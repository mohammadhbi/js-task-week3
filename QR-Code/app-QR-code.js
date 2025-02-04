function generateQR() {
    const text = document.getElementById("qrText").value;
    if (text.trim() === "") {
        alert("Please enter text to generate a QR code.");
        return;
    }
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=200x200`;
    document.getElementById("qr-code").innerHTML = `<img src="${qrUrl}" alt="QR Code">`;
}
  
