import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-incremental-hydration-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './incremental-hydration-demo.html',
  styleUrl: './incremental-hydration-demo.scss',
})
export class IncrementalHydrationDemo {
  // Signal that will hydrate only when this component is activated
  private _hydratedCounter = signal(0);

  get hydratedCounter(): number {
    return this._hydratedCounter();
  }
  set hydratedCounter(value: number) {
    this._hydratedCounter.set(value);
  }

  theory = {
    title: 'Incremental Hydration in Angular — Deep Dive (Angular 17–20)',
    content: `
      <h3>What is Incremental Hydration?</h3>
      <p>
        Incremental Hydration is the process where a server-rendered Angular application 
        <strong>hydrates only specific components</strong> instead of the entire page at once.
        Angular selectively attaches event listeners, signals, and reactive behavior 
        <strong>component-by-component</strong>.
      </p>

      <h3>Why Incremental Hydration Matters</h3>
      <ul>
        <li><strong>Faster initial page load</strong> — only essential components hydrate immediately.</li>
        <li><strong>Reduced JavaScript execution cost</strong> — non-interactive sections stay static.</li>
        <li><strong>Improved Core Web Vitals</strong> — especially LCP and TBT.</li>
        <li><strong>Scales better</strong> for large SSR apps with many widgets/components.</li>
      </ul>

      <h3>How Angular Performs Incremental Hydration</h3>
      <ol>
        <li>The server renders the full HTML of the page.</li>
        <li>The client loads minimal JS needed for the current component.</li>
        <li>Angular hydrates <strong>only the visible / interactive components</strong>.</li>
        <li>Other components hydrate later on user interaction or visibility.</li>
      </ol>

      <h3>Key Features of Incremental Hydration</h3>
      <ul>
        <li><strong>Component-level hydration</strong> — hydrate each component independently.</li>
        <li><strong>Deferred hydration</strong> — hydrate when needed (e.g., inside viewport).</li>
        <li><strong>Optimized rendering</strong> — drastically less JS during page bootstrap.</li>
        <li><strong>Signals hydrate instantly</strong> when the component becomes active.</li>
      </ul>

      <h3>Incremental Hydration vs Full Hydration</h3>
      <ul>
        <li><strong>Full hydration:</strong> entire page becomes interactive immediately.</li>
        <li><strong>Incremental hydration:</strong> only components that need interaction hydrate.</li>
      </ul>

      <h3>Real Use Cases</h3>
      <ul>
        <li>Product listing: hydrate buttons, but not static text blocks.</li>
        <li>Dashboard widgets hydrating on scroll.</li>
        <li>Blog site with interactive sections hydrating lazily.</li>
        <li>Complex e-commerce pages with many components.</li>
      </ul>

      <h3>Angular Features That Work With Incremental Hydration</h3>
      <ul>
        <li><strong>Signals</strong> — they hydrate cleanly and re-sync state.</li>
        <li><strong>View Transitions</strong> — hydrate views progressively.</li>
        <li><strong>Defer Blocks</strong> (Angular 17) — hydrate only when visible or interacted with.</li>
        <li><strong>Lazy-loaded components</strong> — hydrate at import time.</li>
      </ul>

      <h3>Example of Deferred / Incremental Hydration</h3>
      <pre><code>
@defer (on viewport) {
  <my-interactive-widget />
}
      </code></pre>

      <h3>Interview Questions</h3>
      <ul>
        <li>Explain the difference between SSR Hydration and Incremental Hydration.</li>
        <li>What happens if a component with events is not hydrated yet?</li>
        <li>How do Signals behave before and after hydration?</li>
        <li>What is the role of Angular's Defer Blocks in incremental hydration?</li>
        <li>Describe hydration mismatches and how Angular prevents them.</li>
      </ul>
    `
  };

  codeExample = `
<button (click)="hydratedCounter = hydratedCounter + 1">
  Increment Hydrated Counter
</button>

<p>Current hydrated counter: {{ hydratedCounter }}</p>
`.trim();

  // Simple increment method
  increment() {
    this.hydratedCounter = this.hydratedCounter + 1;
  }
}
