"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function generateKeys() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: "spki",
            format: "pem",
        },
        privateKeyEncoding: {
            type: "pkcs8",
            format: "pem",
        },
    });
    return { publicKey, privateKey };
}
function encryptMessage(publicKey, message) {
    const encrypted = crypto.publicEncrypt({
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
    }, Buffer.from(message));
    return encrypted.toString("base64");
}
function decryptMessage(privateKey, encryptedMessage) {
    const decrypted = crypto.privateDecrypt({
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
    }, Buffer.from(encryptedMessage, "base64"));
    return decrypted.toString("utf8");
}
const { publicKey, privateKey } = generateKeys();
function startEncryptionProcess() {
    rl.question("Digite a mensagem que deseja cifrar: ", (inputMessage) => {
        const encryptedMessage = encryptMessage(publicKey, inputMessage);
        console.log("\nMensagem Cifrada:", encryptedMessage);
        const decryptedMessage = decryptMessage(privateKey, encryptedMessage);
        console.log("Mensagem Decifrada:", decryptedMessage);
        rl.close();
    });
}
startEncryptionProcess();
