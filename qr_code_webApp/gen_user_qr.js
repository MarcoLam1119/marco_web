var genUserQr = window.genUserQr || (function () {
    const genQRcode = async (userID) => {
        // Function implementation here
        console.log(`Generating QR code for user ID: ${userID}`);
        const dataUrl = await QRCode.toDataURL(userID);
        document.getElementById('qrCodeImage').src = dataUrl;
    };

    return {
        genQRcode: genQRcode
    };
})();