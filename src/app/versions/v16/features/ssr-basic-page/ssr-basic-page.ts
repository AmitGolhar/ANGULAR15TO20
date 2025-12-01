import { Component } from '@angular/core';

@Component({
  selector: 'app-ssr-basic-page',
  templateUrl: './ssr-basic-page.html',
  styleUrl: './ssr-basic-page.scss', // unchanged
})
export class SsrBasicPage {

  theory = {
    title: 'SSR Basic Page in Angular — Complete Deep Dive (SSR, SSG, Hydration)',
    content: `
      <h3>What is SSR (Server-Side Rendering)?</h3>
      <p>
        SSR (Server-Side Rendering) pre-renders Angular components into HTML on the server 
        before sending it to the browser.  
        This solves two major problems:
      </p>
      <ul>
        <li>⚡ <strong>Faster First Paint</strong> — user sees content immediately</li>
        <li>🔎 <strong>SEO Indexing</strong> — search engines get full HTML, not blank JS pages</li>
      </ul>

      <h3>Why SSR Matters for Modern Angular Apps</h3>
      <ul>
        <li><strong>SEO-friendly</strong> — required for landing pages, blogs, e-commerce.</li>
        <li><strong>Improved Core Web Vitals</strong> — smaller TTFB, LCP, FCP.</li>
        <li><strong>Better performance on slow devices</strong> — server pre-renders the expensive work.</li>
        <li><strong>Faster perceived performance</strong> — HTML appears immediately.</li>
        <li><strong>Hydration</strong> — converts static HTML to a fully interactive Angular app.</li>
      </ul>

      <h3>Hydration (Angular 17+)</h3>
      <p>
        Hydration allows Angular to <strong>reuse server-rendered DOM</strong> instead of recreating it on the client.
        This avoids expensive re-rendering.
      </p>

      <pre><code>
bootstrapApplication(AppComponent, {
  providers: [provideClientHydration()]
});
      </code></pre>

      <h3>SSR vs SSG (Pre-Rendering)</h3>
      <ul>
        <li><strong>SSR</strong> → HTML is rendered on every request.</li>
        <li><strong>SSG (Static Site Generation)</strong> → HTML generated at build time.</li>
      </ul>

      <h3>Angular 17+ New SSR Engine (Vite + Hydration)</h3>
      <ul>
        <li>Faster dev server</li>
        <li>Smaller bundles</li>
        <li>Better hydration</li>
        <li>Support for streaming responses</li>
      </ul>

      <h3>SSR Rendering Pipeline</h3>
      <ol>
        <li>Server loads Angular app in Node/Edge</li>
        <li>Renders root component to HTML</li>
        <li>Sends HTML + minimal JS to browser</li>
        <li>Browser displays HTML instantly (no flicker)</li>
        <li>Angular hydrates → attaches events + reactivates app</li>
      </ol>

      <h3>SSR Limitations (Important for Interviews)</h3>
      <ul>
        <li>Avoid direct DOM access (<code>window</code>, <code>document</code>)</li>
        <li>APIs must support server execution</li>
        <li>Be careful with localStorage/sessionStorage</li>
        <li>Global event listeners may not behave the same</li>
      </ul>

      <h3>When Should You Use SSR?</h3>
      <ul>
        <li>Landing pages</li>
        <li>Marketing pages</li>
        <li>E-commerce product pages</li>
        <li>Social share previews (OG tags)</li>
        <li>Apps requiring instant content visibility</li>
      </ul>

      <h3>Interview Questions You Can Answer</h3>
      <ul>
        <li>Difference between SSR, CSR, and SSG?</li>
        <li>What is hydration and why does Angular need it?</li>
        <li>How does SSR improve LCP?</li>
        <li>Why does SSR help SEO?</li>
        <li>What challenges come with SSR?</li>
      </ul>
    `
  };

  codeExample = `
/* Angular Universal SSR Setup (Older Angular versions) */

import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}


/* Modern Angular 17+ Hydration Example */

import { bootstrapApplication } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [provideClientHydration()]
});
`.trim();

}
