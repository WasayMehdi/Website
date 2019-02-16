import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  sendSuccess = false;

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  route(to: string) {
    this.router.navigate([to]);
  }

  sendEmail(txt, inpt) {
    const snack = new MatSnackBarConfig();
    snack.duration = 2000;
    snack.announcementMessage = 'Success!';

    this.snackBar.open('Sending email...', 'Dismiss', snack);

    console.log(txt, inpt);

    setTimeout(() => {
      txt.value = '';
      inpt.value = '';
      this.sendSuccess = true;
      setTimeout(() => {
        this.sendSuccess = false;
      }, 5000);
    }, 2000);




  }

}
