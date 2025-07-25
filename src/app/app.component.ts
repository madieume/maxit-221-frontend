import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule, NgIf],
})
export class AppComponent {
  showSidebar = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(event => {
      // Ici event est bien typé NavigationEnd
      this.showSidebar = !['/login', '/register'].includes(event.urlAfterRedirects);
    });
  }
}
