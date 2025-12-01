import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signals-stability-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals-stability-demo.html',
  styleUrls: ['./signals-stability-demo.scss'],
})
export class SignalsStabilityDemo {
  // Reactive state
  counter = signal<number>(0);
  messages = signal<string[]>([]);

  // Increment counter & log the update
  increment() {
    this.counter.update(c => c + 1);

    this.messages.update(msgs => [
      ...msgs,
      `Counter updated to ${this.counter()}`
    ]);
  }

  // Reset state
  reset() {
    this.counter.set(0);
    this.messages.set([]);
  }

  // Theory section for UI display
  theory = {
    title: 'Signals Stability Demo',
    content: `
      <h3>Why Signals Are Stable</h3>
      <p>
        Angular 17+ signals provide fine-grained, predictable reactivity.
        This demo shows how updating one signal does NOT cause unnecessary recalculations elsewhere.
      </p>
      <ul>
        <li>Only the affected signals trigger UI updates.</li>
        <li>Array updates are fully reactive using <code>update()</code>.</li>
        <li>No zone.js required — pure reactive state.</li>
      </ul>
    `
  };
}
