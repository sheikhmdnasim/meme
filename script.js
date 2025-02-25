document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("response").innerHTML = "আপনি ওজু করেছেন! এখন নাম উচ্চারণ করতে পারেন।";
    speakResponse("আপনি ওজু করেছেন! এখন নাম উচ্চারণ করতে পারেন।");
});

document.getElementById("noButton").addEventListener("click", function() {
    document.getElementById("response").innerHTML = "দুঃখিত, আপনি ওজু না করলে নাম উচ্চারণ করা যাবে না!";
    speakResponse("দুঃখিত, আপনি ওজু না করলে নাম উচ্চারণ করা যাবে না!");
});

// ভয়েস রেসপন্স ফাংশন
function speakResponse(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}
