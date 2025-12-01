import { Component, signal, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-component-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dynamic-component-demo.html',
  styleUrl: './dynamic-component-demo.scss',
})
export class DynamicComponentDemo {
  // Signal that stores currently selected dynamic component
  currentComponent = signal<Type<any> | null>(null);

  // List of dynamic components the user can choose from
  dynamicComponents: { name: string; component: Type<any> }[] = [
    { name: 'HelloComponent', component: HelloComponent },
    { name: 'WorldComponent', component: WorldComponent },
  ];

  // Theory content (interview-quality)
  theory = {
    title: 'Dynamic Component Demo (Angular 17+)',
    content: `
      <h3>What Are Dynamic Components?</h3>
      <p>
        Dynamic components are Angular components that are created and inserted into the DOM at runtime 
        instead of being statically declared in the template. Angular 17+ makes this seamless using 
        <code>ngComponentOutlet</code> along with standalone components.
      </p>

      <h3>Why Dynamic Components Matter</h3>
      <ul>
        <li><strong>Runtime flexibility</strong> — render different components based on user interaction or data.</li>
        <li><strong>Perfect for modular systems</strong> — dashboards, widgets, plugin systems.</li>
        <li><strong>Cleaner architecture</strong> — reduces giant condition-based templates.</li>
        <li><strong>Works with Signals</strong> — component switching becomes reactive and instant.</li>
      </ul>

      <h3>How Angular Loads Components Dynamically</h3>
      <ul>
        <li><code>ngComponentOutlet</code> renders a component instance at runtime.</li>
        <li>Standalone components simplify dynamic loading (no NgModule required).</li>
        <li>Signals store selected component types for reactive rendering.</li>
      </ul>

      <h3>Real-World Use Cases</h3>
      <ul>
        <li>Admin dashboards (switching widgets at runtime)</li>
        <li>Form builders / dynamic UI builders</li>
        <li>Modals and overlays (load only when needed)</li>
        <li>Feature flags — dynamically load new UI experiments</li>
      </ul>

      <h3>Interview Talking Points</h3>
      <ul>
        <li>Difference between <strong>static vs dynamic</strong> component rendering.</li>
        <li>Angular compiler behavior with standalone components.</li>
        <li>How <strong>signals</strong> help avoid ZoneJS for dynamic rendering.</li>
        <li>Performance considerations — dynamic loading reduces initial bundle size.</li>
      </ul>
    `
  };

  // Code example displayed inside the UI
  codeExample = `
<div *ngFor="let comp of dynamicComponents">
  <button (click)="currentComponent.set(comp.component)">
    {{ comp.name }}
  </button>
</div>

<ng-container *ngIf="currentComponent()"
              [ngComponentOutlet]="currentComponent()">
</ng-container>
`.trim();
}

// ----------------------
// Dummy Dynamic Components
// ----------------------

@Component({
  standalone: true,
  selector: 'app-hello',
  template: `<p>Hello Component Rendered!</p>`,
})
export class HelloComponent {}

@Component({
  standalone: true,
  selector: 'app-world',
  template: `<p>World Component Rendered!</p>`,
})
export class WorldComponent {}
