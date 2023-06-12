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
    readers: ["ean_reader"],
  },
};

// Start the scanner
Quagga.init(config, function (err) {
  if (err) {
    console.error(err);
    return;
  }
  Quagga.start();
});

// Listen for a successful scan
Quagga.onDetected(function (result) {
  const qrData = result.codeResult.code;
  document.getElementById("qrDataInput").value = qrData;

  // Stop the scanner after a successful scan
  Quagga.stop();
});
