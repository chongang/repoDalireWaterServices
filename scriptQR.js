      // JavaScript
      // have the const scanner.. in the hmtl doc, where the qrScanner element is located
      let scanner = new Instascan.Scanner({ video: document.getElementById('qrScanner'), mirror: false });
      // Listen for a successful scan
        scanner.addListener('scan', function (content) {
        document.getElementById('meternumber').value = content;
        scanner.stop();
        hideDWSWindow('QRReaderWindow');
      });
    
      // Trigger the scanning process when the button is clicked
      document.getElementById('startScanButton').addEventListener('click', function () {
      scanner = new Instascan.Scanner({ video: document.getElementById('qrScanner'), mirror: false });

        showDWSWindow('QRReaderWindow');
        Instascan.Camera.getCameras()
          .then(function (cameras) {
            if (cameras.length > 0) {
              
              scanner.start(cameras[cameras.length - 1]);
            } else {
              console.error('No cameras found.');
            }
              scanner.start(activeCamera);
            
          })
          .catch(function (error) {
            console.error('Error accessing cameras:', error);
          });
      });
