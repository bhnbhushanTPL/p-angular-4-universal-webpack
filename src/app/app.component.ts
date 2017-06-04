import { Component, OnInit } from '@angular/core'
// import { TransferState } from '../modules/transfer-state/transfer-state';

@Component({
	selector: 'app-root',
	template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
	`
})

// export class AppComponent implements OnInit {
//   constructor(private cache: TransferState) {}
//   ngOnInit() {
//     this.cache.set('cached', true);
//   }
// }

export class AppComponent {
  title = 'app works!';
}
