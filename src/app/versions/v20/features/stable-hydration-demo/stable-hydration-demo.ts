import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stable-hydration-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stable-hydration-demo.html',
  styleUrl: './stable-hydration-demo.scss',
})
export class StableHydrationDemo {
  // Signal storing hydrated content
  hydratedContent = signal<string | null>(null);

  constructor() {
    // Simulate content becoming interactive post-hydration
    setTimeout(() => {
      this.hydratedContent.set('Content hydrated and stable after SSR!');
    }, 800);
  }

  theory = {
    title: 'Stable Hydration Demo',
    content: `
      <h3>Stable Hydration in Angular 17+</h3>
      <p>
        Stable hydration ensures that the HTML sent from the server matches what Angular 
        initializes on the client. This prevents DOM mismatches, flickers, and unnecessary re-renders.
      </p>

      <h3>Why Stable Hydration Matters</h3>
      <ul>
        <li><strong>No layout shifts</strong> — server HTML matches client DOM.</li>
        <li><strong>Smooth user experience</strong> — content stays stable during hydration.</li>
        <li><strong>Reactive updates with Signals</strong> — Angular updates only what changes.</li>
        <li><strong>Improved SEO + faster first paint</strong> — content visible instantly.</li>
      </ul>
    `
  };
}
