import { Component, signal, effect, computed, untracked } from '@angular/core';

@Component({
  selector: 'app-signals-example',
  standalone: true,
  templateUrl: './signals-example.html',
  styleUrls: ['./signals-example.scss'], // unchanged
})
export class SignalsExample {

  // --------------------------------------------
  // 🔥 Signal State
  // --------------------------------------------
  count = signal(0);

  // Computed signal (auto-calculated derived state)
  doubleCount = computed(() => this.count() * 2);

  // Triple count using nested computed chain
  tripleCount = computed(() => this.doubleCount() + this.count());

  // Effect – reacts automatically when dependent signals update
  constructor() {
    effect(() => {
      console.log('Count updated:', this.count());
    });
  }

  // Methods to update signals
  increment() {
    this.count.update(v => v + 1); // recommended over set()
  }

  decrement() {
    this.count.update(v => v - 1);
  }

  reset() {
    this.count.set(0);
  }

  // --------------------------------------------
  // 📘 THEORY — MASTER LEVEL EXPLANATION
  // --------------------------------------------
  theory = {
    title: 'Signals in Angular — Complete Deep Dive (Angular 16–20)',
    content: `
      <h3>What Are Signals?</h3>
      <p>
        Signals are Angular’s new <strong>reactive state mechanism</strong>.  
        They store a value, track dependencies, and automatically notify the UI or computed logic when the value changes.
      </p>

      <h3>Why Signals Are Important</h3>
      <ul>
        <li><strong>Zero subscriptions</strong> — no manual subscribe/unsubscribe.</li>
        <li><strong>Fine-grained reactivity</strong> — only affected DOM updates.</li>
        <li><strong>Synchronous state changes</strong> — no async delays like Observables.</li>
        <li><strong>Ideal for UI state</strong> — forms, button states, counters, filters, modals.</li>
        <li><strong>100% predictable</strong> — no unexpected emissions or race conditions.</li>
      </ul>

      <h3>Computed Signals (Derived State)</h3>
      <p>These automatically recompute only when their dependencies change.</p>
      <pre><code>doubleCount = computed(() => this.count() * 2);</code></pre>

      <h3>Effects (React to Changes)</h3>
      <p>Used for side effects like logging, API calls, analytics.</p>
      <pre><code>effect(() => console.log(this.count()));</code></pre>

      <h3>untracked() — Prevent Accidental Dependencies</h3>
      <p>Use untracked() inside a computed/effect to avoid linking signals you don’t want to track.</p>
      <pre><code>
effect(() => {
  const safeValue = untracked(() => this.count());
});
      </code></pre>

      <h3>Signals vs RxJS (Interview MUST KNOW)</h3>
      <ul>
        <li><strong>Signals</strong>: synchronous UI reactivity.</li>
        <li><strong>RxJS</strong>: asynchronous data streams.</li>
        <li>Use <strong>Signals for UI</strong> & <strong>RxJS for HTTP/WebSocket streams</strong>.</li>
      </ul>

      <h3>Performance Benefits</h3>
      <ul>
        <li>No global change detection needed.</li>
        <li>No re-rendering of unrelated components.</li>
        <li>No zone.js dependency (future Angular 18+).</li>
        <li>Computed signals are memoized.</li>
      </ul>

      <h3>Signal Lifecycle</h3>
      <ul>
        <li>Reads create dependencies.</li>
        <li>Writes trigger propagation.</li>
        <li>Computed values re-evaluate lazily.</li>
        <li>Effects run automatically.</li>
      </ul>

      <h3>Common Use Cases</h3>
      <ul>
        <li>UI state (counter, toggles, theme, sidebar)</li>
        <li>Forms & dynamic validation</li>
        <li>Filters & search state</li>
        <li>Pagination, sorting</li>
        <li>Dashboard widgets</li>
      </ul>

      <h3>Advanced Topics (Top Interview Questions)</h3>
      <ul>
        <li>How signals store and track dependencies internally.</li>
        <li>Difference between set(), update(), mutate().</li>
        <li>How computed signals avoid unnecessary recalculations.</li>
        <li>Effect cleanup mechanism.</li>
        <li>Signals vs MobX / SolidJS reactivity.</li>
        <li>Microtask vs synchronous execution model.</li>
      </ul>
    `
  };

  // --------------------------------------------
  // 📘 Code Example Shown in UI
  // --------------------------------------------
  codeExample = `
import { signal, computed, effect } from '@angular/core';

const count = signal(0);
const doubleCount = computed(() => count() * 2);

effect(() => {
  console.log('Count changed:', count());
});

count.set(5); 
// doubleCount becomes 10 automatically
`.trim();

}
