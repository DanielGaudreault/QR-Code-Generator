// Include QRious library (CDN or local)
// <script src="https://cdn.jsdelivr.net/npm/qrious@4.0.2/dist/qrious.min.js"></script>

const input = document.getElementById("qr-input");
const generateBtn = document.getElementById("generate-btn");
const qrCodeDiv = document.getElementById("qr-code");
const downloadBtn = document.getElementById("download-btn");

generateBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return alert("Please enter something!");
  
  // Generate QR code
  const qr = new QRious({
    element: qrCodeDiv,
    value: text,
    size: 200,
  });
  
  // Enable download
  downloadBtn.onclick = () => {
    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = qr.canvas.toDataURL("image/png");
    link.click();
  };
});
