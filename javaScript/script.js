function copyPn() {
    var CopyPhone = document.getElementById("copyPn");
    navigator.clipboard.writeText(CopyPhone.alt);
    window.parent.location.href = `tel:+91${CopyPhone.alt}`
    console.log(`tel:+91${CopyPhone.alt}`)
    // alert("Copied Phone no :  " + CopyPhone.alt);
}