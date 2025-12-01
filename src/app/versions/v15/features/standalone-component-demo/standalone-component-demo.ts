import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone-component-demo',
  templateUrl: './standalone-component-demo.html',
  styleUrl: './standalone-component-demo.scss', // kept EXACTLY as you requested
})
export class StandaloneComponentDemo {

  theory = {
    title: 'Angular Standalone Components — Complete Guide (Angular 15–20)',
    content: `
      <h3>What Are Standalone Components?</h3>
      <p>
        Standalone components allow Angular components to work <strong>without NgModules</strong>.
        Introduced experimentally in Angular 14, fully stable in Angular 15+, and now the 
        <strong>default recommended architecture</strong> for Angular 16–20.
      </p>

      <p>
        A standalone component imports everything it needs directly: directives, pipes, services, routes,
        forms, HttpClient, router, etc.  
        No more module declarations, no more module imports — <strong>component-first architecture</strong>.
      </p>

      <h3>Why Standalone Components Matter</h3>
      <ul>
        <li><strong>Removes NgModule boilerplate</strong> — cleaner, simpler Angular.</li>
        <li><strong>Better tree-shaking</strong> — unused components/pipes/directives are removed more effectively.</li>
        <li><strong>Faster builds</strong> — better build graph and faster ESBuild optimizations.</li>
        <li><strong>Easier onboarding</strong> — new developers understand the app faster.</li>
        <li><strong>Feature-based organization</strong> — each component becomes a feature boundary.</li>
        <li><strong>Direct imports</strong> — no more shared modules and import juggling.</li>
      </ul>

      <h3>How to Create a Standalone Component</h3>
      <pre><code>ng g component hello --standalone</code></pre>

      <h3>Key Metadata Changes</h3>
      <ul>
        <li><code>standalone: true</code> — marks the component as standalone.</li>
        <li><code>imports: []</code> — instead of NgModule imports.</li>
        <li>No need to declare the component in any module.</li>
      </ul>

      <pre><code>@Component({
  standalone: true,
  imports: [CommonModule]
})</code></pre>

      <h3>Standalone Components + Routing (Angular 15–20)</h3>
      <pre><code>{
  path: 'hello',
  loadComponent: () =>
    import('./hello.component').then(m => m.HelloComponent)
}</code></pre>

      <p>
        This is one of the biggest advantages:  
        <strong>components can be lazy-loaded directly without modules.</strong>
      </p>

      <h3>Standalone Components + Signals</h3>
      <p>
        Angular Signals (v16+) work naturally in standalone components without additional setup.
        This leads to simpler reactive state management compared to NgRx or Subjects.
      </p>

      <pre><code>count = signal(0);
increment() { this.count.update(v => v + 1); }</code></pre>

      <h3>Standalone Components + Dependency Injection</h3>
      <p>
        Angular 15+ allows <strong>functional DI</strong> inside standalone components:
      </p>

      <pre><code>const userService = inject(UserService);</code></pre>

      <p>No need to register services in NgModules.</p>

      <h3>Best Folder Structure for Standalone Architecture</h3>
      <pre><code>feature/
  component/
    component.ts
    component.html
    component.scss
  routes.ts
  services/
  models/
</code></pre>

      <h3>Standalone Components in Large Applications</h3>
      <ul>
        <li>Encourage <strong>feature isolation</strong> (micro-architecture).</li>
        <li>Improve code splitting and lazy loading.</li>
        <li>Enable standalone route trees.</li>
        <li>Allow true module-less Angular apps.</li>
      </ul>

      <h3>Standalone vs NgModule Components (Interview MUST KNOW)</h3>
      <ul>
        <li><strong>Standalone:</strong> import dependencies locally.</li>
        <li><strong>NgModule:</strong> requires declarations/imports inside a module.</li>
        <li><strong>Standalone is the future</strong> — modules remain only for compatibility.</li>
      </ul>

      <h3>Migration Tips (Angular 15–20)</h3>
      <ul>
        <li>Migrate feature-by-feature, not entire app at once.</li>
        <li>Start with simple components.</li>
        <li>Convert lazy-loaded modules first.</li>
        <li>Keep NgModules only where needed (legacy libs).</li>
      </ul>

      <h3>When Should You Use Standalone Components?</h3>
      <ul>
        <li>New Angular apps (Angular CLI defaults support standalone).</li>
        <li>Feature modules that can be simplified.</li>
        <li>Lazy-loaded pages.</li>
        <li>Small reusable UI components.</li>
      </ul>

      <h3>When You Should Still Consider an NgModule?</h3>
      <ul>
        <li>Legacy AngularJS hybrid apps.</li>
        <li>Large enterprise libs that still rely on NgModule metadata.</li>
        <li>Third-party libs that expect module-based architecture.</li>
      </ul>
    `
  };

  codeExample = `
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hello-standalone',
  standalone: true,
  imports: [CommonModule],
  template: '<h3>Hello from a standalone component!</h3>',
})
export class HelloStandaloneComponent {}
`.trim();

}
