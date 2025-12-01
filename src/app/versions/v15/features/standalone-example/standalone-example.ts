import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone-example',
  templateUrl: './standalone-example.html',
  styleUrl: './standalone-example.scss', // unchanged as requested
})
export class StandaloneExample {

  theory = {
    title: 'Standalone Components — Practical Example (Angular 15–20)',
    content: `
      <h3>What Does a Standalone Component Look Like?</h3>
      <p>
        Standalone components allow Angular components to work <strong>without NgModules</strong>.
        Instead of declaring components inside a module, Angular lets you declare component dependencies
        directly inside the component itself using the <code>imports</code> array.
      </p>

      <p>
        This makes components <strong>self-contained</strong>, <strong>more reusable</strong>, and 
        <strong>easier to manage</strong>. It also aligns Angular with modern frontend architecture seen in 
        frameworks like React, Vue, Svelte, and SolidJS.
      </p>

      <h3>Key Benefits of Standalone Components</h3>
      <ul>
        <li><strong>Simplified architecture</strong> — no NgModule boilerplate required.</li>
        <li><strong>Direct imports</strong> — components declare their own dependencies cleanly.</li>
        <li><strong>Better tree-shaking</strong> — unused components are removed from the final bundle.</li>
        <li><strong>Easier onboarding</strong> — new developers focus on components, not modules.</li>
        <li><strong>Feature encapsulation</strong> — each standalone component represents a complete feature boundary.</li>
        <li><strong>Cleaner lazy-loading</strong> — works with \`loadComponent\` directly in routing.</li>
        <li><strong>Ideal for large apps</strong> — reduces module complexity and improves performance.</li>
      </ul>

      <h3>How Standalone Components Fit into Modern Angular</h3>
      <ul>
        <li><strong>Routing supports standalone</strong> via <code>loadComponent()</code>.</li>
        <li><strong>Dependency Injection</strong> works with route-level and component-level providers.</li>
        <li>Standalone works perfectly with <strong>Signals</strong>, <strong>functional guards</strong>, 
            and <strong>functional resolvers</strong> (Angular 16+).</li>
        <li><strong>Angular CLI</strong> defaults to standalone mode now (Angular 17+).</li>
      </ul>

      <h3>Standalone + Routing (Very Common Interview Topic)</h3>
      <pre><code>{
  path: 'hello',
  loadComponent: () =>
    import('./hello-example').then(m => m.HelloExampleComponent)
}</code></pre>

      <p>This eliminates the need for lazy-loaded NgModules entirely.</p>

      <h3>Standalone Components + Feature Architecture</h3>
      <p>
        Standalone components allow cleaner folder structures:
      </p>

      <pre><code>example-feature/
  standalone-example.ts
  standalone-example.html
  standalone-example.scss
  example.routes.ts
  example.service.ts</code></pre>

      <h3>Performance Advantages</h3>
      <ul>
        <li><strong>Lower memory overhead</strong> — no module metadata tree.</li>
        <li><strong>Faster builds</strong> — ESBuild + standalone improves build graph.</li>
        <li><strong>Better code splitting</strong> — each standalone component acts as an independent entry point.</li>
      </ul>

      <h3>When Should You Use Standalone Components?</h3>
      <ul>
        <li>Any new Angular project (Angular 16+ default).</li>
        <li>Lazy-loaded pages or routes.</li>
        <li>Reusable UI elements (cards, modals, badges, lists).</li>
        <li>Isolated feature areas in a large-scale app.</li>
      </ul>

      <h3>When Should You Still Use NgModules?</h3>
      <ul>
        <li>Legacy AngularJS hybrid apps.</li>
        <li>Older libraries not compatible with standalone yet.</li>
        <li>Large enterprise apps with module-based architecture (for now).</li>
      </ul>
    `
  };

  codeExample = `
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hello-example',
  standalone: true,
  imports: [CommonModule],
  template: '<p>Hello from a standalone example component!</p>',
})
export class HelloExampleComponent {}
`.trim();

}
