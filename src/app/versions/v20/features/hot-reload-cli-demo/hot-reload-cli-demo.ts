import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hot-reload-cli-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hot-reload-cli-demo.html',
  styleUrl: './hot-reload-cli-demo.scss',
})
export class HotReloadCliDemo {
  // Reactive counter (survives hot reload)
  counter = signal<number>(0);

  increment() {
    this.counter.set(this.counter() + 1);
  }

  decrement() {
    this.counter.set(this.counter() - 1);
  }

  // Educational section
  theory = {
    title: 'Hot Reload CLI Demo (Angular 17+)',
    content: `
      <h3>Hot Reload in Angular CLI</h3>
      <p>
        Angular 17+ supports full hot reload with signals and the new CLI.
        Hot reload allows you to update templates, styles, and component logic
        without losing state — unlike traditional HMR.
      </p>
      <ul>
        <li>Signals preserve component state during hot reload.</li>
        <li>UI updates instantly when code changes.</li>
        <li>No browser refresh required for most updates.</li>
      </ul>
    `
  };

  // Code snippet to display
  codeExample = `
<button (click)="decrement()">-</button>
<span>{{ counter() }}</span>
<button (click)="increment()">+</button>
`.trim();
}
