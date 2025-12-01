import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ssr-hybrid-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ssr-hybrid-demo.html',
  styleUrl: './ssr-hybrid-demo.scss',
})
export class SSRHybridDemo {
  // Signal storing the current render mode
  private _mode = signal<'client' | 'server' | 'hybrid'>('hybrid');

  // Getter/setter so Angular templates can bind easily
  get mode(): 'client' | 'server' | 'hybrid' { return this._mode(); }
  set mode(value: 'client' | 'server' | 'hybrid') { this._mode.set(value); }

  // Demo routes
  routes = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/settings', label: 'Settings' },
    { path: '/profile', label: 'Profile' },
  ];

  // Theory Section
  theory = {
    title: 'SSR Hybrid Demo (Angular 17+)',
    content: `
      <h3>What is Hybrid Rendering?</h3>
      <p>
        Hybrid Mode in Angular 17+ is a powerful approach where the initial HTML is 
        <strong>server-rendered for speed and SEO</strong>, and then Angular 
        <strong>hydrates</strong> only the interactive parts on the client.
      </p>

      <h3>Render Mode Options</h3>
      <ul>
        <li><strong>Client:</strong> Traditional SPA — rendered fully in browser.</li>
        <li><strong>Server:</strong> Route rendered entirely on the server (SSR).</li>
        <li><strong>Hybrid:</strong> Server renders HTML + client hydrates only interactive bits.</li>
      </ul>

      <h3>Why Hybrid Rendering Matters (Interview Points)</h3>
      <ul>
        <li><strong>Best of both worlds:</strong> SSR speed + SPA interactivity.</li>
        <li><strong>SEO Boost:</strong> Search engines get full HTML immediately.</li>
        <li><strong>Faster First Contentful Paint (FCP):</strong> User sees UI instantly.</li>
        <li><strong>Reduced JS execution:</strong> Only hydrate parts that need interactivity.</li>
        <li><strong>Ideal for enterprise apps:</strong> Home page SSR, dashboards CSR.</li>
      </ul>

      <h3>Real-World Usage</h3>
      <ul>
        <li>E-commerce product pages → Hybrid</li>
        <li>Blogs / marketing pages → Server</li>
        <li>User dashboards → Client</li>
      </ul>
    `
  };

  // Code example shown in UI
  codeExample = `
<select [(ngModel)]="mode">
  <option value="client">Client</option>
  <option value="server">Server</option>
  <option value="hybrid">Hybrid</option>
</select>

<div *ngIf="mode === 'client'">Client-side rendering active.</div>
<div *ngIf="mode === 'server'">Server-side rendering active.</div>
<div *ngIf="mode === 'hybrid'">Hybrid SSR + client hydration active.</div>

<ul>
  <li *ngFor="let route of routes">
    <a [routerLink]="route.path">{{ route.label }}</a>
  </li>
</ul>
`.trim();
}
