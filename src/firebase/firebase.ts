import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Ваши настройки конфигурации Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAZtvvpra80sDddnI2rzrrxOpF6AfiHN_E",
    authDomain: "fir-playground-8db19.firebaseapp.com",
    projectId: "fir-playground-8db19",
    storageBucket: "fir-playground-8db19.appspot.com",
    messagingSenderId: "761228583693",
    appId: "1:761228583693:web:670ff816265723dced4644"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Инициализация Firestore
const db = getFirestore(app);

export { db };
