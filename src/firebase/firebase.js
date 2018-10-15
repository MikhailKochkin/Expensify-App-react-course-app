import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBvt2otIzG89AtaWHqeY01lgdDL9uZ95xQ",
    authDomain: "expensify-for-react-course.firebaseapp.com",
    databaseURL: "https://expensify-for-react-course.firebaseio.com",
    projectId: "expensify-for-react-course",
    storageBucket: "expensify-for-react-course.appspot.com",
    messagingSenderId: "286466691761"
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').push({
//   description: 'For food only',
//   note: '',
//   amount: 109500,
//   createdAt: '97623456789'
// });
//
// database.ref('expenses').push({
//   description: 'For rent',
//   note: '',
//   amount: 1039500,
//   createdAt: '47623456789'
// });
//
// database.ref('expenses').push({
//   description: 'For charity',
//   note: '',
//   amount: 100,
//   createdAt: '17623456789'
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//
//     console.log(expenses);
//   });

database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];

  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });

  console.log(expenses);
});

database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});
