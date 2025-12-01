import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-theme-switcher-demo',
  templateUrl: './theme-switcher-demo.html',
  styleUrl: './theme-switcher-demo.scss', // unchanged
})
export class ThemeSwitcherDemo {

  // ----------------------------------------------------
  // 🔥 THEME SIGNAL — Tracks current theme (true = dark)
  // ----------------------------------------------------
  darkMode = signal(false);

  constructor() {
    // Auto-load stored theme
    const saved = localStorage.getItem('theme-mode');
    if (saved === 'dark') {
      this.darkMode.set(true);
    } else if (saved === 'light') {
      this.darkMode.set(false);
    } else {
      // Auto-detect system theme if nothing stored
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.darkMode.set(prefersDark);
    }

    // Reactively update the <html> element when theme changes
    effect(() => {
      const isDark = this.darkMode();
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      localStorage.setItem('theme-mode', isDark ? 'dark' : 'light');
    });
  }

  // Toggle theme
  toggleTheme() {
    this.darkMode.update(v => !v);
  }

  // ----------------------------------------------------
  // 📘 THEORY SECTION — MASTER LEVEL EXPLANATION
  // ----------------------------------------------------
  theory = {
    title: 'Theme Switcher in Angular — Complete Deep Dive (Angular 16–20)',
    content: `
      <h3>What is a Theme Switcher?</h3>
      <p>
        A theme switcher allows changing UI appearance (light, dark, custom themes) at runtime using 
        <strong>CSS variables, Signals, and global DOM manipulation</strong>.
      </p>

      <h3>Why Theme Switching Matters</h3>
      <ul>
        <li><strong>Improves UX</strong> — users pick the theme they prefer.</li>
        <li><strong>Accessibility</strong> — dark mode helps reduce brightness & eye strain.</li>
        <li><strong>Brand identity</strong> — apps support multiple branded themes.</li>
        <li><strong>Dynamic theming</strong> — instant UI updates without page reload.</li>
      </ul>

      <h3>Using CSS Variables for Theme Switching</h3>
      <p>Define themes in <code>:root</code>:</p>

      <pre><code>
:root {
  --bg-color: #fff;
  --text-color: #111;
}

[data-theme="dark"] {
  --bg-color: #111;
  --text-color: #fff;
}
      </code></pre>

      <h3>Signals for UI Reactivity</h3>
      <p>Signals instantly update theme state with no subscriptions needed:</p>

      <pre><code>darkMode = signal(false);</code></pre>

      <h3>Auto Detect System Theme (Pro-Level)</h3>
      <p>Using prefers-color-scheme API:</p>

      <pre><code>
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      </code></pre>

      <h3>Persisting Theme Across Sessions</h3>
      <p>Use localStorage:</p>

      <pre><code>
localStorage.setItem('theme-mode', 'dark');
      </code></pre>

      <h3>Global Theme Application</h3>
      <p>
        Theme switching should modify the root DOM element:
      </p>

      <pre><code>
document.documentElement.setAttribute('data-theme', 'dark');
      </code></pre>

      <h3>Multiple Theme Support (Enterprise Apps)</h3>
      <ul>
        <li><strong>Brand themes</strong> → client A, client B themes</li>
        <li><strong>Accessibility themes</strong> → high-contrast theme</li>
        <li><strong>System sync</strong></li>
        <li><strong>User preference override</strong></li>
      </ul>

      <h3>Advanced: Theme Architectures</h3>
      <ul>
        <li><strong>CSS Variables + Signals</strong> — recommended</li>
        <li><strong>Tailwind CSS theming</strong> — controlled via classes</li>
        <li><strong>SCSS mixins</strong> (older method)</li>
        <li><strong>Component-level theming</strong> with host bindings</li>
      </ul>

      <h3>Interview Questions You Can Now Answer</h3>
      <ul>
        <li>How do you implement theme switching in Angular?</li>
        <li>Why are CSS variables preferred for theming?</li>
        <li>How does Angular Signals help theme performance?</li>
        <li>How would you store theme preference?</li>
        <li>Difference between system-driven theme vs user-selected theme?</li>
        <li>How do you extend a theme system to multiple brand themes?</li>
      </ul>
    `
  };

  // ----------------------------------------------------
  // 📘 Code Example Displayed in Template
  // ----------------------------------------------------
  codeExample = `
import { Component, signal } from '@angular/core';

@Component({ ... })
export class ThemeSwitcherDemo {
  darkMode = signal(false);

  toggleTheme() {
    this.darkMode.set(!this.darkMode());
  }
}
`.trim();

}
