import { Component } from '@angular/core';

@Component({
  selector: 'app-performance-bench-demo',
  templateUrl: './performance-bench-demo.html',
  styleUrl: './performance-bench-demo.scss', // unchanged as requested
})
export class PerformanceBenchDemo {

  theory = {
    title: 'Angular Performance Benchmarking — Complete Deep Dive (Angular 15–20)',
    content: `
      <h3>What is Performance Benchmarking?</h3>
      <p>
        Performance benchmarking is the process of <strong>measuring, analyzing, and optimizing</strong>
        an Angular application's runtime behavior.  
        It helps identify rendering bottlenecks, slow components, heavy change detection cycles,
        and inefficient data flows.
      </p>

      <h3>Why Angular Performance Benchmarking Matters</h3>
      <ul>
        <li><strong>Improves UX</strong> — users expect fast and smooth interfaces.</li>
        <li><strong>Reduces TTI/LCP/INP</strong> — improves Core Web Vitals and SEO.</li>
        <li><strong>Identifies slow components</strong> — track heavy loops, expensive pipes, large DOM trees.</li>
        <li><strong>Supports scalability</strong> — critical for enterprise applications.</li>
        <li><strong>Helps avoid regressions</strong> — by measuring before and after refactoring.</li>
      </ul>

      <h3>Key Areas Measured in Angular Benchmarking</h3>
      <ul>
        <li><strong>Change detection cycles</strong> — how often UI re-renders.</li>
        <li><strong>DOM rendering cost</strong> — template size, *ngFor loops, nested components.</li>
        <li><strong>Data flow performance</strong> — Signals, RxJS, async pipes.</li>
        <li><strong>JavaScript execution time</strong> — loops, computation-heavy logic.</li>
        <li><strong>First Contentful Paint (FCP)</strong></li>
        <li><strong>Largest Contentful Paint (LCP)</strong></li>
        <li><strong>Interaction to Next Paint (INP)</strong></li>
      </ul>

      <h3>Tools for Angular Performance Benchmarking</h3>
      <ul>
        <li><strong>Chrome Performance Profiler</strong> — flame charts, FPS, memory usage.</li>
        <li><strong>Angular DevTools</strong> — component change detection tracing.</li>
        <li><strong>Lighthouse</strong> — Web Vitals audit.</li>
        <li><strong>WebPageTest / GTmetrix</strong></li>
        <li><strong>console.time() / performance.now()</strong> for micro-benchmarks.</li>
      </ul>

      <h3>Benchmarking Change Detection (Angular 16+ Signals)</h3>
      <p>Angular Signals reduce CD overhead by triggering updates only where required.</p>

      <pre><code>count = signal(0);
computedTotal = computed(() => this.count() * 100);</code></pre>

      <p>Measure reactivity:</p>

      <pre><code>const start = performance.now();
for (let i = 0; i < 10000; i++) this.count.update(v => v + 1);
console.log(performance.now() - start);</code></pre>

      <h3>Common Performance Pitfalls in Angular</h3>
      <ul>
        <li>Heavy <code>*ngFor</code> loops without <code>trackBy</code>.</li>
        <li>Expensive pipes running on every CD cycle.</li>
        <li>Nested change detection via event emitters.</li>
        <li>Large components instead of composable small components.</li>
        <li>Unoptimized images and media.</li>
      </ul>

      <h3>OnPush Change Detection (Critical for Performance)</h3>
      <p>To reduce CD cycles:</p>

      <pre><code>@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})</code></pre>

      <h3>Benchmarking CPU-Heavy Tasks (Interview MUST KNOW)</h3>
      <p>Using <strong>Web Workers</strong> offloads heavy processing:</p>

      <pre><code>const worker = new Worker(new URL('./worker.ts', import.meta.url));
worker.postMessage({ items: bigList });</code></pre>

      <h3>Measuring Template Render Time</h3>
      <pre><code>const start = performance.now();
// force DOM heavy rendering
this.items = generateLargeList();
setTimeout(() => {
  console.log('Render time:', performance.now() - start);
});</code></pre>

      <h3>Real Interview Questions You Will Now Ace</h3>
      <ul>
        <li>How do you measure Angular rendering performance?</li>
        <li>Difference between runtime benchmarking and build-time optimization?</li>
        <li>What tools does Angular DevTools provide?</li>
        <li>How does OnPush improve performance?</li>
        <li>How do Signals compare to RxJS for perf?</li>
        <li>How to optimize *ngFor loops?</li>
        <li>When should you use Web Workers?</li>
      </ul>
    `
  };

  codeExample = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benchmark',
  template: '<p>Performance Benchmark Test</p>'
})
export class BenchmarkComponent implements OnInit {
  startTime: number;

  ngOnInit() {
    this.startTime = performance.now();

    // simulate heavy work
    for (let i = 0; i < 1_000_000; i++) {}

    const endTime = performance.now();
    console.log('Render time: ', endTime - this.startTime, 'ms');
  }
}
`.trim();

}
