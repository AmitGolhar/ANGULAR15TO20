import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // provides @for, @if, @switch

@Component({
  selector: 'app-control-flow-for-demo',
  standalone: true,
  templateUrl: './control-flow-for-demo.html',
  styleUrls: ['./control-flow-for-demo.scss'], // unchanged
  imports: [CommonModule],
})
export class ControlFlowForDemo {

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  theory = {
    title: 'Control Flow with @for in Angular — Complete Deep Dive (Angular 17–20)',
    content: `
      <h3>What is @for?</h3>
      <p>
        <code>@for</code> is Angular's new high-performance loop syntax introduced in Angular 17.  
        It replaces <strong>*ngFor</strong> with a more readable, faster, compiler-optimized block structure.
      </p>

      <pre><code>
@for (item of items; track item) {
  {{ item }}
}
      </code></pre>

      <h3>Why @for Matters</h3>
      <ul>
        <li><strong>Better performance</strong> — optimized by Angular’s new block-based compiler.</li>
        <li><strong>Cleaner syntax</strong> — no * prefix, no structural directive boilerplate.</li>
        <li><strong>Supports @empty</strong> — built-in fallback when array is empty.</li>
        <li><strong>Stable identity tracking</strong> — prevents unnecessary re-renders.</li>
        <li><strong>Less change detection overhead</strong>.</li>
      </ul>

      <h3>@for vs *ngFor (Interview MUST KNOW)</h3>
      <ul>
        <li><code>@for</code> is compiled directly by Angular without directives.</li>
        <li><code>*ngFor</code> uses structural directive syntax → slightly slower, legacy.</li>
        <li><code>@for</code> includes built-in <strong>@empty</strong> block.</li>
        <li><code>@for</code> has unified scoping inside block.</li>
      </ul>

      <h3>Tracking Items (CRITICAL FOR PERFORMANCE)</h3>
      <p>
        Angular uses <strong>track</strong> to uniquely identify list items.
      </p>

      <pre><code>
// BAD: Angular will re-render entire list on update
@for (item of items) { ... }

// GOOD: track by identity or ID
@for (item of items; track item) { ... }
      </code></pre>

      <h3>@empty Block</h3>
      <p>Handles cases when array has no items:</p>

      <pre><code>
@for (item of items; track item) {
  {{ item }}
} @empty {
  No items found.
}
      </code></pre>

      <h3>Loop Context Variables</h3>
      <p>Inside @for, you automatically get:</p>
      <ul>
        <li><strong>index</strong> — current index</li>
        <li><strong>count</strong> — total items</li>
        <li><strong>first</strong> / <strong>last</strong></li>
        <li><strong>even</strong> / <strong>odd</strong></li>
      </ul>

      <pre><code>
@for (item of items; track item) {
  Index: {{ $index }}
  Is first: {{ $first }}
  Is last: {{ $last }}
}
      </code></pre>

      <h3>Iterating Numeric Ranges (Not Possible with *ngFor)</h3>
      <pre><code>
@for (i of 1..5) {
  Number: {{ i }}
}
      </code></pre>

      <h3>Signals + @for (Best Practice)</h3>
      <p>Signal-based lists update instantly, without re-rendering entire DOM trees:</p>

      <pre><code>
items = signal(['A', 'B', 'C']);

@for (item of items(); track item) {
  {{ item }}
}
      </code></pre>

      <h3>Performance Benefits</h3>
      <ul>
        <li>No structural directive overhead → faster DOM diffing.</li>
        <li>Better rendering on large lists.</li>
        <li>Compiler knows full block structure → optimized re-renders.</li>
      </ul>

      <h3>Interview Questions You Can Now Answer</h3>
      <ul>
        <li>Why is @for faster than *ngFor?</li>
        <li>What does "track" do in @for?</li>
        <li>How does Angular detect list mutations?</li>
        <li>What is the purpose of @empty?</li>
        <li>How does @for handle diffing & identity updates?</li>
        <li>Difference between structural directives and block-level syntax?</li>
      </ul>
    `
  };

  codeExample = `
<ul>
  @for (item of items; track item) {
    <li>{{ item }}</li>
  } @empty {
    <li>No items found.</li>
  }
</ul>
`.trim();

}
