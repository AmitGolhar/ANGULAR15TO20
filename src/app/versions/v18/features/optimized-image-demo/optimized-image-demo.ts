import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-optimized-image-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './optimized-image-demo.html',
  styleUrl: './optimized-image-demo.scss',
})
export class OptimizedImageDemo {

  images = [
    { src: 'https://via.placeholder.com/300x200', alt: 'Placeholder 1' },
    { src: 'https://via.placeholder.com/300x200', alt: 'Placeholder 2' },
    { src: 'https://via.placeholder.com/300x200', alt: 'Placeholder 3' },
  ];

  theory = {
    title: 'Optimized Image Demo — Angular Image Optimization Deep Dive',
    content: `
      <h3>What Is Image Optimization?</h3>
      <p>
        Image optimization means serving images using the <strong>right size, modern formats, and optimized loading strategy</strong>.
        Angular provides built-in utilities to optimize images automatically and boost Core Web Vitals.
      </p>

      <h3>Why It Matters</h3>
      <ul>
        <li><strong>Improves Core Web Vitals</strong> — especially LCP (Largest Contentful Paint).</li>
        <li><strong>Reduces bandwidth</strong> — crucial on mobile networks.</li>
        <li><strong>Supports modern formats</strong> like WebP and AVIF.</li>
        <li><strong>Lazy loading</strong> reduces render-blocking resources.</li>
        <li>Makes Angular apps <strong>visibly faster and SEO-friendly</strong>.</li>
      </ul>

      <h3>NgOptimizedImage (Angular’s Built-In Image Optimizer)</h3>
      <p>
        Angular’s <strong>NgOptimizedImage</strong> directive adds automatic:
      </p>

      <ul>
        <li>Lazy loading</li>
        <li>Preconnect + fetch priority hints</li>
        <li>Responsive sizes / srcset suggestions</li>
        <li>Console warnings for improperly sized images</li>
        <li>Preload for LCP images</li>
      </ul>

      <pre><code>
<img
  ngOptimizedImage
  src="assets/hero.jpg"
  width="1200"
  height="600"
  priority   // Marks LCP image
  alt="Hero Banner"
/>
      </code></pre>

      <h3>Responsive Image Optimization</h3>
      <pre><code>
<img 
  ngOptimizedImage
  src="assets/pic.jpg"
  width="600"
  height="400"
  ngSrcset="assets/pic-400.jpg 400w,
            assets/pic-800.jpg 800w,
            assets/pic-1200.jpg 1200w"
/>
      </code></pre>

      <h3>Best Practices</h3>
      <ul>
        <li>Always provide <strong>width</strong> and <strong>height</strong>.</li>
        <li>Use <strong>priority</strong> for LCP images.</li>
        <li>Use <strong>lazy loading</strong> for non-critical images.</li>
        <li>Serve <strong>AVIF/WebP</strong> if possible.</li>
        <li>Use <code>srcset</code> for responsive layouts.</li>
      </ul>

      <h3>Signals for Image Preview (Advanced Use Case)</h3>
      <pre><code>
selectedImage = signal(null);
(selectedImage()) // read image dynamically
      </code></pre>

      <h3>Common Interview Questions</h3>
      <ul>
        <li>How does Angular’s <code>NgOptimizedImage</code> improve LCP?</li>
        <li>Difference between <code>loading="lazy"</code> vs <code>priority</code>?</li>
        <li>How does <code>srcset</code> help with responsive images?</li>
        <li>Explain why width/height prevents layout shifts (CLS).</li>
        <li>Why serve WebP/AVIF vs JPEG?</li>
      </ul>
    `
  };

  codeExample = `
<!-- Basic optimized image -->
<img 
  src="https://via.placeholder.com/300x200"
  width="300"
  height="200"
  alt="Placeholder"
  loading="lazy"
/>

<!-- Using three optimized images -->
<img src="https://via.placeholder.com/300x200" width="300" height="200" />
<img src="https://via.placeholder.com/300x200" width="300" height="200" />
<img src="https://via.placeholder.com/300x200" width="300" height="200" />
`.trim();
}
