import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  imports: [CommonModule,FormsModule],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  // form model
  project = {
    name: '',
    assignee: '',
    status: '',
    startDate: '',
    endDate: '',
    priority: '',
    description: '',
  };

  step = 1;

  saveAndContinue() {
    console.log('Form Submitted:', this.project);
    this.step++;
  }
}
