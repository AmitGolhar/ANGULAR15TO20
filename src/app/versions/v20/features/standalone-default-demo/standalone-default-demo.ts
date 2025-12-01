import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone-default-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone-default-demo.html',
  styleUrl: './standalone-default-demo.scss',
})
export class StandaloneDefaultDemo {
  // Reactive signals
  counter = signal(0);
  message = signal('Welcome to Standalone Component Demo!');

  // Methods
  increment() {
    this.counter.update(val => val + 1);
  }

  decrement() {
    this.counter.update(val => val - 1);
  }

  theory = {
    title: 'Standalone Default Component Demo',
    content: `
      <h3>Why Standalone Components?</h3>
      <p>
        Standalone components were introduced to simplify Angular architecture by removing the 
        dependency on <strong>NgModules</strong>. In Angular 17+, standalone is the recommended default.
      </p>

      <h3>Key Benefits</h3>
      <ul>
        <li><strong>No NgModules required</strong> — cleaner, component-first architecture.</li>
        <li><strong>Better tree-shaking</strong> — unused imports are eliminated automatically.</li>
        <li><strong>Faster compiler</strong> — simplified dependency graph improves build performance.</li>
        <li><strong>Direct imports</strong> — every component manages its own dependencies.</li>
        <li><strong>Perfect for microfrontends</strong> — independent, encapsulated components.</li>
      </ul>

      <h3>Interview Insights</h3>
      <ul>
        <li><strong>Q:</strong> Why did Angular move away from NgModule?</li>
        <li><strong>A:</strong> To simplify mental model, improve tree-shaking, and reduce boilerplate.</li>

        <li><strong>Q:</strong> Are standalone components backward compatible?</li>
        <li><strong>A:</strong> Yes — standalone + module-based components can coexist.</li>

        <li><strong>Q:</strong> How does Angular know which dependencies to import?</li>
        <li><strong>A:</strong> Through the <code>imports: []</code> array inside each standalone component.</li>
      </ul>
    `
  };
}
