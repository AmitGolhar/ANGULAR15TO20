import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nested-views-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nested-views-demo.html',
  styleUrl: './nested-views-demo.scss', // unchanged
})
export class NestedViewsDemo {

  showHeader = true;
  showFooter = true;
  items = ['First', 'Second', 'Third'];

  theory = {
    title: 'Nested Views Demo in Angular — Complete Deep Dive (Angular 17–20)',
    content: `
      <h3>What Are Nested Views?</h3>
      <p>
        Nested views represent multiple UI sections (header, list, footer, sub-sections) 
        that are conditionally shown or repeated within one template.  
        With Angular 17+, nested views use <strong>@if</strong>, <strong>@for</strong>, and <strong>@switch</strong>
        for clean, block-based template organization.
      </p>

      <h3>Why Nested Views Matter</h3>
      <ul>
        <li><strong>UI Composition</strong> — break large templates into logical parts.</li>
        <li><strong>Reusable view layouts</strong> — header/content/footer pattern.</li>
        <li><strong>Conditional display</strong> — useful for dashboards, modals, forms, etc.</li>
        <li><strong>Clean separation</strong> of content vs structure.</li>
      </ul>

      <h3>Nested @if (Modern Angular Syntax)</h3>
      <pre><code>
@if (showHeader) {
  &lt;h2&gt;Header&lt;/h2&gt;
}

@if (showFooter) {
  &lt;footer&gt;Footer&lt;/footer&gt;
}
      </code></pre>

      <h3>Nested @for (List Rendering)</h3>
      <pre><code>
@for (item of items; track item) {
  &lt;li&gt;{{ item }}&lt;/li&gt;
}
      </code></pre>

      <h3>Deeply Nested Templates (Parent → Children → List)</h3>
      <p>Angular compiles nested views into independent blocks, improving performance.</p>

      <pre><code>
@if (showHeader) {
  Header

  @for (item of items) {
    {{ item }}
  }
}
      </code></pre>

      <h3>Nested Views + Signals (Best Practice)</h3>
      <p>Using Signals ensures immediate, fine-grained UI updates:</p>

      <pre><code>
showHeader = signal(true);

@if (showHeader()) {
  ...
}
      </code></pre>

      <h3>Use Cases in Real Apps</h3>
      <ul>
        <li>Dashboard pages (header + widgets + footer)</li>
        <li>Cards with expandable sections</li>
        <li>Master-detail views</li>
        <li>Chat layout (sidebar + message list)</li>
      </ul>

      <h3>SSR (Server-Side Rendering) Behavior</h3>
      <ul>
        <li>@if and @for render final HTML on the server</li>
        <li>Better SEO when sections contain content</li>
        <li>No JavaScript delay for conditional sections</li>
      </ul>

      <h3>Performance Considerations</h3>
      <ul>
        <li>Nested views re-render only when their dependencies change.</li>
        <li>@for with <strong>track</strong> improves diffing performance.</li>
        <li>Separate sections reduce unnecessary DOM creation.</li>
      </ul>

      <h3>Common Interview Questions</h3>
      <ul>
        <li>How do nested @if and @for blocks work internally?</li>
        <li>What is the difference between nested views and child components?</li>
        <li>Why is track important inside nested loops?</li>
        <li>How do nested views help organize large templates?</li>
        <li>How does Angular’s block-based rendering improve performance?</li>
      </ul>
    `
  };

  codeExample = `
@if (showHeader) {
  <h2>Header Section</h2>
}

<ul>
  @for (item of items; track item) {
    <li>{{ item }}</li>
  }
</ul>

@if (showFooter) {
  <p>Footer Section</p>
}
`.trim();

}
