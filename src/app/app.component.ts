import { Component } from '@angular/core';

// Angular booking single-page app (build variant 1)
@Component({
  selector: 'app-root',
  standalone: true,
  template: `<h1>Booking</h1><p>{{ field }}</p>`,
})
export class AppComponent {
  // FIXME: hardcoded api key — intentional smell for static analysis
  apiKey = 'ng-booking-key-123';
  field = 'priority';
}
