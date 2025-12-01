import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-server-side-render-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-side-render-demo.html',
  styleUrl: './server-side-render-demo.scss',
})
export class ServerSideRenderDemo {
  serverMessage = 'This content is rendered on the server.';

  theory = {
    title: 'Server-Side Rendering (SSR) in Angular — Deep Dive (Angular 17–20)',
    content: `
      <h3>What Is Server-Side Rendering (SSR)?</h3>
      <p>
        Server-Side Rendering (SSR) is the technique where Angular renders the HTML
        on the <strong>server</strong> instead of the browser. The client receives a
        fully rendered page and then Angular boots on top of it using <strong>hydration</strong>.
      </p>

      <h3>Why SSR Matters</h3>
      <ul>
        <li><strong>Improved SEO</strong> — Search engines can read fully rendered HTML.</li>
        <li><strong>Better performance</strong> — users see content faster (FCP/LCP improved).</li>
        <li><strong>Hydration enables interactivity</strong> without losing server-rendered DOM.</li>
        <li><strong>Essential for content-heavy apps</strong> like blogs, e-commerce, marketing pages.</li>
      </ul>

      <h3>How the SSR + Hydration Pipeline Works</h3>
      <ol>
        <li>Angular Universal renders HTML on the server.</li>
        <li>Browser displays server-rendered HTML immediately.</li>
        <li>The Angular bundle loads in the browser.</li>
        <li><strong>Hydration attaches event listeners</strong> to existing DOM.</li>
        <li>UI becomes fully interactive without re-rendering.</li>
      </ol>

      <h3>SSR vs CSR (Client-Side Rendering)</h3>
      <ul>
        <li><strong>CSR:</strong> Browser loads JS → renders UI. Blank page before render.</li>
        <li><strong>SSR:</strong> Server sends HTML → browser shows UI instantly.</li>
      </ul>

      <h3>Streaming SSR (Angular 17+)</h3>
      <p>
        Angular can stream the HTML in chunks, improving Time-To-First-Byte (TTFB)
        and allowing the browser to start painting earlier.
      </p>

      <h3>Server-Only & Client-Only Code (Important!)</h3>
      <pre><code>
// Runs ONLY on server:
if (isPlatformServer(platformId)) { ... }

// Runs ONLY in browser:
if (isPlatformBrowser(platformId)) { ... }
      </code></pre>

      <h3>SSR Performance Best Practices</h3>
      <ul>
        <li>Avoid heavy blocking operations during server render.</li>
        <li>Use caching (Redis, Cloudflare, Vercel Edge SSR).</li>
        <li>Pre-render static pages to reduce server cost.</li>
        <li>Use <strong>NgOptimizedImage</strong> for better LCP score.</li>
      </ul>

      <h3>Signals + SSR</h3>
      <p>
        Signals hydrate perfectly — server state becomes client state seamlessly.
      </p>

      <h3>Typical Real-World Use Cases</h3>
      <ul>
        <li>Landing pages / marketing sites</li>
        <li>Blogs, documentation, portfolios</li>
        <li>E-commerce product pages</li>
        <li>Dashboards with SEO-sensitive public sections</li>
      </ul>

      <h3>Common Interview Questions</h3>
      <ul>
        <li>What is SSR and why use it?</li>
        <li>Difference between SSR, SSG (pre-render), CSR, and hydration?</li>
        <li>How does Angular hydration prevent duplicate DOM creation?</li>
        <li>How does Angular handle events in SSR before hydration?</li>
        <li>Explain streaming SSR.</li>
        <li>How do you optimize performance for SSR?</li>
      </ul>
    `
  };

  codeExample = `
<p>{{ serverMessage }}</p>
<button (click)="serverMessage = 'Client-side interactivity works!'">
  Update Message
</button>
`.trim();
}
