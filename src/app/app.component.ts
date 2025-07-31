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

  //  Ajoute ici un nom d'utilisateur statique
  nomUtilisateur = 'Astou';
showMenu = false;

toggleMenu() {
  this.showMenu = !this.showMenu;
}

deconnexion() {
  // Remplace par une vraie redirection ou logique de logout
  console.log('Déconnexion...');
  this.router.navigate(['/login']);
}

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.showSidebar = !['/login'].includes(event.urlAfterRedirects);
    });
  }
}
