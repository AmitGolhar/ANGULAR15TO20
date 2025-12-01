import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zoneless-mode-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zoneless-mode-demo.html',
  styleUrl: './zoneless-mode-demo.scss',
  // NOTE:
  // Actual zoneless mode is enabled during bootstrap:
  // bootstrapApplication(App, { ngZone: 'noop' })
})
export class ZonelessModeDemo {
  // Signals for reactive UI
  counter = signal(0);
  lastUpdate = signal(new Date());

  constructor() {
    // Effect executes automatically when counter changes
    // In zoneless mode, UI refresh is triggered by signals, not NgZone
    effect(() => {
      console.log('Counter updated:', this.counter());
      this.lastUpdate.set(new Date());
    });
  }

  increment() {
    this.counter.update(val => val + 1);
  }

  decrement() {
    this.counter.update(val => val - 1);
  }

  // Theory + Interview explanations
  theory = {
    title: 'Zoneless Mode Demo',
    content: `
      <h3>Zoneless Mode in Angular 17+</h3>
      <p>
        Zoneless mode removes Angular's dependency on <strong>NgZone</strong>.
        Usually, Angular patches browser APIs (like setTimeout, addEventListener)
        to auto-run change detection. Zoneless mode disables this.
      </p>

      <h3>Why Zoneless Matters</h3>
      <ul>
        <li><strong>Better performance</strong> — avoids global change detection runs.</li>
        <li><strong>Signals-powered UI updates</strong> — only affected views re-render.</li>
        <li><strong>No monkey-patching</strong> — cleaner integration with external libraries.</li>
        <li><strong>Useful for micro-frontends</strong> where zones cause conflicts.</li>
      </ul>

      <h3>How Angular Updates UI Without Zones</h3>
      <p>
        In Angular 17+, <strong>signals</strong> are the new reactive engine.
        They notify Angular precisely when something changes — no need for Zone.js.
      </p>

      <h3>Interview Deep Dive</h3>
      <ul>
        <li><strong>Q:</strong> How does Angular detect UI changes in zoneless mode?</li>
        <li><strong>A:</strong> Through <strong>signals scheduler</strong> and fine-grained reactivity.</li>

        <li><strong>Q:</strong> How do you enable zoneless mode?</li>
        <li><strong>A:</strong> At bootstrap:
          <pre>bootstrapApplication(App, { ngZone: 'noop' })</pre>
        </li>

        <li><strong>Q:</strong> Can legacy apps still use zoneless mode?</li>
        <li><strong>A:</strong> Yes. You can migrate incrementally — signals + standalone components help.</li>

        <li><strong>Q:</strong> Do event listeners still work without zones?</li>
        <li><strong>A:</strong> Yes — but Angular will not auto-run change detection; signals handle updates.</li>
      </ul>
    `
  };
}
