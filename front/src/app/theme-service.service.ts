import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkMode = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkMode.asObservable();

  private theme = new BehaviorSubject<string>('light');
  theme$ = this.theme.asObservable();

  constructor() {
    this.darkMode.next(localStorage.getItem('dark-mode') === 'true');
    this.toggleTheme(localStorage.getItem('dark-mode') === 'true' ? 'dark' : 'light');
  }

  toggleDarkMode() {
    const newDarkMode = !this.darkMode.value;
    this.darkMode.next(newDarkMode);
    localStorage.setItem('dark-mode', newDarkMode.toString());
    this.toggleTheme(newDarkMode ? 'dark' : 'light');
  }

  toggleTheme(themeName: string) {
    this.theme.next(themeName);
    localStorage.setItem('theme', themeName);
    document.body.className = themeName;
  
    const themeLink = document.getElementById('theme-link') as HTMLLinkElement;
    if (themeLink) {
      // If the link element already exists, update its href
      themeLink.href = `themes/${themeName}.css`;
    } else {
      // If the link element doesn't exist, create it
      const newThemeLink = document.createElement('link');
      newThemeLink.id = 'theme-link';
      newThemeLink.rel = 'stylesheet';
      newThemeLink.href = `themes/${themeName}.css`;
      document.head.appendChild(newThemeLink);
    }
  }
}