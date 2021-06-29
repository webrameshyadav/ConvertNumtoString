import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  /**	Each next subscribers receive...
Subject	...only upcoming values
BehaviorSubject	...one previous value and upcoming values
ReplaySubject	...all previous values and upcoming values
AsyncSubject	...the latest value when the stream will close */
  constructor() { }
  title = 'Featured product:';

  birthday = new Date(); 
  ngOnInit(): void {

    // Behavior Subject
    // a is an initial value. if there is a subscription 
    // after this, it would get "a" value immediately
    let bSubject = new BehaviorSubject("a");
    bSubject.next("b");
    bSubject.subscribe(value => {
      console.log("Subscription got", value); // Subscription got b, 
      // ^ This would not happen 
      // for a generic observable 
      // or generic subject by default
    });
    bSubject.next("c"); // Subscription got c
    bSubject.next("d"); // Subscription got d


    let subject = new Subject();
    subject.next("Ananya");
    subject.subscribe(value => {
      console.log("Subscription got", value); // Subscription wont get 
      // anything at this point
    });
    subject.next("Ramesh"); // Subscription got c
    subject.next("Yadav"); // Subscription got d
  }

  onSave(event: any)
  {
    console.log(event);
  }
}
