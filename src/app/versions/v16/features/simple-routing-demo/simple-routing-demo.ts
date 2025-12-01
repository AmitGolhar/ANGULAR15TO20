import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-routing-demo',
  templateUrl: './simple-routing-demo.html',
  styleUrl: './simple-routing-demo.scss', // unchanged
})
export class SimpleRoutingDemo {

  theory = {
    title: 'Simple Routing in Angular — Complete Deep Dive (Angular 15–20)',
    content: `
      <h3>What is Simple Routing?</h3>
      <p>
        Simple Routing in Angular enables navigation between different components <strong>without reloading the page</strong>.
        Routing is the backbone of Angular’s <strong>Single Page Application (SPA)</strong> architecture.
        It allows Angular to update the view dynamically while keeping the application running seamlessly.
      </p>

      <h3>Why Routing Matters in Angular</h3>
      <ul>
        <li><strong>SPA Navigation</strong> — switch views instantly without full page reload.</li>
        <li><strong>Bookmarkable URLs</strong> — every route can be shared or bookmarked.</li>
        <li><strong>Component-Based Layouts</strong> — a component loads for each route.</li>
        <li><strong>Scalable Architecture</strong> — clean separation of pages/features.</li>
        <li><strong>Route Guards & Authentication</strong> — secure route access.</li>
        <li><strong>Lazy Loading Support</strong> — load large features only when needed.</li>
      </ul>

      <h3>Modern Routing in Angular (Standalone, Angular 15+)</h3>
      <p>Standalone routing removes NgModules and uses <code>provideRouter()</code>:</p>

      <pre><code>
import { provideRouter, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./about.component').then(m => m.AboutComponent) }
];

// main.ts
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
      </code></pre>

      <h3>Route Parameters (Interview Must Know)</h3>
      <p>Dynamic URLs using <code>:id</code>:</p>

      <pre><code>
{ path: 'product/:id', loadComponent: () => import('./product.component').then(m => m.ProductComponent) }
      </code></pre>

      <h3>Navigation via RouterLink</h3>
      <pre><code>&lt;a routerLink="/about"&gt;About&lt;/a&gt;</code></pre>

      <h3>Programmatic Navigation</h3>
      <pre><code>this.router.navigate(['/product', 10]);</code></pre>

      <h3>Route Guards (Auth, Role, Permissions)</h3>
      <p>Stop users from accessing unauthorized pages:</p>

      <pre><code>
canActivate: [AuthGuard]
      </code></pre>

      <h3>Route Data (Extra Metadata)</h3>
      <pre><code>
{ path: 'home', loadComponent: ..., data: { title: 'Homepage' } }
      </code></pre>

      <h3>Wildcard / 404 Route</h3>
      <pre><code>
{ path: '**', loadComponent: () => import('./not-found.component').then(m => m.NotFoundComponent) }
      </code></pre>

      <h3>Router Events (Debugging & Analytics)</h3>
      <p>Useful for measuring navigation time or loading indicators:</p>

      <pre><code>
router.events.subscribe(e => console.log(e));
      </code></pre>

      <h3>SPA Architecture (Deep Interview Notes)</h3>
      <ul>
        <li><strong>Only index.html loads once</strong>.</li>
        <li>Angular replaces views based on URL state.</li>
        <li>Browser back/forward buttons work via the History API.</li>
        <li>Routing avoids full network reload → better performance.</li>
      </ul>

      <h3>Common Interview Questions</h3>
      <ul>
        <li>Difference between <code>routerLink</code> vs <code>href</code>?</li>
        <li>How does Angular SPA routing work internally?</li>
        <li>What are route guards and how do they work?</li>
        <li>How to pass data using route params vs query params?</li>
        <li>Difference between loadComponent and loadChildren?</li>
        <li>Explain lazy loading with routes.</li>
        <li>How does Angular handle 404 routes?</li>
      </ul>
    `
  };

  codeExample = `
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
`.trim();

}
