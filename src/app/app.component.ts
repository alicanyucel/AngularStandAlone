import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { C1Component } from './c1/c1.component';
@Component({
  selector: 'app-root',
  standalone:true,
  template: `
  <h1>>standalone</h1>
  <app-c1></app-c1>

   `,
   imports:[CommonModule,C1Component]
})
export class AppComponent {
  title = 'standalone';
}
