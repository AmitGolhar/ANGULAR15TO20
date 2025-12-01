import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-component-demo',
  templateUrl: './basic-component-demo.html',
  styleUrl: './basic-component-demo.scss', // unchanged
})
export class BasicComponentDemo {

  theory = {
    title: 'Basic Component in Angular — Complete Deep Dive (Angular 15–20)',
    content: `
      <h3>What is a Basic Component?</h3>
      <p>
        A basic Angular component is the <strong>fundamental UI building block</strong>.  
        It combines three things:
      </p>
      <ul>
        <li><strong>Template</strong> — HTML that defines the view</li>
        <li><strong>Styles</strong> — CSS/SCSS for this component only</li>
        <li><strong>Class (TypeScript)</strong> — logic, state, events</li>
      </ul>
      <p>
        Every Angular application is composed of many such components organized in a hierarchy.
      </p>

      <h3>Why Basic Components Matter</h3>
      <ul>
        <li><strong>Reusable</strong> — build once, use anywhere.</li>
        <li><strong>Encapsulation</strong> — components isolate logic + styles from others.</li>
        <li><strong>Scalable Architecture</strong> — large apps are component trees.</li>
        <li><strong>Testable</strong> — small, isolated units.</li>
        <li><strong>Component-first Angular (15+)</strong> — standalone components remove NgModules.</li>
      </ul>

      <h3>Essential Features of Angular Components</h3>
      <ul>
        <li><strong>Inputs</strong> — pass data from parent</li>
        <li><strong>Outputs</strong> — emit events back to parent</li>
        <li><strong>Lifecycle hooks</strong> — ngOnInit, ngOnDestroy, etc.</li>
        <li><strong>Host bindings/listeners</strong> — modify host element</li>
        <li><strong>Change Detection Strategies</strong> — Default vs OnPush</li>
        <li><strong>View Encapsulation</strong> — Emulated, Shadow DOM, None</li>
      </ul>

      <h3>Standalone Components (Angular 15+)</h3>
      <p>
        Components can now work without NgModules:
      </p>
      <pre><code>standalone: true</code></pre>

      <h3>Lifecycle Hooks (Interview MUST KNOW)</h3>
      <ul>
        <li><strong>ngOnInit</strong> — initialize data</li>
        <li><strong>ngOnDestroy</strong> — cleanup subscriptions</li>
        <li><strong>ngOnChanges</strong> — runs when @Input changes</li>
        <li><strong>ngAfterViewInit</strong> — access child components/DOM</li>
      </ul>

      <h3>Change Detection — Default vs OnPush</h3>
      <p>
        <strong>Default</strong>: checks entire component tree<br>
        <strong>OnPush</strong>: checks only when inputs or signals change — best for performance
      </p>

      <pre><code>
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
      </code></pre>

      <h3>Encapsulation Modes</h3>
      <ul>
        <li><strong>Emulated</strong> — default, styles scoped using attribute selectors</li>
        <li><strong>ShadowDom</strong> — uses real browser Shadow DOM</li>
        <li><strong>None</strong> — global styles</li>
      </ul>

      <h3>Host Bindings & Listeners</h3>
      <pre><code>
@HostBinding('class.active') isActive = true;
@HostListener('click') onClick() {}
      </code></pre>

      <h3>Inputs & Outputs (Basic API Surface)</h3>
      <pre><code>
@Input() title: string = '';
@Output() clicked = new EventEmitter();
      </code></pre>

      <h3>When to Create a Component?</h3>
      <ul>
        <li>UI structure repeats</li>
        <li>Logic can be reused</li>
        <li>Feature is isolated</li>
        <li>Complex view needs separation</li>
      </ul>

      <h3>Interview Questions You Can Now Answer</h3>
      <ul>
        <li>What is a component in Angular?</li>
        <li>How does view encapsulation work?</li>
        <li>Explain lifecycle hooks in order.</li>
        <li>What is the difference between Input and Output?</li>
        <li>What is the role of the selector?</li>
        <li>Difference between Smart vs Dumb components?</li>
        <li>What are standalone components?</li>
      </ul>
    `
  };

  codeExample = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-component-demo',
  template: '<p>Hello, I am a basic component!</p>',
})
export class BasicComponentDemo {}
`.trim();

}
