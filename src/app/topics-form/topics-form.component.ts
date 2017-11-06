import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
@Component({
  selector: 'topics-form',
  templateUrl: './topics-form.component.html',
  styleUrls: ['./topics-form.component.css']
})
export class TopicsFormComponent implements OnInit {

  form = new FormGroup({
    topics: new FormArray([])
  });

  constructor() { }

  ngOnInit() {
  }

  addTopic(topic: HTMLInputElement){
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl){
    let i = (this.form.get('topics')  as FormArray).controls.indexOf(topic);
    (this.form.get('topics') as FormArray).removeAt(i);
  }
}
