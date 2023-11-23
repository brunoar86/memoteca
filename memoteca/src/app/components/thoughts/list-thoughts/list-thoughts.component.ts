import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  listThoughts: Thought[] = [];
  currentPage: number = 1;
  thereIsMoreThoughts: boolean = true;

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.list(this.currentPage).subscribe((listThoughts) => {
      this.listThoughts = listThoughts
    })
  }

  loadMoreThoughts() {
    this.service.list(++this.currentPage).subscribe(listThoughts => {
      this.listThoughts.push(...this.listThoughts);
      if(!listThoughts.length) {
        this.thereIsMoreThoughts = false
      }
    })
  }

}
