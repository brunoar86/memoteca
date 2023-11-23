import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-page-button',
  templateUrl: './next-page-button.component.html',
  styleUrls: ['./next-page-button.component.css']
})
export class NextPageButtonComponent implements OnInit {

  @Input() thereIsMoreThoughts: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
