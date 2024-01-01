import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkMode.asObservable();

  constructor() {
    this.darkMode.next(localStorage.getItem('dark-mode') === 'true');
  }

  toggleDarkMode() {
    const newDarkMode = !this.darkMode.value;
    this.darkMode.next(newDarkMode);
    localStorage.setItem('dark-mode', newDarkMode.toString());
    if (newDarkMode == true) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}