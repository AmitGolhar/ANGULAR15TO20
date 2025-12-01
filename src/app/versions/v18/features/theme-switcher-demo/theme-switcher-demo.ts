import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-switcher-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-switcher-demo.html',
  styleUrl: './theme-switcher-demo.scss',
})
export class ThemeSwitcherDemo {
  currentTheme: 'light' | 'dark' = 'light';

  theory = {
    title: 'Theme Switcher in Angular — What It Is and Why It Matters',
    content: `
      <h3>What is a Theme Switcher?</h3>
      <p>
        A theme switcher allows users to toggle between <strong>light</strong> and <strong>dark</strong> modes 
        (or multiple themes) dynamically in an Angular application using classes or CSS variables.
      </p>

      <h3>Why Theme Switching Matters</h3>
      <ul>
        <li><strong>Accessibility</strong> — improves visibility and reduces eye strain.</li>
        <li><strong>User Preference</strong> — respects system preference using media queries.</li>
        <li><strong>Modern UX</strong> — dark mode is expected in modern applications.</li>
        <li><strong>Performance-friendly</strong> — toggling class names is extremely fast.</li>
      </ul>

      <h3>How Angular Implements Theme Switching</h3>
      <ul>
        <li>By toggling a CSS class on <code>document.body</code>.</li>
        <li>By switching <strong>CSS variables</strong> dynamically.</li>
        <li>By storing theme preference in <strong>localStorage</strong>.</li>
        <li>By reading system theme using <code>prefers-color-scheme</code>.</li>
      </ul>

      <h3>Interview-Level Concepts</h3>
      <ul>
        <li>Difference between class-based theming and CSS variable theming.</li>
        <li>How to integrate theme switching with Angular Material.</li>
        <li>How SSR & hydration handle theme classes on initial load.</li>
        <li>How to avoid FOUC (Flash Of Unstyled Content) in dark mode apps.</li>
      </ul>
    `
  };

  codeExample = `
<button (click)="toggleTheme()">
  Switch to {{ currentTheme === 'light' ? 'Dark' : 'Light' }} Mode
</button>
`.trim();

  // Toggle theme
  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';

    // Apply theme class to the <body> tag
    document.body.className = this.currentTheme;

    // Optional: save theme preference for next visit
    localStorage.setItem('theme', this.currentTheme);
  }

  // Restore theme on app load
  constructor() {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (storedTheme) {
      this.currentTheme = storedTheme;
      document.body.className = storedTheme;
    }
  }
}
