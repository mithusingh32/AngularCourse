import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted: boolean = false;
  @ViewChild('formInput') formInput: NgForm;

  userData = {
    email: "",
    subscription: "",
    password: "", 

  }

  onSubmit() {
    console.log(this.formInput.value);
    this.userData.email = this.formInput.value.userEmail;
    this.userData.subscription = this.formInput.value.subType;
    this.userData.password = this.formInput.value.password;

    this.submitted = true;

    this.formInput.reset();
  }
}
