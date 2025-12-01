import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-responsive-layout-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './responsive-layout-demo.html',
  styleUrl: './responsive-layout-demo.scss',
})
export class ResponsiveLayoutDemo {

  theory = {
    title: 'Responsive Layout in Angular — Deep Dive (CSS Grid, Flexbox, Container Queries)',
    content: `
      <h3>What Is Responsive Layout?</h3>
      <p>
        Responsive layout ensures your UI automatically adapts to different screen sizes — 
        mobile, tablet, and desktop — by adjusting structure, spacing, columns, and typography.
        Angular doesn't enforce a layout system, but modern CSS + Angular's architecture make it easy 
        to build fully responsive UIs.
      </p>

      <h3>Why Responsive Design Matters</h3>
      <ul>
        <li><strong>Multi-device support</strong> — phones, tablets, desktops, large displays.</li>
        <li><strong>Better UX</strong> — no zooming or horizontal scrolling.</li>
        <li><strong>Improved SEO</strong> — Google ranks mobile-friendly pages higher.</li>
        <li><strong>Future-proof</strong> — works with foldable devices and variable display sizes.</li>
      </ul>

      <h3>Core Responsive Techniques (Must Know)</h3>
      <ul>
        <li><strong>CSS Grid</strong> — perfect for 2D layouts.</li>
        <li><strong>Flexbox</strong> — ideal for row/column alignment.</li>
        <li><strong>Media Queries</strong> — adjust layout at breakpoints.</li>
        <li><strong>Container Queries (NEW CSS)</strong> — layout responds to parent size, not screen size.</li>
        <li><strong>Responsive units</strong> — <code>vw</code>, <code>vh</code>, <code>vmin</code>, <code>clamp()</code>.</li>
      </ul>

      <h3>Example: CSS Grid Responsive Layout</h3>
      <pre><code>
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
      </code></pre>

      <h3>Responsive Typography Using clamp()</h3>
      <pre><code>
h2 {
  font-size: clamp(1.2rem, 2vw, 2rem);
}
      </code></pre>

      <h3>Angular Tools That Help</h3>
      <ul>
        <li><strong>CDK BreakpointObserver</strong> (Angular CDK)</li>
        <li><strong>Signals</strong> to store responsive state</li>
        <li><strong>SSR hydration</strong> handling responsive layouts</li>
      </ul>

      <h3>Using BreakpointObserver (Advanced)</h3>
      <pre><code>
constructor(private breakpoint: BreakpointObserver) {}
isMobile = signal(false);

ngOnInit() {
  this.breakpoint.observe('(max-width: 600px)')
    .subscribe(res => this.isMobile.set(res.matches));
}
      </code></pre>

      <h3>Why Container Queries Are a Game-Changer</h3>
      <p>
        Unlike media queries (which depend on viewport), container queries respond to the component's 
        available space. Perfect for reusable UI components in Angular.
      </p>

      <pre><code>
@container card (min-width: 500px) {
  .box { flex-direction: row; }
}
      </code></pre>

      <h3>Real-World Responsive Patterns</h3>
      <ul>
        <li>Responsive dashboards (Grid auto-fit)</li>
        <li>Responsive cards (Container queries)</li>
        <li>Mobile nav + desktop sidebar</li>
        <li>Responsive image galleries</li>
      </ul>

      <h3>Common Interview Questions</h3>
      <ul>
        <li>CSS Grid vs Flexbox — when to use which?</li>
        <li>Explain mobile-first responsive design.</li>
        <li>What are container queries and why are they important?</li>
        <li>How do you handle responsive typography?</li>
        <li>How would you make an Angular dashboard responsive?</li>
        <li>Difference between viewport units and relative units?</li>
      </ul>
    `
  };

  codeExample = `
<div class="grid">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>
`.trim();

}
