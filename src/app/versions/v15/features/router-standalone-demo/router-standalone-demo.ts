import { Component } from '@angular/core';

@Component({
  selector: 'app-router-standalone-demo',
  templateUrl: './router-standalone-demo.html',
  styleUrl: './router-standalone-demo.scss', // kept EXACTLY as requested
})
export class RouterStandaloneDemo {

  theory = {
    title: 'Angular Standalone Router — Complete Guide (Angular 15–20)',
    content: `
      <h3>What is the Standalone Router?</h3>
      <p>
        The <strong>Standalone Router</strong> is Angular’s modern routing system introduced in Angular 14+ 
        and fully optimized in Angular 15–20. It removes the need for NgModules and provides a cleaner,
        component-first routing architecture.
      </p>

      <h3>Why Standalone Routing Matters</h3>
      <ul>
        <li><strong>No NgModules required</strong> — routing becomes more predictable and modular.</li>
        <li><strong>Faster application bootstrap</strong> — less metadata and module resolution overhead.</li>
        <li><strong>Better tree-shaking</strong> — unused routes/components are removed at build time.</li>
        <li><strong>Component-first architecture</strong> — routing binds directly to standalone components.</li>
        <li><strong>Cleaner project structure</strong> — routes can be colocated with their components.</li>
        <li><strong>Supports deferred loading</strong> — ideal for large apps and performance.</li>
      </ul>

      <h3>How Routes Are Defined in Standalone Angular</h3>
      <p>
        Instead of defining routes in an <code>@NgModule</code>, you simply use the 
        <code>provideRouter()</code> function during <code>bootstrapApplication</code>.
      </p>

      <pre><code>bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});</code></pre>

      <h3>Lazy Loading Routes (Standalone Way)</h3>
      <p>Standalone Angular makes lazy loading extremely simple:</p>

      <pre><code>{
  path: 'products',
  loadComponent: () => import('./products.component')
    .then(m => m.ProductsComponent)
}</code></pre>

      <p>You can also lazy-load entire route trees:</p>

      <pre><code>{
  path: 'admin',
  loadChildren: () => import('./admin/admin.routes')
    .then(m => m.ADMIN_ROUTES)
}</code></pre>

      <h3>Route-Level DI (Angular 15+)</h3>
      <p>Standalone Angular allows injecting at route level:</p>

      <pre><code>{
  path: 'profile',
  providers: [ProfileResolver, UserService],
  loadComponent: () => import('./profile.component').then(m => m.ProfileComponent)
}</code></pre>

      <p>This enables <strong>scoped services per route</strong>.</p>

      <h3>Route Data & Strong Typing (Angular 15–20)</h3>
      <p>You can pass additional static data to routes:</p>

      <pre><code>{
  path: 'dashboard',
  component: DashboardComponent,
  data: { role: 'admin', layout: 'full' }
}</code></pre>

      <h3>Standalone Guards (Functional Guards)</h3>
      <p>Angular now supports functional guards instead of classes:</p>

      <pre><code>import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  return localStorage.getItem('token') ? true : false;
};</code></pre>

      <p>Use them in routes:</p>

      <pre><code>{
  path: 'secure',
  component: SecureComponent,
  canActivate: [authGuard]
}</code></pre>

      <h3>Route Parameters & Strong Typing</h3>
      <pre><code>{
  path: 'user/:id',
  loadComponent: () => import('./user.component').then(m => m.UserComponent)
}</code></pre>

      <p>Access in component:</p>

      <pre><code>const route = inject(ActivatedRoute);
const id = route.snapshot.params['id'];</code></pre>

      <h3>Component Inputs in Routes (Angular 16+)</h3>
      <p>Standalone Angular supports passing inputs via URL params:</p>

      <pre><code>{
  path: 'product/:id',
  component: ProductComponent,
  resolve: {
    product: productResolver
  }
}</code></pre>

      <h3>View Transitions (Angular 17+ Router Feature)</h3>
      <p>Enable smooth page transitions:</p>

      <pre><code>providers: [
  provideRouter(routes, withViewTransitions())
]</code></pre>

      <h3>Deferred Loading (Angular 17)</h3>
      <p>Improves page speed by deferring heavy components:</p>

      <pre><code>loadComponent: () => defer(() => import('./heavy.component')
  .then(m => m.HeavyComponent))</code></pre>

      <h3>Why Companies Prefer Standalone Routing</h3>
      <ul>
        <li>Faster migration from older Angular versions</li>
        <li>Cleaner monorepos</li>
        <li>Easier onboarding for new developers</li>
        <li>Better code splitting and performance</li>
        <li>Direct integration with Signals & functional DI</li>
      </ul>

      <h3>Best Practices (Interview Gold)</h3>
      <ul>
        <li>Use <strong>loadComponent</strong> instead of loadChildren for simple pages.</li>
        <li>Co-locate routes with their feature components.</li>
        <li>Use functional guards/resolvers instead of class-based.</li>
        <li>Use route-level providers for scoped services.</li>
        <li>Split large route trees into standalone feature folders.</li>
      </ul>
    `
  };

  codeExample = `
import { provideRouter, Routes } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  // Lazy Loaded Component
  {
    path: 'products',
    loadComponent: () =>
      import('./products.component').then(m => m.ProductsComponent)
  },

  // Functional Guard Example
  {
    path: 'secure',
    loadComponent: () =>
      import('./secure.component').then(m => m.SecureComponent),
    canActivate: [() => !!localStorage.getItem('token')]
  }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
`.trim();

}
