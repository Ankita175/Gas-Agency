  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAWcY9osN2DXFy3UZosu8CjPbFfnrsId6I",
    authDomain: "gasagency-4b3f3.firebaseapp.com",
    projectId: "gasagency-4b3f3",
    storageBucket: "gasagency-4b3f3.appspot.com",
    messagingSenderId: "458495350992",
    appId: "1:458495350992:web:fa40b6c040348baf0ae6d5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  

  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click', function(e){
    e.preventDefault();
    set(ref(db,  '/user' + document.getElementById("name").value),{
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    });

    console.log('Form submitted successfully!');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    messageAlert.textContent = 'Message sent successfully!';
    form.reset(); 

  })