// JavaScript
// Set up the configuration for QuaggaJS
const config = {
  inputStream: {
    name: "Live",
    type: "LiveStream",
    target: document.querySelector("#qrScanner"),
    constraints: {
      width: 480,
      height: 320,
      facingMode: "environment",
    },
  },
  decoder: {
    readers: ["qrcode_reader"], // Use qrcode_reader decoder for scanning QR codes
  },
};

// Start the scanner
function startScanner() {
  Quagga.init(config, function (err) {
    if (err) {
      console.error("Error initializing Quagga:", err);
      return;
    }
    Quagga.start();
  });
}

// Listen for a successful scan
Quagga.onDetected(function (result) {
  const qrData = result.codeResult.code;
  document.getElementById("qrDataInput").value = qrData;

  // Stop the scanner after a successful scan
  Quagga.stop();
});

// Listen for errors
Quagga.onProcessed(function (result) {
  if (result.error) {
    console.error("Error processing frame:", result.error);
  }
});

// Trigger the scanning process when the button is clicked
document.getElementById("startScanButton").addEventListener("click", startScanner);
