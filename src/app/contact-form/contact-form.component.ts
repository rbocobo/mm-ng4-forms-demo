import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  languages: any[] = [
    {
      id: 1,
      name: 'English',
      selected: false
    },
    {
      id: 2,
      name: 'Spanish',
      selected: false
    },
    {
      id: 3,
      name: 'Mandarin',
      selected: false
    },
  ]

  contactMethods: any[] = [
    {
      name: "Email",
      selected: true
    },
    {
      name: "SMS",
      selected: true
    },
    {
      name: "Telephone",
      selected: true
    }
  ]
  user = {
    firstName: "Rod",
    language: 2
  }

  constructor() { }

  ngOnInit() {
  }

  log(firstName){
    console.log(firstName);
  }

  onSubmit(f){
    console.log(f);
  }

  onClick(){
    this.user.firstName = "";
  }
}
