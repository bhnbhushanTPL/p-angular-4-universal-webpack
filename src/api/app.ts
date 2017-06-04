import * as querystring from 'querystring';
import { data } from './data';
// import Firebase  from './firebase'

// const firebase = Firebase.start();

export class App {
    getData() {
      // firebase.database().ref('users/'+1).once('value').then((snapshot)=>{
      //   res.json(snapshot);
      // });
      return data;
    }
    // writeUserData(username, password, email) {
    //   firebase.database().ref('users').push({
    //     username: username,
    //     password: password,
    //     email: email
    //   });
    // }
}
