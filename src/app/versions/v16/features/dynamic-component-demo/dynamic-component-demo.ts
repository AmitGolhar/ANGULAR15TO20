import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-component-demo',
  templateUrl: './dynamic-component-demo.html',
  styleUrl: './dynamic-component-demo.scss', // unchanged as per rules
})
export class DynamicComponentDemo {

  theory = {
    title: 'Dynamic Components in Angular — Complete Deep Dive (Angular 15–20)',
    content: `
      <h3>What Are Dynamic Components?</h3>
      <p>
        Dynamic components are components that are <strong>created and inserted at runtime</strong>
        instead of being declared statically in a template.  
        Angular provides APIs to load, render, destroy, and inject components programmatically.
      </p>

      <h3>Why Dynamic Components Matter</h3>
      <ul>
        <li><strong>Highly flexible UIs</strong> — dashboards, popups, modals, overlays.</li>
        <li><strong>CMS-driven pages</strong> — load components based on backend configuration.</li>
        <li><strong>Plugin architecture</strong> — extend apps without touching templates.</li>
        <li><strong>Conditional UI rendering</strong> without rewriting templates.</li>
      </ul>

      <h3>Core APIs for Dynamic Component Loading</h3>
      <p>Angular changed the approach over versions:</p>
      <ul>
        <li><strong>Old (Angular < 14)</strong>: ComponentFactoryResolver</li>
        <li><strong>New (Angular 14–20)</strong>: \`ViewContainerRef.createComponent()\`</li>
      </ul>

      <pre><code>viewContainerRef.createComponent(SomeComponent)</code></pre>

      <h3>Example Use Cases</h3>
      <ul>
        <li>Modal dialogs</li>
        <li>Tooltips</li>
        <li>Dynamic forms</li>
        <li>Admin dashboards</li>
        <li>Microfrontend/component marketplace</li>
        <li>Drag & Drop dynamic UI zones</li>
      </ul>

      <h3>Dynamic Inputs & Outputs (Interview MUST KNOW)</h3>
      <pre><code>const componentRef = vcr.createComponent(CardComponent);
componentRef.instance.title = 'Injected Title';
componentRef.instance.action.subscribe(...)</code></pre>

      <h3>Destroying Dynamic Components</h3>
      <pre><code>componentRef.destroy();</code></pre>

      <h3>Dynamic Components + Standalone Architecture</h3>
      <p>
        Angular 15+ makes dynamic loading easier by allowing components to be lazy-loaded dynamically:
      </p>

      <pre><code>import('./card.component').then(m => 
  vcr.createComponent(m.CardComponent)
);</code></pre>

      <h3>Advanced: Dynamic Component Catalog (Enterprise Pattern)</h3>
      <p>
        Applications can map strings → components for runtime rendering:
      </p>

      <pre><code>const registry = {
  banner: BannerComponent,
  card: CardComponent,
  chart: ChartComponent
};

const compType = registry[widget.type];
vcr.createComponent(compType);</code></pre>

      <h3>Performance Best Practices</h3>
      <ul>
        <li>Lazy-load heavy components via dynamic imports.</li>
        <li>Destroy unused dynamic components to free memory.</li>
        <li>Use \`ChangeDetectionStrategy.OnPush\` inside dynamic components.</li>
        <li>Prefer dynamic loading for rarely used UI widgets.</li>
      </ul>

      <h3>Real Interview Questions</h3>
      <ul>
        <li>Explain the difference between static and dynamic components.</li>
        <li>How do you pass data to a dynamic component?</li>
        <li>How is dynamic loading different in Angular 14+?</li>
        <li>How would you implement a dynamic dashboard?</li>
      </ul>
    `
  };

  codeExample = `
import { ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-demo',
  template: '<ng-container #container></ng-container>',
})
export class DynamicDemo {

  @ViewChild('container', { read: ViewContainerRef })
  vcr!: ViewContainerRef;

  async loadCard() {
    const { CardComponent } = await import('./card.component');
    const comp = this.vcr.createComponent(CardComponent);
    comp.instance.title = 'Dynamically Loaded Card';
  }
}
`.trim();

}
