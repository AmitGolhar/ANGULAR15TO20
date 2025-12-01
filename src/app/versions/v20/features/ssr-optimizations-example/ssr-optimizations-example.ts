import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ssr-optimizations-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ssr-optimizations-example.html',
  styleUrl: './ssr-optimizations-example.scss',
})
export class SSROptimizationsExample {
  // Reactive title using signals
  title = signal('SSR Optimizations Example');

  // Reactive stats — simulates data fetched during SSR or pre-render
  stats = signal<{ users: number; posts: number } | null>(null);

  constructor() {
    // Simulate SSR-prefetched data becoming available after hydration
    setTimeout(() => {
      this.stats.set({ users: 120, posts: 45 });
    }, 1200);
  }

  // Theory block for UI
  theory = {
    title: 'SSR Optimizations Example',
    content: `
      <h3>Why Use SSR Optimizations?</h3>
      <p>
        SSR combined with Angular Signals boosts performance and improves user experience.
        This example demonstrates:
      </p>
      <ul>
        <li><strong>Pre-rendering essential content</strong> for instant first paint.</li>
        <li><strong>Hydration with Signals</strong> to update data reactively on the client.</li>
        <li><strong>Reduced client-side JavaScript</strong> for faster runtime performance.</li>
      </ul>
    `
  };
}
