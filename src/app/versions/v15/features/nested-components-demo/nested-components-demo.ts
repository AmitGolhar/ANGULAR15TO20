import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-components-demo',
  templateUrl: './nested-components-demo.html',
  styleUrl: './nested-components-demo.scss', // kept EXACTLY as you said
})
export class NestedComponentsDemo {

  theory = {
    title: 'Nested Components in Angular — Complete Guide (Angular 15–20)',
    content: `
      <h3>What Are Nested Components?</h3>
      <p>
        Nested components are components that are <strong>rendered inside other components</strong>.
        They help break down UIs into small, reusable, isolated units.
        Angular encourages building applications from many small nested components rather than one giant component.
      </p>

      <h3>Why Nested Components Matter</h3>
      <ul>
        <li><strong>Reusability</strong> — the same child component can be used across multiple parent screens.</li>
        <li><strong>Separation of concerns</strong> — UI logic stays inside the appropriate component.</li>
        <li><strong>Clean architecture</strong> — complex pages become easy to structure and maintain.</li>
        <li><strong>Scalability</strong> — teams can work on separate components independently.</li>
        <li><strong>Improved testability</strong> — each component has isolated logic and DOM.</li>
        <li><strong>Better change detection control</strong> — smaller components update more efficiently.</li>
      </ul>

      <h3>How Data Flows Between Nested Components</h3>
      <ul>
        <li><strong>@Input()</strong> — parent → child communication (data flows downward).</li>
        <li><strong>@Output()</strong> — child → parent communication (events bubble upward).</li>
        <li><strong>Services</strong> — shared logic/data between multiple nested components.</li>
        <li><strong>Signals (Angular 16+)</strong> — modern reactive communication without RxJS boilerplate.</li>
      </ul>

      <pre><code>// Parent → Child communication
&lt;app-child [title]="parentTitle"&gt;&lt;/app-child&gt;

// Child Component
@Input() title!: string;</code></pre>

      <pre><code>// Child → Parent communication
&lt;app-child (selected)="onChildSelected($event)"&gt;&lt;/app-child&gt;

// Child Component
@Output() selected = new EventEmitter&lt;string&gt;();</code></pre>

      <h3>Smart vs Dumb Components (Interview MUST KNOW)</h3>
      <ul>
        <li><strong>Smart Components</strong>: Handle API calls, business logic, state management.  
            Usually parents.</li>
        <li><strong>Dumb Components</strong>: Pure UI + @Input/@Output, no business logic.  
            Usually children.</li>
      </ul>

      <p>This is a common architecture in real Angular applications.</p>

      <h3>How Nested Components Affect Change Detection</h3>
      <ul>
        <li>Each child has its own <strong>change detection boundary</strong>.</li>
        <li>OnPush children update faster because they only react to:</li>
        <ul>
          <li>@Input() changes</li>
          <li>Events</li>
          <li>Observable/Signal emissions</li>
        </ul>
        <li>Smaller components = fewer DOM checks = better performance.</li>
      </ul>

      <h3>Folder Structure for Nested Components (Best Practice)</h3>
      <pre><code>parent-component/
  parent-component.ts
  parent-component.html
  parent-component.scss
  child/
    child.component.ts
    child.component.html
    child.component.scss</code></pre>

      <h3>View Encapsulation & Nested Components</h3>
      <ul>
        <li>Each component gets its own style boundary unless using <code>ViewEncapsulation.None</code>.</li>
        <li>Nested components can safely use overlapping class names without conflict.</li>
        <li>Shadow DOM mode can be used for complete isolation.</li>
      </ul>

      <h3>Projection vs Nesting</h3>
      <p>Nested components ≠ projected content.</p>
      <ul>
        <li><strong>Nested</strong> = child component tag inside parent template.</li>
        <li><strong>ng-content (projection)</strong> = parent injects content into child.</li>
      </ul>

      <pre><code>&lt;app-card&gt;
  &lt;p&gt;Injected content&lt;/p&gt;
&lt;/app-card&gt;</code></pre>

      <h3>When Should You Use Nested Components?</h3>
      <ul>
        <li>Repeating UI blocks (cards, product boxes, list items).</li>
        <li>Reusable widgets (modals, tabs, buttons).</li>
        <li>Page sections (header, sidebar, footer).</li>
        <li>Any UI element that repeats or is complex enough to isolate.</li>
      </ul>

      <h3>When NOT to create nested components?</h3>
      <ul>
        <li>Too many ultra-small components — leads to over-fragmentation.</li>
        <li>When no reusable logic or UI exists.</li>
        <li>When it adds unnecessary complexity.</li>
      </ul>
    `
  };

  codeExample = `
<!-- Parent Component Template -->
<app-child
  [title]="'Nested Child Title'"
  (selected)="onChildEvent($event)"
></app-child>

<!-- Child Component Template -->
<h4>{{ title }}</h4>
<p>This is a nested child component.</p>
<button (click)="selected.emit('clicked')">Notify Parent</button>
`.trim();

}
