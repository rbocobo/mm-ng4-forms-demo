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
      name: 'English'
    },
    {
      id: 2,
      name: 'Spanish'
    },
    {
      id: 3,
      name: 'Mandarin'
    },
  ]

  user = {
    firstName: "Rod"
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
}
