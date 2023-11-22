import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtService } from '../thought.service';
import { Thought } from './../thought';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  thought: Thought = {
    id: 0,
    content: '',
    authorship: '',
    model: ''
  }

  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.searchById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought
      this.form = this.formBuilder.group({
        id: this.thought.id,
        content: [this.thought.content, Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
        authorship: [this.thought.authorship, Validators.compose([Validators.required, Validators.minLength(3)])],
        model: this.thought.model
      })
    })
  }

  editThought() {
    console.log(this.form.get('authorship')?.errors)
    if (this.form.valid) {
      this.service.edit(this.thought).subscribe(() => {
        this.router.navigate(['/listThoughts'])
      })
    }

  }

  cancelThought() {
    this.router.navigate(['/listThoughts'])
  }

  activateButton(): string {
    if (this.form.valid) {
      return 'botao';
    } else {
      return 'disabled__button';
    }
  }
}
