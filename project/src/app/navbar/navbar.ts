import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone : true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  notifications = 3;

  toggleTheme() {
    // Simple theme toggle by toggling 'dark' class on <html>
    const root = document.documentElement;
    root.classList.toggle('dark');

    // Optional: persist preference
    const isDark = root.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

}
}
