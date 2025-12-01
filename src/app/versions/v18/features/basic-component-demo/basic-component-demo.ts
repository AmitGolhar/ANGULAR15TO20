import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic-component-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-component-demo.html',
  styleUrl: './basic-component-demo.scss',
})
export class BasicComponentDemo {

  title = 'Basic Component Demo';
  message = 'This is a simple standalone component example.';

  theory = {
    title: 'Understanding Basic Components in Angular — Deep Dive (Angular 17–20)',
    content: `
      <h3>What Is a Basic Component?</h3>
      <p>
        A basic component is the <strong>smallest unit</strong> of UI in an Angular application.
        It combines <strong>template</strong> (HTML), <strong>styles</strong> (CSS/SCSS), and <strong>logic</strong> (TypeScript)
        into a single reusable UI block.
      </p>

      <h3>Key Responsibilities of a Component</h3>
      <ul>
        <li>Defines how a section of the UI looks (template).</li>
        <li>Controls what happens inside that UI (class logic).</li>
        <li>Applies appearance through styles.</li>
        <li>Encapsulates behavior — making pieces of UI reusable.</li>
      </ul>

      <h3>Standalone Components (Modern Angular Default)</h3>
      <p>
        Angular 16+ introduced standalone components, removing the need for NgModules.  
        This makes applications easier to structure and reduces boilerplate.
      </p>
      <ul>
        <li>No <code>NgModule</code> needed — component imports what it needs.</li>
        <li>Simplifies project architecture.</li>
        <li>Better tree shaking → smaller bundle size.</li>
        <li>Faster builds, faster mental model for developers.</li>
      </ul>

      <h3>Component Metadata (Important for Interviews)</h3>
      <pre><code>
selector: 'app-basic'
templateUrl: './basic.html'
styleUrls: ['./basic.scss']
standalone: true
imports: [CommonModule]
      </code></pre>

      <h3>Lifecycle Hooks (Optional but Important)</h3>
      <pre><code>
ngOnInit()
ngOnChanges()
ngAfterViewInit()
ngOnDestroy()
      </code></pre>
      <p>Hooks help manage component initialization, DOM updates, subscriptions, and cleanup.</p>

      <h3>Signals Alternative (Angular 17+)</h3>
      <pre><code>
title = signal('Basic Component');
message = signal('Standalone component example.');
      </code></pre>

      <p>
        Signals provide reactive state — UI updates automatically when values change.
      </p>

      <h3>Component Communication (Most Asked in Interviews)</h3>
      <ul>
        <li><strong>@Input()</strong> → pass data from parent to child.</li>
        <li><strong>@Output()</strong> → child sends events to parent.</li>
        <li><strong>Services</strong> → shared state & logic.</li>
        <li><strong>Signals</strong> → shared reactive state.</li>
      </ul>

      <h3>Rendering Pipeline Basics</h3>
      <p>Angular performs:</p>
      <ol>
        <li>Component creation (constructor)</li>
        <li>Template compilation</li>
        <li>Change detection & DOM update</li>
        <li>Re-render when inputs/signals/event triggers</li>
      </ol>

      <h3>Common Interview Questions</h3>
      <ul>
        <li>What are standalone components and why were they introduced?</li>
        <li>Difference between template, class, and metadata?</li>
        <li>Explain change detection in Angular.</li>
        <li>How do @Input and @Output work?</li>
        <li>What are signals and how do they compare to Observables?</li>
        <li>Lifecycle hooks and their use cases?</li>
      </ul>
    `
  };

  codeExample = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-component-demo',
  template: '<p>{{ message }}</p>',
})
export class BasicComponentDemo {
  message = 'This is a simple standalone component example.';
}
`.trim();

}
