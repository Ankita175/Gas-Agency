  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDt8tCTEs7NDOaaWH-pfhv_-8bLKUo2R80",
    authDomain: "gasagency-55693.firebaseapp.com",
    projectId: "gasagency-55693",
    storageBucket: "gasagency-55693.appspot.com",
    messagingSenderId: "523928704958",
    appId: "1:523928704958:web:d9f2f47e47f0567f2f4bef"
  };

  
  const app = initializeApp(firebaseConfig);


  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click', function(e){
    e.preventDefault();
    set(ref(db,  '/user' + document.getElementById("username").value),{
      adminForm : document.getElementById('admin-login'),
      userForm : document.getElementById('user-login')
    });
    adminForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Admin Login Submitted!');
    })
    
    userForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('User Login Submitted!');
    })
  });






























