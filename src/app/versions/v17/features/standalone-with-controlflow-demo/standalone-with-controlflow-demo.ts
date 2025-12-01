import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone-with-controlflow-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone-with-controlflow-demo.html',
  styleUrl: './standalone-with-controlflow-demo.scss', // unchanged
})
export class StandaloneWithControlflowDemo {

  isVisible = true;
  selectedOption: 'dashboard' | 'settings' | 'other' = 'dashboard';
  items = ['Item A', 'Item B', 'Item C'];

  theory = {
    title: 'Standalone Component with Control Flow — Deep Dive (Angular 17–20)',
    content: `
      <h3>What Is This Demo?</h3>
      <p>
        This example demonstrates how a <strong>standalone component</strong> can use Angular 17+ 
        <strong>control-flow blocks</strong> such as <code>@if</code>, <code>@for</code>, 
        and <code>@switch</code>.  
        Even without NgModules, standalone components support the entire Angular template system.
      </p>

      <h3>Why It Matters</h3>
      <ul>
        <li><strong>Standalone architecture</strong> — modern Angular encourages module-less components.</li>
        <li><strong>Clean control flow</strong> — replaces older *ngIf, *ngFor, *ngSwitch.</li>
        <li><strong>Better performance</strong> — new block-based compiler only updates affected blocks.</li>
        <li><strong>Reusability</strong> — standalone components are portable and self-contained.</li>
        <li><strong>Predictable rendering</strong> — block syntax produces cleaner, more maintainable templates.</li>
      </ul>

      <h3>Standalone Components — Key Points (Interview MUST KNOW)</h3>
      <ul>
        <li>No NgModule — the component imports its own dependencies.</li>
        <li>Ideal for feature isolation, microfrontends, and large enterprise apps.</li>
        <li>Better tree-shaking & reduced bundle sizes.</li>
        <li>Recommended default since Angular 16+</li>
      </ul>

      <h3>New Angular Control Flow</h3>
      <p>
        Angular 17 introduced block syntaxes:
      </p>

      <pre><code>
@if (condition) { ... }
@for (item of list; track item) { ... }
@switch (value) {
  @case ('something') { ... }
  @default { ... }
}
      </code></pre>

      <h3>Why Block Syntax Replaced Structural Directives</h3>
      <ul>
        <li>No more <code>*</code> sugar syntax → cleaner templates</li>
        <li>Compiler optimizes blocks directly → fewer change detection passes</li>
        <li>Simplified nested conditions, loops, switches</li>
        <li>SSR-friendly (evaluated before streaming)</li>
      </ul>

      <h3>Signals + Control Flow (Best Practice)</h3>
      <p>
        Control-flow blocks re-evaluate only when dependent signals change:
      </p>

      <pre><code>
isVisible = signal(true);

@if (isVisible()) { ... }
      </code></pre>

      <h3>Common Interview Questions</h3>
      <ul>
        <li>What are standalone components and why were they introduced?</li>
        <li>Difference between @if/@for/@switch and their *ngIf/*ngFor/*ngSwitch counterparts?</li>
        <li>How does Angular's block-based rendering engine improve performance?</li>
        <li>What is the purpose of the track expression in @for?</li>
        <li>Explain how SSR interacts with Angular control flow blocks.</li>
      </ul>
    `
  };

  codeExample = `
@if (isVisible) {
  <ul>
    @for (item of items; track item) {
      <li>{{ item }}</li>
    }
  </ul>

  @switch (selectedOption) {
    @case ('dashboard') {
      <p>Dashboard View</p>
    }
    @case ('settings') {
      <p>Settings View</p>
    }
    @default {
      <p>Other View</p>
    }
  }
}

<button (click)="isVisible = !isVisible">Toggle Visibility</button>
<button (click)="selectedOption = 'dashboard'">Dashboard</button>
<button (click)="selectedOption = 'settings'">Settings</button>
`.trim();

}
