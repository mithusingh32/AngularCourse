import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('formInput') formViewChild: NgForm;
  userName: string;

  genders = ['male', 'female']; 
  submitted: boolean = false;

  user = {
    username: '',
    email: '',
    question: ''
  }

  suggestUserName() {
    // setValue will set the value of your form fields. YOU HAVE TO SET EVERY FORM FIELD THAT IS PART OF THE FORM!!! 
    // setValue will override entire form. This is great for such things as clearing form after submitting or hitting a clear button
    const suggestedName = 'Superuser';
    // this.formViewChild.setValue({
    //   userData: { userName: suggestedName, emailInput: ''},
    //   secretQuestion: 'pet', 
    //   questionAnswer: '',
    //   gender: 'male'

    // });

    // Similar to setValue. But you'll need to access the form then patchValue. This lets you change a single field
    this.formViewChild.form.patchValue({userData: {userName: suggestedName}});
  }

  /*
  * As soon as you import the FormsModule, this directive becomes active by default on all <form> tags. You don't need to add a special selector.
  * You optionally export the directive into a local template variable using ngForm as the key (ex: #myForm="ngForm"). 
  * This is optional, but useful. 
  * Many properties from the underlying FormGroup instance are duplicated on the directive itself, so a reference to it gives you access to the aggregate value and validity status of the form, 
  * as well as user interaction properties like dirty and touched.
  */
  onSubmitUsingNgFormRefrence(form: NgForm) {
    console.log(form);
    
  }

  onSubmitUsingViewChild() {
    console.log(this.formViewChild);
    this.submitted = true;
    this.user.username = this.formViewChild.value.userData.userName;
    this.user.email = this.formViewChild.value.userData.emailInput;
    this.user.question = this.f
    
    // This will reset the form (clear all inputs and other properties such as ng-touched )
    this.formViewChild.reset();
  }
}
