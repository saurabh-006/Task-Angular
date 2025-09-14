import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Navbar } from './app/navbar/navbar';
import {Sidebar} from './app/sidebar/sidebar'
import {Body} from './app/body/body'

@Component({
  selector: 'app-root',
  imports: [Navbar,Sidebar,Body],
  template: `
      <div class="flex h-screen">
      <!-- Sidebar -->
      <app-sidebar></app-sidebar>

      <!-- Main content area -->
      <div class="flex-1 flex flex-col">
        <!-- Navbar -->
        <app-navbar></app-navbar>

        <!-- Body Section -->
        <div class="p-6 flex-1 overflow-y-auto">
          <app-body></app-body>
        </div>
      </div>
    </div>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
