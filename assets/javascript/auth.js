// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyDUkpP2xB8iAoUhJpzKiRWdzaKnDtiM8zw",
    authDomain: "project-1-auth-6345e.firebaseapp.com",
    databaseURL: "https://project-1-auth-6345e.firebaseio.com",
    projectId: "project-1-auth-6345e",
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  // make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();


// listen for auth status changes
const loggedOutLinks = $('.logged-out');
const loggedInLinks = $('.logged-in');

auth.onAuthStateChanged(user => {

    if (user) {
        const userName = user.email.substr(0, user.email.indexOf('@')).toUpperCase();
      console.log('user logged in: ', user);
      $("#logged-user").html(`You are logged in as ${userName} `);
      $(".logged-out-message").hide();
      $("#home-content").show();
      loggedOutLinks.hide();
      loggedInLinks.show();

    } else {
      console.log('user logged out');
      $("#home-content").hide();
      $(".logged-out-message").show();
      loggedOutLinks.show();
      loggedInLinks.hide();
    }
  })


//sign up
const signupForm = $("#signup-form");
signupForm.on("submit", (e)=>{
    e.preventDefault();
    const email = $("#signup-email").val();
    const password = $("#signup-password").val();

    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {

    // close the signup modal & reset form
    const modal = $('#modal-signup');
    M.Modal.getInstance(modal).close();
    //signupForm.reset();
    $('.error-signup').html('');
  }).catch(error => {
    $('.error-signup').html(error.message);
  });

});

// logout
const logout = $('#logout');
logout.on('click', (e) => {
  e.preventDefault();
  auth.signOut()
});


// login
const loginForm = $('#login-form');
loginForm.on('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = $("#login-email").val();
    const password = $("#login-password").val();

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    const modal = $('#modal-login');
    M.Modal.getInstance(modal).close();
    //loginForm.reset();
    $('.error').html('');
  }).catch(err => {
    $('.error').html(err.message);
  });

});
