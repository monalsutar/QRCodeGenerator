document.getElementById("download").hidden = true;

document.getElementById("btn").addEventListener("click",function(){
    document.getElementById("download").hidden = false;
    const url = document.getElementById("text").value;
    if(url){
        document.getElementById("label").textContent = url;
        document.getElementById("img").innerHTML = "";
        const qrcode = new QRCode(document.getElementById("img"),
        {
            text: url,
            width:150,
            height:150
        })
        //alert("QR Code generated");
        
    }
    else{
        console.log("QR code failed");
    }
})


document.getElementById("download").addEventListener("click",function(){

    const qrCanvas = document.querySelector('#img canvas');

    if (qrCanvas) {
        // Convert the canvas to a data URL (base64 encoded PNG)
        const qrImage = qrCanvas.toDataURL("image/png");
        
        // Create a temporary link element to trigger download
        const downloadLink = document.createElement("a");
        downloadLink.href = qrImage;
        downloadLink.download = "qrcodenew.png";  // The name of the downloaded file
        downloadLink.click();  // Trigger the download

    } else {
        alert("No QR code available for download");
    }
    
})


// var qr = require('qr-image');
// var url = process.argv[2];
// var qr_svg = qr.image(url, { type: 'png' });
// qr_svg.pipe(require('fs').createWriteStream('qrcodenew.png'));