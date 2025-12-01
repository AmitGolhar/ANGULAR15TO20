import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // provides @switch, @case, @default

@Component({
  selector: 'app-control-flow-switch-demo',
  standalone: true,
  templateUrl: './control-flow-switch-demo.html',
  styleUrls: ['./control-flow-switch-demo.scss'], // unchanged
  imports: [CommonModule],
})
export class ControlFlowSwitchDemo {

  selectedOption = 'home';

  theory = {
    title: 'Control Flow with @switch in Angular — Complete Deep Dive (Angular 17–20)',
    content: `
      <h3>What is @switch?</h3>
      <p>
        <code>@switch</code> is Angular’s new block-based conditional rendering syntax, introduced in Angular 17. 
        It works like the JavaScript <strong>switch-case</strong> statement but for templates, allowing you to render
        one matching block out of many.
      </p>

      <pre><code>
@switch (value) {
  @case ('A') { ... }
  @case ('B') { ... }
  @default { ... }
}
      </code></pre>

      <h3>Why @switch Matters</h3>
      <ul>
        <li><strong>Cleaner multi-branch logic</strong> — prevents nested @if blocks.</li>
        <li><strong>Better readability</strong> — clear structure for multiple states.</li>
        <li><strong>Faster rendering</strong> — Angular creates only the matching block.</li>
        <li><strong>Easy maintainability</strong> — add/remove cases without modifying DOM structure.</li>
        <li><strong>Compiler-optimized</strong> — part of Angular’s block-based rendering engine.</li>
      </ul>

      <h3>@switch vs @if vs *ngSwitch (Interview-Important)</h3>
      <ul>
        <li><strong>@switch</strong> is native to Angular’s new block syntax, faster and cleaner.</li>
        <li><strong>*ngSwitch</strong> is legacy structural directive syntax → more overhead.</li>
        <li><strong>@if chains</strong> work but become messy when many conditions exist.</li>
        <li><strong>@switch</strong> is preferred for state-driven views (tabs, menus, pages).</li>
      </ul>

      <h3>Case Matching Behavior</h3>
      <ul>
        <li>Angular performs a <strong>strict comparison</strong> (===).</li>
        <li>Only the first matched case gets rendered.</li>
        <li>@default executes only if no case matches.</li>
      </ul>

      <h3>Performance Notes (Block Rendering Engine)</h3>
      <ul>
        <li>@switch creates a separate compiled block for each @case.</li>
        <li>Angular destroys non-matching blocks completely.</li>
        <li>Switching cases re-creates only the required block → very fast.</li>
      </ul>

      <h3>SSR (Server-Side Rendering) Behavior</h3>
      <ul>
        <li>@switch conditions are evaluated <strong>before HTML is streamed</strong>.</li>
        <li>Only matching case markup is included in server response.</li>
      </ul>

      <h3>Real Use Cases</h3>
      <ul>
        <li>Navigation tabs</li>
        <li>Dashboard sections</li>
        <li>Multi-step forms</li>
        <li>Dynamic pages (home/about/contact)</li>
        <li>Role-based content switching</li>
      </ul>

      <h3>Common Pitfalls</h3>
      <ul>
        <li>Forgetting <strong>@default</strong> fallback.</li>
        <li>Comparing wrong datatypes (string vs number).</li>
        <li>Using @if chains instead of @switch for multi-state logic.</li>
      </ul>

      <h3>Interview Questions You Can Answer</h3>
      <ul>
        <li>Difference between @switch and *ngSwitch?</li>
        <li>How does @switch improve performance?</li>
        <li>Can @switch replace nested @if statements?</li>
        <li>Is matching strict or loose comparison?</li>
        <li>How does Angular destroy and re-render blocks?</li>
      </ul>
    `
  };

  codeExample = `
@switch (selectedOption) {
  @case ('home') {
    <p>Home Page</p>
  }
  @case ('about') {
    <p>About Page</p>
  }
  @case ('contact') {
    <p>Contact Page</p>
  }
  @default {
    <p>Page Not Found</p>
  }
}
`.trim();

}
