import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hmr-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hmr-demo.html',
  styleUrl: './hmr-demo.scss',
})
export class HmrDemo {
  // Signal used to demonstrate HMR state preservation
  private _counter = signal(0);

  get counter(): number { return this._counter(); }
  set counter(value: number) { this._counter.set(value); }

  theory = {
    title: 'Hot Module Replacement (HMR) in Angular — Deep Dive',
    content: `
      <h3>What is HMR?</h3>
      <p>
        Hot Module Replacement (HMR) allows developers to update code in a running Angular application 
        <strong>without triggering a full page reload</strong>. This preserves state and provides faster 
        development cycles.
      </p>

      <h3>Why HMR Matters</h3>
      <ul>
        <li><strong>Preserves state</strong> — your counters, forms, UI state remain intact.</li>
        <li><strong>Much faster iteration</strong> — no full reload required.</li>
        <li><strong>Better DX</strong> — instant feedback loop when modifying UI or logic.</li>
        <li><strong>Pairs perfectly with Signals</strong> — signals keep state neatly encapsulated.</li>
      </ul>

      <h3>How Angular HMR Works Under the Hood</h3>
      <p>
        Angular CLI uses the Vite/webpack HMR APIs to:
      </p>
      <ol>
        <li>Patch the updated module.</li>
        <li>Re-render only the affected component tree.</li>
        <li>Skip destroying the app root, preserving signals & component state.</li>
      </ol>
      <p>
        This means <code>counter</code>, forms, and UI states do <strong>not reset</strong> on save.
      </p>

      <h3>Signals + HMR = Perfect Pair</h3>
      <ul>
        <li>Signals store state locally inside the component.</li>
        <li>Angular HMR does <em>not recreate</em> the component root instance.</li>
        <li>So signal values remain exactly as they were before the code change.</li>
      </ul>

      <h3>Common Pitfalls with HMR</h3>
      <ul>
        <li>HMR works only in <strong>development mode</strong>.</li>
        <li>Global state or singletons may reload depending on build setup.</li>
        <li>Not ideal for debugging production behavior.</li>
        <li>Side-effect heavy services (websocket, intervals) must handle hot reload gracefully.</li>
      </ul>

      <h3>How to Enable HMR in Angular</h3>
      <pre><code>
ng serve --hmr
      </code></pre>
      <p>Or update <code>angular.json</code> to make HMR on by default.</p>

      <h3>Real Interview Questions</h3>
      <ul>
        <li>How does Angular preserve component state during HMR?</li>
        <li>What is the difference between HMR and live reload?</li>
        <li>Does HMR reload modules, components, or both?</li>
        <li>How does HMR behave with Signals?</li>
        <li>Can HMR be used in production?</li>
      </ul>
    `
  };

  codeExample = `
<button (click)="counter = counter + 1">Increment</button>
<p>Current count: {{ counter }}</p>
`.trim();

  // Method used in UI
  increment() {
    this.counter = this.counter + 1;
  }
}
