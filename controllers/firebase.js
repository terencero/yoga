
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDf3KnVgHX2bsMwU4apropmA-3CsHQCW64",
    authDomain: "yoga-f59e1.firebaseapp.com",
    databaseURL: "https://yoga-f59e1.firebaseio.com",
    projectId: "yoga-f59e1",
    storageBucket: "yoga-f59e1.appspot.com",
    messagingSenderId: "431249882505"
  };
  firebase.initializeApp(config);

  const database = firebase.database();

//   const comment = '';
//   const commentInput = document.querySelector('#comment-input');

//   document.querySelector('#add-comment').addEventListener('click', () => {
//     comment = commentInput.val().trim();
//   });

module.exports = firebase;