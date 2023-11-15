import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  thought = {
    id: '1',
    content: 'Learning Angular',
    authorship: 'Dev',
    model: 'Modelo 1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  createThought() {
    alert('New thought created');
  }

  cancelThought() {
    alert('New thought creation has been canceled')
  }

}
