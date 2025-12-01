import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hydration-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hydration-demo.html',
  styleUrl: './hydration-demo.scss',
})
export class HydrationDemo {
  message = 'This content was rendered on the server and hydrated on the client.';

  theory = {
    title: 'Hydration in Angular — SSR to Client Activation (Angular 17–20)',
    content: `
      <h3>What Is Hydration?</h3>
      <p>
        Hydration is the process where Angular takes <strong>server-rendered HTML</strong> (SSR output)
        and attaches <strong>client-side event listeners, state, and reactivity</strong>
        without re-rendering the entire UI.
      </p>

      <p>
        Instead of wiping server-rendered DOM and rebuilding it, Angular "hydrates" it and makes it interactive.
      </p>

      <h3>Why Hydration Matters</h3>
      <ul>
        <li><strong>Faster First Paint</strong> — server provides instant HTML.</li>
        <li><strong>Better SEO</strong> — full content is available to search engines.</li>
        <li><strong>No Flash/Flicker</strong> — DOM is reused instead of recreated.</li>
        <li><strong>Smooth user experience</strong> — app becomes interactive quicker.</li>
      </ul>

      <h3>How Angular Hydration Works Internally</h3>
      <ol>
        <li>Server renders HTML using Angular Universal.</li>
        <li>Browser loads HTML + JavaScript bundle.</li>
        <li>Angular scans the server DOM tree.</li>
        <li>Angular attaches event listeners to existing nodes.</li>
        <li>Signals and bindings become live without re-rendering.</li>
      </ol>

      <h3>Hydration vs Rehydration vs Client-Only Rendering</h3>
      <ul>
        <li><strong>SSR-only</strong> → loads fast but non-interactive.</li>
        <li><strong>CSR-only</strong> → blank page → JS loads → render UI.</li>
        <li><strong>Hydration</strong> → best of both → fast + interactive.</li>
      </ul>

      <h3>Angular 17+ Advanced Hydration Features</h3>
      <ul>
        <li><strong>Partial Hydration</strong> — hydrate only interactive zones.</li>
        <li><strong>Defer Hydration</strong> — <code>&lt;ng-defer-hydrate&gt;</code> waits for user interactions or visibility.</li>
        <li><strong>Event Replay</strong> — clicks/inputs before hydration are queued and replayed.</li>
        <li><strong>Streaming SSR</strong> — increases perceived speed.</li>
      </ul>

      <h3>Signals & Hydration (Important!)</h3>
      <p>
        Signals hydrate <strong>without resetting values</strong>.
        If a signal is set on the server, the client begins with that state.
      </p>

      <h3>Real Angular Code Example</h3>
      <pre><code>
<p>{{ message }}</p>
<button (click)="message = 'Hydration works! Client-side update!'">
  Update Message
</button>
      </code></pre>

      <h3>Hydration Performance Tips</h3>
      <ul>
        <li>Use <code>ng-defer-hydrate</code> for heavy components.</li>
        <li>Split UI into lazy-loaded sections.</li>
        <li>Avoid large DOM trees during SSR.</li>
      </ul>

      <h3>Common Interview Questions</h3>
      <ul>
        <li>Explain SSR and hydration in Angular.</li>
        <li>Difference between client rendering and hydrated SSR?</li>
        <li>How does Angular attach event listeners during hydration?</li>
        <li>What is partial hydration?</li>
        <li>Does hydration replace the DOM?</li>
        <li>How does Angular handle user events before hydration completes?</li>
        <li>What happens to signals during hydration?</li>
      </ul>
    `
  };

  codeExample = `
<p>{{ message }}</p>

<button (click)="message = 'Hydration works! Client-side update!'">
  Update Message
</button>
`.trim();
}
