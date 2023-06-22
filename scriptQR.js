  // JavaScript
  const scanner = new Instascan.Scanner({ video: document.getElementById('qrScanner') });

  // Listen for a successful scan
  scanner.addListener('scan', function (content) {
    document.getElementById('qrDataInput').value = content;
    scanner.stop();
  });

  // Trigger the scanning process when the button is clicked
  document.getElementById('startScanButton').addEventListener('click', function () {
    Instascan.Camera.getCameras()
      .then(function (cameras) {
        if (cameras.length > 0) {
          scanner.start(cameras[0]);
        } else {
          console.error('No cameras found.');
        }
      })
      .catch(function (error) {
        console.error('Error accessing cameras:', error);
      });
  });

