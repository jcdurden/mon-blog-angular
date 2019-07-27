import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCwiifYhZdItrpK9kAcT1RstRP2HWFsBgk",
      authDomain: "angular-blog-e4e4c.firebaseapp.com",
      databaseURL: "https://angular-blog-e4e4c.firebaseio.com",
      projectId: "angular-blog-e4e4c",
      storageBucket: "",
      messagingSenderId: "818685935897",
      appId: "1:818685935897:web:444b9c80559e8fa3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
