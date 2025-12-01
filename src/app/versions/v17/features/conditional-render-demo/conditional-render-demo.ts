import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // provides @if, @for, @switch

@Component({
  selector: 'app-conditional-render-demo',
  standalone: true,
  templateUrl: './conditional-render-demo.html',
  styleUrls: ['./conditional-render-demo.scss'], // unchanged
  imports: [CommonModule],
})
export class ConditionalRenderDemo {

  showContent = true;
  userRole = 'admin'; // for @switch examples

  theory = {
    title: 'Conditional Rendering in Angular — Complete Deep Dive (Angular 17–20)',
    content: `
      <h3>What is Conditional Rendering?</h3>
      <p>
        Conditional rendering allows Angular to <strong>show or hide</strong> parts of a template based on
        truthy or falsy expressions.  
        Angular 17 introduced its new block-based syntax:
      </p>

      <pre><code>@if (condition) { ... }</code></pre>

      <p>This syntax replaces the older <strong>*ngIf</strong> structural directive.</p>

      <h3>Why Conditional Rendering Matters</h3>
      <ul>
        <li><strong>Dynamic UI</strong> — content adapts based on state.</li>
        <li><strong>Performance</strong> — Angular removes nodes from DOM, not just hides them.</li>
        <li><strong>Cleaner syntax</strong> with @if / @else blocks.</li>
        <li><strong>Better compiler optimizations</strong> (fewer change detection checks).</li>
        <li><strong>Essential for authentication flows</strong> (admin vs user UI).</li>
      </ul>

      <h3>Comparison: @if vs *ngIf (Important Interview Topic)</h3>
      <ul>
        <li><strong>@if</strong> is compiled natively by Angular's template parser.</li>
        <li><strong>*ngIf</strong> uses a structural directive wrapper.</li>
        <li><strong>@if</strong> performs better and is more readable.</li>
        <li>@if supports <strong>@else</strong> and <strong>@else if</strong> blocks naturally.</li>
      </ul>

      <pre><code>
@if (isLoggedIn) {
  Welcome!
} @else if (isGuest) {
  Please sign in.
} @else {
  Unknown user.
}
      </code></pre>

      <h3>DOM Behavior (Creation & Destruction)</h3>
      <ul>
        <li>@if completely <strong>creates/destroys</strong> DOM nodes.</li>
        <li>Hidden blocks do not exist in the DOM at all.</li>
        <li>Angular re-evaluates only when dependencies change.</li>
      </ul>

      <h3>@switch — Conditional Multi-Branch Logic</h3>
      <pre><code>
@switch (userRole) {
  @case ('admin') { &lt;p&gt;Admin Panel&lt;/p&gt; }
  @case ('user')  { &lt;p&gt;User Dashboard&lt;/p&gt; }
  @default        { &lt;p&gt;Guest View&lt;/p&gt; }
}
      </code></pre>

      <h3>@defer — Conditional Lazy Rendering (Angular 17+)</h3>
      <p>Useful for heavy sections (charts, maps, tables):</p>

      <pre><code>
@defer (when loaded) {
  &lt;app-heavy-chart /&gt;
}
      </code></pre>

      <h3>Signals + @if (Best Practice)</h3>
      <p>Signals make conditional rendering reactive and fast:</p>

      <pre><code>
visible = signal(false);

@if (visible()) {
  &lt;p&gt;Now visible&lt;/p&gt;
}
      </code></pre>

      <h3>Common Interview Questions</h3>
      <ul>
        <li>Difference between @if and *ngIf?</li>
        <li>How does Angular destroy DOM nodes in conditional rendering?</li>
        <li>When to use @switch vs normal if/else?</li>
        <li>Explain @defer and when to use it.</li>
        <li>How does conditional rendering impact performance?</li>
      </ul>
    `
  };

  codeExample = `
@if (showContent) {
  <p>This content is conditionally rendered.</p>
} @else {
  <p>The content is hidden.</p>
}

<button (click)="showContent = !showContent">
  Toggle Content
</button>
`.trim();

}
