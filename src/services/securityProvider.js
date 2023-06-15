const CryptoJS = require("crypto-js");
require("dotenv").config();
const salt = process.env.SALT;

class Security {
  encryptData(dataToEncrypt) {
    return CryptoJS.AES.encrypt(dataToEncrypt, salt).toString();
  }

  decryptData(dataToDecrypt) {
    return CryptoJS.AES.decrypt(dataToDecrypt, salt);
  }
}
module.exports = Security;
