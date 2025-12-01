import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-route-render-mode-demo',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './route-render-mode-demo.html',
  styleUrl: './route-render-mode-demo.scss',
})
export class RouteRenderModeDemo {
  // Signal storing selected render mode
  private _renderMode = signal<'client' | 'server' | 'hybrid'>('client');

  // Expose getter/setter for template binding
  get renderMode(): 'client' | 'server' | 'hybrid' { return this._renderMode(); }
  set renderMode(value: 'client' | 'server' | 'hybrid') { this._renderMode.set(value); }

  // Demo routes
  routes = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  // Theory content
  theory = {
    title: 'Route Render Mode Demo (Angular 17+)',
    content: `
      <h3>What is Route Render Mode?</h3>
      <p>
        Angular 17+ introduces <strong>route-level render modes</strong> that define how each route is rendered:
      </p>

      <ul>
        <li><strong>Client Mode</strong> — classic SPA rendering, everything happens in the browser.</li>
        <li><strong>Server Mode</strong> — route is rendered on the server (SSR), great for SEO, faster FCP.</li>
        <li><strong>Hybrid Mode</strong> — server-rendered HTML + client-side hydration for interactivity.</li>
      </ul>

      <h3>Why Render Modes Matter</h3>
      <ul>
        <li><strong>SEO Optimization</strong> — server-rendered pages are fully crawlable.</li>
        <li><strong>Performance</strong> — reduce first-load time with SSR or Hybrid.</li>
        <li><strong>Granular Control</strong> — each route chooses its own rendering strategy.</li>
        <li><strong>Best for large apps</strong> — optimize home page for SSR, dashboard for client rendering.</li>
      </ul>

      <h3>How Signals Help?</h3>
      <ul>
        <li><strong>Reactive UI</strong> — render mode selection instantly updates the view.</li>
        <li><strong>No ChangeDetectorRef needed</strong> — signals auto-trigger DOM updates.</li>
        <li><strong>Cleaner architecture</strong> — state stored as a single signal.</li>
      </ul>

      <h3>Interview-Level Talking Points</h3>
      <ul>
        <li><strong>Difference between SSR, SSG, CSR, and Hybrid rendering.</strong></li>
        <li><strong>Route-level rendering vs App-level rendering.</strong></li>
        <li><strong>Hydration pipeline in Angular 17+</strong> — partial, full, and delayed hydration.</li>
        <li><strong>Edge rendering</strong> — using SSR with CDNs like Cloudflare / Vercel.</li>
        <li><strong>Performance trade-offs</strong> — SSR reduces first paint but increases server load.</li>
      </ul>
    `
  };

  // Code sample for UI
  codeExample = `
<select [(ngModel)]="renderMode">
  <option value="client">Client</option>
  <option value="server">Server</option>
  <option value="hybrid">Hybrid</option>
</select>

<div *ngIf="renderMode === 'client'">Client-side route rendering active.</div>
<div *ngIf="renderMode === 'server'">Server-side route rendering active.</div>
<div *ngIf="renderMode === 'hybrid'">Hybrid route rendering active.</div>

<ul>
  <li *ngFor="let route of routes">
    <a [routerLink]="route.path">{{ route.label }}</a>
  </li>
</ul>
`.trim();
}
