function checkVowel() {
    var vowel = document.getElementById("characterInput").value.toLowerCase();
    var result = document.getElementById("result");
    if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
        result.innerHTML = `✅ It's a vowel!`;
        result.style.color = "white";
    } else {
        result.innerHTML = `❌ False, it's not a vowel.`;
        result.style.color = "red";
    }
}