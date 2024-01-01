import { Component } from '@angular/core';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CreatePollComponentComponent } from './create-poll-component/create-poll-component.component';
import { ThemeService } from './theme-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HomeComponentComponent, CreatePollComponentComponent]
})
export class AppComponent {
  constructor(public themeService: ThemeService) { }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
