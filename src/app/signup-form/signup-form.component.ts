import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, FormBuilder } from '@angular/forms';
import { SignupValidators } from './signup-validators'
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      SignupValidators.mustNotHaveSpaces,
      SignupValidators.forbiddenName('rod')
    ],SignupValidators.shouldBeUnique
      ),
    password: new FormControl('', Validators.required)
  });

  get userName(){
    return this.form.get('userName');
  }
  // form;
  //
  // constructor(private fb: FormBuilder) {
  //   this.form = this.fb.group({
  //     userName: ['',[
  //       Validators.required,
  //       Validators.minLength(6),
  //       SignupValidators.mustNotHaveSpaces,
  //       SignupValidators.forbiddenName('rod')],
  //       SignupValidators.shouldBeUnique],
  //     password: ['', Validators.required]
  //   });
  // }

  ngOnInit() {
  }

  onSignup(){
    this.form.setErrors({signUpError: true});
  }

}




/////////
//
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
// import { SignupValidators } from './signup-validators'
// @Component({
//   selector: 'signup-form',
//   templateUrl: './signup-form.component.html',
//   styleUrls: ['./signup-form.component.css']
// })
// export class SignupFormComponent implements OnInit {
//
//   form = new FormGroup({
//     userName: new FormControl('', [
//       Validators.required,
//       Validators.minLength(6),
//       SignupValidators.mustNotHaveSpaces,
//       SignupValidators.forbiddenName('rod')
//     ],SignupValidators.shouldBeUnique
//       ),
//     password: new FormControl('', Validators.required)
//   });
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
//   onSignup(){
//     this.form.setErrors({signUpError: true});
//   }
//
// }
