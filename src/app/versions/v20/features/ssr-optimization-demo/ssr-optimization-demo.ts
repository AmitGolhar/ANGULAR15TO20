import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ssr-optimization-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ssr-optimization-demo.html',
  styleUrl: './ssr-optimization-demo.scss',
})
export class SSROptimizationDemo {
  // Signal for server-rendered or pre-fetched data
  serverData = signal<string | null>(null);

  constructor() {
    // Simulate server-side / pre-hydrated content loading
    setTimeout(() => {
      this.serverData.set('This content was rendered server-side!');
    }, 1000);
  }

  // Theory block for UI
  theory = {
    title: 'SSR Optimization Demo',
    content: `
      <h3>Server-Side Rendering Optimizations</h3>
      <p>
        Angular 17+ offers improved SSR performance and hydration mechanics.
        This demo shows how SSR+Signals can reduce the amount of JavaScript 
        needed on the client after hydration.
      </p>
      <ul>
        <li>Pre-render static or API-driven content during SSR.</li>
        <li>Hydrate only minimal interactive parts.</li>
        <li>Use signals to update only what changes after hydration.</li>
      </ul>
    `
  };
}
