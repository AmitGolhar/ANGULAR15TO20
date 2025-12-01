import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-loaded-section-demo',
  templateUrl: './lazy-loaded-section-demo.html',
  styleUrl: './lazy-loaded-section-demo.scss', // unchanged as per rules
})
export class LazyLoadedSectionDemo {

  theory = {
    title: 'Lazy Loaded Sections in Angular — Complete Deep Dive (Angular 15–20)',
    content: `
      <h3>What is Lazy Loading?</h3>
      <p>
        Lazy loading is a performance technique where Angular loads feature sections 
        <strong>only when the user navigates to them</strong>.  
        Instead of loading the entire app at startup, only the minimum required code is downloaded.
      </p>

      <h3>Why Lazy Loading Matters</h3>
      <ul>
        <li><strong>Faster initial load</strong> — reduces JavaScript bundle size on startup.</li>
        <li><strong>Improved Core Web Vitals & SEO</strong>.</li>
        <li><strong>Memory-efficient</strong> — non-visited sections aren’t loaded in memory.</li>
        <li><strong>Scales well for large apps</strong> (dashboard, admin panel, analytics pages).</li>
        <li><strong>Perfect match for Standalone components</strong> (Angular 15+).</li>
      </ul>

      <h3>Lazy Loading Before Standalone Components (Angular ≤ 14)</h3>
      <p>Lazy loading used <code>loadChildren</code> with NgModules:</p>

      <pre><code>{
  path: 'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module')
    .then(m => m.DashboardModule)
}</code></pre>

      <h3>Modern Lazy Loading (Angular 15–20)</h3>
      <p>
        With standalone components, Angular introduced <strong>loadComponent()</strong>:
      </p>

      <pre><code>{
  path: 'dashboard',
  loadComponent: () => import('./dashboard.component')
    .then(m => m.DashboardComponent)
}</code></pre>

      <h3>Lazy-Loading Full Route Trees (Standalone)</h3>
      <pre><code>{
  path: 'admin',
  loadChildren: () => import('./admin/admin.routes')
    .then(m => m.ADMIN_ROUTES)
}</code></pre>

      <h3>Deferred Loading (Angular 17+)</h3>
      <p><strong>Deferrable views</strong> let Angular lazy-load blocks inside templates:</p>

      <pre><code>&lt;ng-container *ngIf="isHeavySectionVisible" defer&gt;
  &lt;app-heavy-report /&gt;
&lt;/ng-container&gt;</code></pre>

      <p>Or with the defer trigger API:</p>

      <pre><code>&lt;div&gt;
  @defer (on idle) {
    &lt;heavy-chart /&gt;
  }
&lt;/div&gt;</code></pre>

      <h3>Route-Level Dependency Injection (Angular 15+)</h3>
      <p>Lazy-loaded routes can have isolated providers:</p>

      <pre><code>{
  path: 'profile',
  providers: [ProfileService],
  loadComponent: () => import('./profile.component')
    .then(m => m.ProfileComponent)
}</code></pre>

      <h3>Preloading Strategies (Pro-Level Interview Topic)</h3>
      <ul>
        <li><strong>NoPreloading</strong> — default</li>
        <li><strong>PreloadAllModules</strong> — loads in background after initial load</li>
        <li><strong>Custom preloading strategies</strong> — load modules based on network/device</li>
      </ul>

      <pre><code>provideRouter(routes, withPreloading(PreloadAllModules))</code></pre>

      <h3>Best Practices</h3>
      <ul>
        <li>Lazy load all pages except the landing route.</li>
        <li>Use <strong>loadComponent</strong> whenever possible (standalone).</li>
        <li>Split large admin/analytics sections into route trees.</li>
        <li>Use <strong>defer()</strong> for heavy templates like charts/maps.</li>
        <li>Cache lazy-loaded modules using route-level providers for faster revisits.</li>
      </ul>

      <h3>Real Interview Questions You Can Now Answer</h3>
      <ul>
        <li>How does lazy loading work internally in Angular?</li>
        <li>Difference between <code>loadChildren</code> and <code>loadComponent</code>?</li>
        <li>How do you improve performance using lazy loading?</li>
        <li>What is the role of preloading strategies?</li>
        <li>How does Angular 17's <strong>defer</strong> improve lazy loading?</li>
      </ul>
    `
  };

  codeExample = `
/* Pre-Standalone Example (Angular <=14) */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


/* Modern Lazy Loading (Angular 15+) */

{
  path: 'dashboard',
  loadComponent: () => import('./dashboard.component')
    .then(m => m.DashboardComponent)
}
`.trim();

}
