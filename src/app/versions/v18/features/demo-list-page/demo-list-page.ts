import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-demo-list-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './demo-list-page.html',
  styleUrl: './demo-list-page.scss',
})
export class DemoListPage {

  demos = [
    { name: 'Basic Component Demo', route: '/features/basic-component-demo' },
    { name: 'Dynamic Import Demo', route: '/features/dynamic-import-demo' },
    { name: 'Hydration Demo', route: '/features/hydration-demo' },
    { name: 'Optimized Image Demo', route: '/features/optimized-image-demo' },
    { name: 'Performance Profile Demo', route: '/features/performance-profile-demo' },
    { name: 'Responsive Layout Demo', route: '/features/responsive-layout-demo' },
    { name: 'Server Side Render Demo', route: '/features/server-side-render-demo' },
    { name: 'Theme Switcher Demo', route: '/features/theme-switcher-demo' },
    { name: 'View Transitions Example', route: '/features/view-transitions-example' },
    { name: 'Zoneless Change Detection Demo', route: '/features/zoneless-change-detection-demo' },
  ];

  theory = {
    title: 'Demo List Page — Angular Routing, Navigation, and Architecture',
    content: `
      <h3>What Is a Demo List Page?</h3>
      <p>
        A Demo List Page acts as a central navigation hub where multiple Angular demos, 
        components, or features are listed with direct links.  
        It showcases routing, dynamic lists, UI structuring, and component organization.
      </p>

      <h3>Why It Matters</h3>
      <ul>
        <li><strong>Organizes multiple demos</strong> — great for design systems, documentation, or dev playgrounds.</li>
        <li><strong>Demonstrates routing</strong> — each list item links to a different feature.</li>
        <li><strong>Standalone routing-friendly</strong> — ideal in Angular 16–20 apps.</li>
        <li><strong>Scalable architecture</strong> — new demos can simply be added to the list.</li>
      </ul>

      <h3>Angular Routing Deep Dive (Important for Interviews)</h3>
      <ul>
        <li><strong>RouterModule</strong> enables navigation with <code>routerLink</code>.</li>
        <li><strong>Standalone routing</strong> uses <code>provideRouter()</code> in main.ts.</li>
        <li><strong>Lazy loading</strong> improves performance using <code>loadComponent</code> or <code>loadChildren</code>.</li>
        <li><strong>Route guards</strong> secure pages — <code>canActivate</code>, <code>canMatch</code>.</li>
        <li><strong>PreloadingStrategy</strong> optimizes load time.</li>
        <li><strong>SSR routing</strong> renders URLs on the server for SEO.</li>
      </ul>

      <h3>Best Practices for Demo/Docs Pages</h3>
      <ul>
        <li>Use <code>@for</code> loop (Angular 17+) for efficient rendering.</li>
        <li>Keep demo list strongly typed with interfaces.</li>
        <li>Use <code>[routerLink]</code> instead of manual navigation.</li>
        <li>Group demos by category when list grows large.</li>
      </ul>

      <h3>Signals for Navigation State (Optional)</h3>
      <pre><code>
selectedDemo = signal(null);
(onClick) => selectedDemo.set(demo);
      </code></pre>

      <h3>View Transitions Support</h3>
      <p>
        Angular router supports automatic <strong>view transitions</strong> in supported browsers.
      </p>

      <h3>Common Interview Questions</h3>
      <ul>
        <li>Difference between routerLink and navigate()?</li>
        <li>How does lazy loading improve performance?</li>
        <li>Explain standalone routing in Angular.</li>
        <li>What are route guards and where are they used?</li>
        <li>What is hydration in routing-based SSR apps?</li>
        <li>How does Angular handle view transitions?</li>
      </ul>
    `
  };

  codeExample = `
<ul>
  @for (demo of demos; track demo.name) {
    <li>
      <a [routerLink]="demo.route">{{ demo.name }}</a>
    </li>
  }
</ul>
`.trim();

}
