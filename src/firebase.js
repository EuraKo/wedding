// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBONdG4jBJbJ9Zg2B4ZTFF6m4qxtHH_jPs',
	authDomain: 'wedding-invite-5c680.firebaseapp.com',
	databaseURL:
		'https://wedding-invite-5c680-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'wedding-invite-5c680',
	storageBucket: 'wedding-invite-5c680.appspot.com',
	messagingSenderId: '572438153013',
	appId: '1:572438153013:web:12a491118b171a5826ae7c',
	measurementId: 'G-QYWYF8X0TH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
