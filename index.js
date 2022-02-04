function qrgenerate(){
    var userinput = document.getElementById("input").value;
    document.getElementById("qr").innerHTML="";
    new QRCode(document.getElementById("qr"),userinput)

    var x = document.getElementById("qrShow");
    x.style.display = "none";
};