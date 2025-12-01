import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-usage-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './basic-usage-demo.html',
  styleUrl: './basic-usage-demo.scss',
})
export class BasicUsageDemo {
  // Core reactive signals used in the demo
  counter = signal<number>(0);
  isVisible = signal<boolean>(true);
  name = signal<string>('');

  theory = {
    title: 'Basic Usage Demo (Angular 17+)',
    content: `
      <h3>Understanding Angular Signals</h3>
      <p>
        Angular Signals are reactive primitives that store values and notify the framework 
        whenever the value changes. Angular updates only the parts of the DOM that depend 
        on those signals, leading to faster and more predictable rendering.
      </p>

      <h3>Key Concepts Demonstrated</h3>
      <ul>
        <li><strong>Reactive counters</strong> — update UI instantly without zones.</li>
        <li><strong>Visibility toggles</strong> — control DOM display using boolean signals.</li>
        <li><strong>Form inputs with signals</strong> — combine <code>ngModel</code> + signals for simple reactive forms.</li>
      </ul>

      <h3>Why Signals Matter (Interview Points)</h3>
      <ul>
        <li><strong>No NgZone dependency</strong> — change detection occurs only when signals mutate.</li>
        <li><strong>Better performance</strong> — avoids global dirty checking.</li>
        <li><strong>Predictable reactivity</strong> — no async timing issues like Observables.</li>
        <li><strong>Ideal for large apps</strong> — UI updates scale better than zone-based detection.</li>
      </ul>

      <h3>Real-World Use Cases</h3>
      <ul>
        <li>Form fields with instant validation</li>
        <li>Dashboard UI updates</li>
        <li>Interactive widgets (counters, timers, toggles)</li>
        <li>Micro-components for reusable UI blocks</li>
      </ul>
    `
  };

  codeExample = `
<button (click)="counter.set(counter() + 1)">Increment Counter</button>
<button (click)="isVisible.set(!isVisible())">Toggle Visibility</button>

<input [(ngModel)]="name" placeholder="Enter your name" />

<div *ngIf="isVisible()">
  Counter: {{ counter() }}
  <p>Hello, {{ name() || 'Guest' }}!</p>
</div>
`.trim();
}
