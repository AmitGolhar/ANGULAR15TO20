import { Component } from '@angular/core';

@Component({
  selector: 'app-image-optimization-demo',
  templateUrl: './image-optimization-demo.html',
  styleUrl: './image-optimization-demo.scss', // unchanged
})
export class ImageOptimizationDemo {

  theory = {
    title: 'Image Optimization in Angular — Complete Guide for Modern Web (Angular 15–20)',
    content: `
      <h3>What is Image Optimization?</h3>
      <p>
        Image optimization is the process of reducing file size while maintaining quality.  
        In modern Angular apps, this improves <strong>Core Web Vitals</strong>,  
        <strong>LCP</strong>, <strong>CLS</strong>, <strong>TTFB</strong>, and overall
        <strong>user experience & SEO ranking</strong>.
      </p>

      <h3>Why Image Optimization Matters in Modern Angular</h3>
      <ul>
        <li><strong>Improves LCP</strong> — largest image loads faster.</li>
        <li><strong>Reduces CLS</strong> — reserving width/height avoids layout shifts.</li>
        <li><strong>Better Lighthouse scores</strong> — Google ranks faster pages higher.</li>
        <li><strong>Massive performance gains</strong> — WebP/AVIF reduce file size by 30–80%.</li>
        <li><strong>Lower bandwidth usage</strong> — especially important for mobile users.</li>
        <li><strong>Improved perception of speed</strong> — users see content sooner.</li>
      </ul>

      <h3>Modern Image Formats (Interview MUST KNOW)</h3>
      <ul>
        <li><strong>AVIF</strong> — best compression, sharpest quality.</li>
        <li><strong>WebP</strong> — widely supported, great for photos & UI images.</li>
        <li><strong>JPEG/PNG</strong> — still used but inefficient.</li>
      </ul>

      <pre><code>&lt;img src="photo.avif" width="800" height="600" loading="lazy" /&gt;</code></pre>

      <h3>Lazy Loading Images</h3>
      <p>
        Lazy loading defers loading images until they are close to the viewport.
      </p>

      <pre><code>&lt;img loading="lazy" ... /&gt;</code></pre>

      <h3>NgOptimizedImage (Angular 15+)</h3>
      <p>
        Angular’s <strong>NgOptimizedImage</strong> automatically handles:
      </p>
      <ul>
        <li>Lazy loading</li>
        <li>Width/height enforcement</li>
        <li>Preconnect to CDNs</li>
        <li>Proper decoding</li>
        <li>Better LCP handling via <code>priority</code></li>
      </ul>

      <pre><code>&lt;img 
  ngOptimizedImage 
  src="assets/banner.webp"
  width="1200" 
  height="500" 
  priority 
  alt="Hero Banner" 
/&gt;</code></pre>

      <h3>Responsive Images (sizes + srcset)</h3>
      <p>
        Helps browser choose best image based on screen size.
      </p>

      <pre><code>&lt;img 
  ngOptimizedImage
  src="assets/product-large.webp"
  width="800"
  height="600"
  sizes="(max-width: 600px) 100vw, 600px"
/&gt;</code></pre>

      <h3>When to Use Priority</h3>
      <ul>
        <li>Hero banner / main section image</li>
        <li>First product image on an e-commerce page</li>
        <li>Landing page header</li>
      </ul>

      <h3>CDN + Angular Image Optimization (Pro-Level)</h3>
      <ul>
        <li>Cloudflare Images</li>
        <li>ImageKit</li>
        <li>Imgix</li>
        <li>Firebase Storage + caching</li>
      </ul>

      <h3>Production Best Practices</h3>
      <ul>
        <li>Always specify <strong>width</strong> and <strong>height</strong>.</li>
        <li>Use <strong>WebP/AVIF</strong> for most images.</li>
        <li>Lazy load all non-critical images.</li>
        <li>Use CDNs for auto-resizing variants.</li>
        <li>Compress images before upload.</li>
      </ul>

      <h3>Interview Questions You Can Now Answer</h3>
      <ul>
        <li>How do you improve LCP with images?</li>
        <li>Difference between lazy loading vs priority images?</li>
        <li>What are advantages of AVIF/WebP?</li>
        <li>How does NgOptimizedImage improve CLS?</li>
        <li>When should you avoid priority tag?</li>
      </ul>
    `
  };

  codeExample = `
<!-- Basics: Lazy Loading -->
<img 
  src="assets/sample-image.jpg" 
  alt="Sample" 
  width="600" 
  height="400" 
  loading="lazy"
/>

<!-- WebP Format -->
<img 
  src="assets/photo.webp" 
  width="800" 
  height="500" 
  loading="lazy"
/>

<!-- NgOptimizedImage -->
<img
  ngOptimizedImage
  src="assets/optimized.webp"
  width="900"
  height="600"
  alt="Optimized Image"
/>

<!-- Priority (for Hero Section) -->
<img
  ngOptimizedImage
  src="assets/hero.avif"
  width="1280"
  height="720"
  priority
  alt="Hero Banner"
/>
`.trim();

}
