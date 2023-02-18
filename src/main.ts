import 'zone.js/dist/zone';
// import { Component, OnChanges, OnInit, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { bootstrapApplication } from '@angular/platform-browser';
import { TestModule } from './test/test.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// @Component({
//   selector: 'my-app',
//   standalone: true,

//   template: `
//     <h1>Hello from {{name}}!</h1>
// <button (click)="name='testing'">update</button>
// <p>{{name}}</p>
//     <a target="_blank" href="https://angular.io/start">
//       Learn more about Angular
//     </a>
//   `,
// })
// export class App implements OnInit, OnChanges {
//   @Input()
//   name = 'Angular';

//   ngOnInit() {
//     console.log('on init');
//   }

//   ngOnChanges() {
//     console.log('on changes');
//   }
// }

platformBrowserDynamic()
  .bootstrapModule(TestModule)
  .catch((err) => console.error(err));
//bootstrapApplication(App);
