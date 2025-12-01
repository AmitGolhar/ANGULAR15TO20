import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-standalone-default-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './timepicker-demo.html',
  styleUrl: './timepicker-demo.scss',
})
export class StandaloneDefaultDemo {
  // Signal that controls visibility of content
  private _isActive = signal<boolean>(true);
// Timepicker values
time = signal('12:00');

hours = Array.from({ length: 24 }, (_, i) => (i < 10 ? '0' + i : '' + i));
minutes = Array.from({ length: 60 }, (_, i) => (i < 10 ? '0' + i : '' + i));

  // Getter/setter for template-friendly access
  get isActive(): boolean { return this._isActive(); }
  set isActive(value: boolean) { this._isActive.set(value); }

  // Sample list
  items = [
    { name: 'Item 1', id: 1 },
    { name: 'Item 2', id: 2 },
    { name: 'Item 3', id: 3 },
  ];

  theory = {
    title: 'Standalone Default Demo (Angular 17+)',
    content: `
      <h3>What Are Standalone Components?</h3>
      <p>
        Standalone components allow Angular apps to run <strong>without traditional NgModules</strong>. 
        Everything required by a component—like directives, pipes, and other components—is imported 
        directly into its <code>imports</code> array.
      </p>

      <h3>Default Behavior of Standalone Components</h3>
      <ul>
        <li><strong>Self-contained:</strong> All dependencies are declared at the component level.</li>
        <li><strong>Module-free routing:</strong> Works directly with the router without AppModule.</li>
        <li><strong>Lightweight build output:</strong> Tree shaking improves bundle optimization.</li>
        <li><strong>Better scalability:</strong> Ideal for large, multi-team Angular apps.</li>
      </ul>

      <h3>Why This Demo Matters (Interview Points)</h3>
      <ul>
        <li>Shows how Angular 17+ shifts from <code>NgModule</code> to <strong>component-first architecture</strong>.</li>
        <li>Demonstrates <strong>signal-based state</strong> controlling UI visibility instead of Zones.</li>
        <li>Illustrates how standalone components fit into <strong>clean architecture</strong>.</li>
        <li>Proves you can integrate forms, router, and lists seamlessly without modules.</li>
      </ul>

      <h3>Real-world Usage</h3>
      <ul>
        <li>Microfrontend-style architectures</li>
        <li>Feature-isolated component libraries</li>
        <li>Enterprise apps migrating off NgModules</li>
      </ul>
    `
  };

  codeExample = `
<button (click)="isActive = !isActive">
  Toggle Active
</button>

<div *ngIf="isActive">The component is active!</div>

<ul>
  <li *ngFor="let item of items">{{ item.name }}</li>
</ul>
`.trim();



get timeValue(): string {
  return this.time();
}
set timeValue(val: string) {
  this.time.set(val);
}

}
