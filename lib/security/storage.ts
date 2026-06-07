import CryptoJS from 'crypto-js';

// Use an environment variable for the secret key, fallback for development only
const SECRET_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || 'ckpc-secure-key-2026';

/**
 * Utility to encrypt and decrypt data before saving to localStorage
 * Fulfills the requirement: "Only session info captured, encrypted by tokens"
 */
export const secureStorage = {
  setItem: (key: string, value: any) => {
    try {
      const stringValue = JSON.stringify(value);
      const encryptedValue = CryptoJS.AES.encrypt(stringValue, SECRET_KEY).toString();
      localStorage.setItem(key, encryptedValue);
    } catch (error) {
      console.error('Error encrypting local storage data', error);
    }
  },

  getItem: (key: string) => {
    try {
      const encryptedValue = localStorage.getItem(key);
      if (!encryptedValue) return null;

      const decryptedBytes = CryptoJS.AES.decrypt(encryptedValue, SECRET_KEY);
      const decryptedString = decryptedBytes.toString(CryptoJS.enc.Utf8);
      
      return JSON.parse(decryptedString);
    } catch (error) {
      console.error('Error decrypting local storage data', error);
      return null;
    }
  },

  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },
};