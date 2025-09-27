const QRCode = require("qrcode");

// Hospital M-Pesa PayBill
const paybill = "953244";

// Data to encode (static PayBill QR)
const data = `MPESA:PayBill:${paybill}`;

(async () => {
  await QRCode.toFile("hospitalPaybillQR.png", data);
  console.log("✅ QR code generated: hospitalPaybillQR.png");
})();
