function validateInput() {
    const text = document.getElementById("inputText").value;
    const regex = /^[a-z\s]*$/; // Solo letras minúsculas y espacios

    if (!regex.test(text)) {
        document.getElementById("errorText").innerText = "El texto solo puede contener letras minúsculas sin acentos.";
    } else {
        document.getElementById("errorText").innerText = "";
    }
}

function encryptText() {
    const text = document.getElementById("inputText").value;
    const regex = /^[a-z\s]*$/;

    if (!regex.test(text)) {
        document.getElementById("errorText").innerText = "El texto contiene caracteres no permitidos.";
        return;
    }

    const encrypted = btoa(text); // Encriptar usando base64
    document.getElementById("outputText").innerText = encrypted;
}

function decryptText() {
    const text = document.getElementById("inputText").value;
    try {
        const decrypted = atob(text); // Desencriptar usando base64
        document.getElementById("outputText").innerText = decrypted;
    } catch (e) {
        document.getElementById("outputText").innerText = "Texto inválido para desencriptar.";
    }
}
