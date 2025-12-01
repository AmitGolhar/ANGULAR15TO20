import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-transitions-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-transitions-example.html',
  styleUrl: './view-transitions-example.scss',
})
export class ViewTransitionsExample {
  activeView: 'view1' | 'view2' = 'view1';

  theory = {
    title: 'View Transitions in Angular — What They Are and Why They Matter',
    content: `
      <h3>What Are View Transitions?</h3>
      <p>
        View Transitions is a modern Web API that enables <strong>smooth animated transitions</strong> 
        when switching UI states, components, routes, or pages. Angular 17+ embraces this API to give 
        native, high-performance transitions without big animation libraries.
      </p>

      <h3>Why View Transitions Matter</h3>
      <ul>
        <li><strong>Smoother UI</strong> — avoids abrupt jumps when content changes.</li>
        <li><strong>Zero-JavaScript animations</strong> — browser handles transitions efficiently.</li>
        <li><strong>Improved perceived performance</strong> — transitions make UI feel faster.</li>
        <li><strong>Great for route transitions</strong> — Angular can animate between pages.</li>
      </ul>

      <h3>How View Transitions Work in Modern Browsers</h3>
      <ol>
        <li>The browser captures the current DOM snapshot.</li>
        <li>The UI updates (state change, DOM change, or route navigation).</li>
        <li>The browser animates between “before” → “after” snapshots.</li>
      </ol>

      <h3>Angular + ViewTransition API (Core Concept)</h3>
      <p>Angular automatically wraps route changes with transitions when enabled, but you can manually trigger them for component state too.</p>

      <h3>Manually Triggering a View Transition</h3>
      <p>Use <code>document.startViewTransition()</code> for custom transitions:</p>

      <pre><code>
document.startViewTransition(() => {
  this.activeView = 'view2';
});
      </code></pre>

      <h3>Advanced Transition Techniques</h3>
      <ul>
        <li>Shared element transitions (animate matching elements between screens).</li>
        <li>Page/route transitions using Angular Router config.</li>
        <li>Animating lists, cards, tiles, tabs, or dashboards.</li>
        <li>Smooth dark/light theme transitions.</li>
      </ul>

      <h3>Browser Support</h3>
      <p>Supported in Chrome 111+, Edge, and soon Firefox/Safari. Safe to use with fallbacks.</p>

      <h3>Common Interview Questions</h3>
      <ul>
        <li>How does View Transition API differ from Angular Animations?</li>
        <li>What are shared element transitions?</li>
        <li>Does View Transition require JavaScript or runs at browser level?</li>
        <li>How do you handle unsupported browsers?</li>
      </ul>
    `
  };

  codeExample = `
<!-- Simple View Transition Example -->
<div [class.view1]="activeView === 'view1'" 
     [class.view2]="activeView === 'view2'">
  <p>Content changes with smooth transition</p>
</div>

<button (click)="switchView()">
  Switch View
</button>
`.trim();

  // NEW: Proper view transition-aware switching
  switchView() {
    // Check if browser supports View Transition API
    if ((document as any).startViewTransition) {
      (document as any).startViewTransition(() => {
        this.toggleView();
      });
    } else {
      // Fallback for older browsers
      this.toggleView();
    }
  }

  private toggleView() {
    this.activeView = this.activeView === 'view1' ? 'view2' : 'view1';
  }
}
