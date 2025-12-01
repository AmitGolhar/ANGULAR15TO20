import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signals-counter-demo',
  standalone: true,
  templateUrl: './signals-counter-demo.html',
  styleUrls: ['./signals-counter-demo.scss'], // unchanged
})
export class SignalsCounterDemo {

  // --------------------------------------------
  // 🔥 Core Signal State (WritableSignal<number>)
  // --------------------------------------------
  counter = signal(0);

  // 👉 Derived signal using computed()
  doubleCounter = computed(() => this.counter() * 2);

  // 👉 Effect to react to counter changes (like a watcher)
  constructor() {
    effect(() => {
      console.log('Counter updated:', this.counter());
    });
  }

  // Increment counter
  increment() {
    this.counter.update(v => v + 1);
  }

  // Decrement counter
  decrement() {
    this.counter.update(v => v - 1);
  }

  // --------------------------------------------
  // 📘 Educational Theory Section
  // --------------------------------------------
  theory = {
    title: 'Signals Counter in Angular — Complete Deep Dive (Angular 16–20)',
    content: `
      <h3>What Is a Signals Counter?</h3>
      <p>
        A signals-based counter demonstrates Angular's new <strong>reactivity model</strong>, where values update the UI 
        automatically—without using RxJS, change detection cycles, or zone.js patches.
      </p>

      <h3>Why Signals Counters Matter</h3>
      <ul>
        <li><strong>Fine-grained reactivity</strong> — only affected UI updates, not the entire component tree.</li>
        <li><strong>No subscriptions required</strong> — signals are synchronous and auto cleanup.</li>
        <li><strong>Simpler than RxJS</strong> for UI state.</li>
        <li><strong>Perfect performance</strong> — avoids global change detection triggers.</li>
        <li><strong>Deterministic state updates</strong> — no async race conditions.</li>
      </ul>

      <h3>Computed Signals (Derived State)</h3>
      <p>
        Computed signals recalculate only when their dependencies change:
      </p>

      <pre><code>doubleCounter = computed(() => this.counter() * 2);</code></pre>

      <h3>Effects (Side Effects on State)</h3>
      <p>
        Effects run automatically whenever one of their dependent signals updates:
      </p>

      <pre><code>effect(() => console.log(this.counter()));</code></pre>

      <h3>Signals vs RxJS (Interview MUST KNOW)</h3>
      <ul>
        <li><strong>Signals</strong>: synchronous, predictable UI reactivity.</li>
        <li><strong>RxJS</strong>: async streams, ideal for backend events & complex operators.</li>
        <li>Angular recommends: <strong>Signals for UI state, RxJS for async flows.</strong></li>
      </ul>

      <h3>Performance Benefits of Signals</h3>
      <ul>
        <li>No global change detection.</li>
        <li>No zone.js dependency for UI updates (Angular 18+ future).</li>
        <li>No subscription overhead.</li>
        <li>Minimal re-renders — only nodes depending on signals update.</li>
      </ul>

      <h3>Signals Internals (Deep Explanation)</h3>
      <ul>
        <li>Signals use a dependency graph to track what needs updates.</li>
        <li>Computed signals are memoized — they only compute when dependencies change.</li>
        <li>Effects create watchers that run synchronously.</li>
        <li>No microtasks/macrotasks — signals execute instantly.</li>
      </ul>

      <h3>Common Interview Questions You Can Now Answer</h3>
      <ul>
        <li>How are signals different from BehaviorSubject?</li>
        <li>What is a computed signal?</li>
        <li>Explain signal dependency tracking.</li>
        <li>When should you use update() vs set()?</li>
        <li>Do signals trigger Angular change detection?</li>
        <li>How do effects avoid memory leaks?</li>
      </ul>
    `
  };

  // --------------------------------------------
  // 📘 Example Code Shown in UI
  // --------------------------------------------
  codeExample = `
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals-counter-demo',
  standalone: true,
  template: \`
    <h1>{{ counter() }}</h1>
  \`
})
export class SignalsCounterDemo {
  counter = signal(0);

  increment() {
    this.counter.set(this.counter() + 1);
  }

  decrement() {
    this.counter.set(this.counter() - 1);
  }
}
`.trim();

}
