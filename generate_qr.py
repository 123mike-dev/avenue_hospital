import qrcode

# Hospital M-Pesa PayBill
paybill = "953244"

# Data to encode (static PayBill QR)
data = f"MPESA:PayBill:{paybill}"

# Generate QR
img = qrcode.make(data)
img.save("hospitalPaybillQR.png")

print("✅ QR code generated: hospitalPaybillQR.png")
