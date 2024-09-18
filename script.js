let qrImage = document.getElementById("qrImage");
        let imgQr = document.getElementById("imgQr");
        let qrInput = document.getElementById("qrInput");
       function qrGenerator(){
              imgQr.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrInput.value;
       }