import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-import-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-import-demo.html',
  styleUrl: './dynamic-import-demo.scss',
})
export class DynamicImportDemo {
  loadedMessage = '';
  isLoaded = false;

  theory = {
    title: 'Dynamic Import Demo — Lazy Execution & On-Demand Loading (Angular 17–20)',
    content: `
      <h3>What Are Dynamic Imports?</h3>
      <p>
        Dynamic imports allow Angular applications to <strong>load JavaScript files (modules or components)
        only when needed</strong>, instead of bundling everything upfront.
      </p>

      <p>
        They use the native <code>import()</code> syntax and are essential for lazy loading, code-splitting,
        and optimizing Angular performance.
      </p>

      <h3>Why Dynamic Imports Matter</h3>
      <ul>
        <li><strong>Smaller initial bundle</strong> — faster startup time.</li>
        <li><strong>Load features on demand</strong> — ideal for admin panels, dashboards, modals.</li>
        <li><strong>Supports lazy-loaded components</strong> — Angular 16+ uses <code>loadComponent()</code>.</li>
        <li><strong>Improves Core Web Vitals</strong> — especially LCP & FID.</li>
      </ul>

      <h3>Dynamic Imports — Real Angular Usage</h3>
      <p>Angular 16+ allows loading standalone components dynamically:</p>

      <pre><code>
import { loadComponent } from '@angular/core';

const comp = await loadComponent(() =>
  import('./lazy/lazy.component').then(m => m.LazyComponent)
);
      </code></pre>

      <h3>Lazy Components vs Lazy Modules</h3>
      <ul>
        <li><strong>Lazy Modules (old Angular)</strong> — via <code>loadChildren</code>.</li>
        <li><strong>Lazy Standalone Components (new Angular)</strong> — via <code>loadComponent()</code>.</li>
      </ul>

      <h3>Dynamic Imports + Routing</h3>
      <pre><code>
{
  path: 'profile',
  loadComponent: () => import('./profile/profile.component')
    .then(m => m.ProfileComponent)
}
      </code></pre>

      <h3>SSR Considerations</h3>
      <ul>
        <li>Dynamic imports work normally on server and browser.</li>
        <li>Angular hydration ensures lazy blocks attach correctly after load.</li>
      </ul>

      <h3>Performance Best Practices</h3>
      <ul>
        <li>Lazy-load non-critical features.</li>
        <li>Use <code>import()</code> only when necessary.</li>
        <li>Combine with <code>Defer</code> blocks for max performance (Angular 17+).</li>
      </ul>

      <h3>Common Interview Questions</h3>
      <ul>
        <li>Difference between static and dynamic imports?</li>
        <li>How does lazy loading reduce bundle size?</li>
        <li>Explain Angular's <code>loadComponent()</code> API.</li>
        <li>How does Angular handle dynamic imports in SSR?</li>
        <li>What is the role of code-splitting?</li>
      </ul>
    `
  };

  codeExample = `
async loadComponent() {
  const { LazyComponent } = await import('./lazy/lazy.component');
  this.loadedMessage = 'Lazy Component Loaded!';
  this.isLoaded = true;
}
`.trim();

  async loadComponent() {
    // Simulated dynamic import for demo
    await new Promise((resolve) => setTimeout(resolve, 500));
    this.loadedMessage = 'Lazy Component Loaded!';
    this.isLoaded = true;
  }
}
