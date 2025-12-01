import { Component } from '@angular/core';

@Component({
  selector: 'app-image-directive-demo',
  templateUrl: './image-directive-demo.html',
  styleUrl: './image-directive-demo.scss',  // kept EXACT as you requested
})
export class ImageDirectiveDemo {

  theory = {
    title: 'Angular Image Directive — What It Is & Why It Matters (NgOptimizedImage)',
    content: `
      <h3>What is the Angular Image Directive?</h3>
      <p>
        The <strong>NgOptimizedImage</strong> directive (introduced in Angular v15+ and improved in v16–v19)
        automatically optimizes images for performance, Core Web Vitals, and best UX.
        It helps you avoid common image mistakes without installing third-party libraries.
      </p>

      <h3>Why NgOptimizedImage Matters</h3>
      <ul>
        <li><strong>Automatic lazy loading</strong> — images only load when near viewport.</li>
        <li><strong>Preloading & preconnect</strong> — Angular adds loading hints for large images / external CDNs.</li>
        <li><strong>Improves LCP (Largest Contentful Paint)</strong> when using <code>priority</code>.</li>
        <li><strong>Prevents layout shifts (CLS)</strong> by enforcing required <code>width</code> and <code>height</code>.</li>
        <li><strong>Responsive image hints</strong> — supports <code>sizes</code> and <code>srcset</code> automatically.</li>
        <li><strong>Build-time validation</strong> — Angular warns if best practices are not followed.</li>
      </ul>

      <h3>Key Features (Angular 15 → 20)</h3>
      <ul>
        <li><strong>priority</strong> attribute for hero/LCP images.</li>
        <li>Automatic <strong>lazy loading</strong> for all non-priority images.</li>
        <li><strong>Decoding="async"</strong> added automatically.</li>
        <li>Ensures correct aspect ratio to avoid CLS.</li>
        <li>Fast runtime without heavy libraries.</li>
      </ul>

      <h3>When to Use <code>priority</code>?</h3>
      <p>
        Use <code>priority</code> ONLY for the main hero/banner image that appears above the fold.
        It improves <strong>LCP</strong>.
      </p>

      <pre><code>&lt;img ngOptimizedImage src="hero.webp" width="1280" height="720" priority /&gt;</code></pre>

      <h3>When NOT to use <code>priority</code>?</h3>
      <ul>
        <li>Thumbnails</li>
        <li>Blog content images</li>
        <li>Product gallery</li>
        <li>Images below the fold</li>
        <li>Lazy loaded module routes</li>
      </ul>

      <h3>Responsive Image Support</h3>
      <p>
        Angular supports <strong>sizes</strong> attribute for automatically loading correctly sized images:
      </p>
      <pre><code>&lt;img 
  ngOptimizedImage
  src="product.png"
  width="800" height="600"
  sizes="(max-width: 600px) 100vw, 600px"
/&gt;</code></pre>

      <h3>Build-Time Validations</h3>
      <ul>
        <li>Enforces width/height</li>
        <li>Warns about missing alt text</li>
        <li>Warns if priority is misused</li>
        <li>Suggests appropriate loading hints</li>
      </ul>
    `
  };

  codeExample = `
<!-- Basic: Angular NgOptimizedImage -->
<img
  ngOptimizedImage
  src="assets/example-image.jpg"
  width="600"
  height="400"
  alt="Optimized image example"
/>

<!-- Priority (Hero / LCP image) -->
<img
  ngOptimizedImage
  src="assets/hero-banner.webp"
  width="1280"
  height="720"
  priority
  alt="Hero Banner"
/>

<!-- Responsive Example -->
<img
  ngOptimizedImage
  src="assets/product.jpg"
  width="800"
  height="600"
  sizes="(max-width: 600px) 100vw, 600px"
  alt="Responsive product"
/>
`.trim();

}
