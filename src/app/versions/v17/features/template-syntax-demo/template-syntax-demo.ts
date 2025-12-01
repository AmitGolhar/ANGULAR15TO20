import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-syntax-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-syntax-demo.html',
  styleUrls: ['./template-syntax-demo.scss'], // unchanged
})
export class TemplateSyntaxDemo {

  userName = '';
  isLoggedIn = false;
  items = ['Angular', 'React', 'Vue'];
  framework = 'Angular';

  theory = {
    title: 'Template Syntax in Angular — Complete Deep Dive (Angular 17–20)',
    content: `
      <h3>What Is Template Syntax?</h3>
      <p>
        Template syntax defines how Angular connects your component class (TypeScript)
        with the view (HTML).  
        It includes interpolation, bindings, directives, pipes, and new Angular 17+
        control-flow blocks.
      </p>

      <h3>Why Template Syntax Matters</h3>
      <ul>
        <li><strong>Dynamic UI</strong> — instantly reflect state changes.</li>
        <li><strong>Event-driven interactions</strong> — clicks, inputs, keypresses.</li>
        <li><strong>Data binding</strong> — one-way, two-way, and event binding.</li>
        <li><strong>Conditional rendering</strong> — @if, @switch, @for.</li>
        <li><strong>Reusable templates</strong> — directives, pipes, variables.</li>
      </ul>

      <h3>1. Interpolation (One-way Model → View)</h3>
      <pre><code>{{ framework }}</code></pre>

      <h3>2. Property Binding</h3>
      <pre><code>[disabled]="!isLoggedIn"</code></pre>

      <h3>3. Event Binding</h3>
      <pre><code>(click)="toggleLogin()"</code></pre>

      <h3>4. Two-way Binding (FormsModule Required)</h3>
      <pre><code>[(ngModel)]="userName"</code></pre>
      <p>Automatically syncs <strong>class value ↔ input field</strong>.</p>

      <h3>5. Structural Directives (Legacy Syntax)</h3>
      <pre><code>*ngIf, *ngFor, *ngSwitch</code></pre>

      <h3>6. Modern Angular 17+ Control Flow (Recommended)</h3>
      <pre><code>
@if (isLoggedIn) {
  Welcome!
} @else {
  Please log in.
}

@for (item of items; track item) {
  {{ item }}
}

@switch (framework) {
  @case ('Angular') { ... }
  @default { ... }
}
      </code></pre>

      <h3>7. Attribute, Class & Style Binding</h3>
      <pre><code>
[class.active]="isLoggedIn"
[style.color]="'red'"
[attr.aria-label]="userName"
      </code></pre>

      <h3>8. Pipes in Template Syntax</h3>
      <pre><code>{{ userName | uppercase }}</code></pre>

      <h3>9. Built-in Template Variables</h3>
      <pre><code>
@for (item of items; track item) {
  {{ $index }} - {{ item }}
}
      </code></pre>

      <h3>10. Signals + Template Syntax</h3>
      <p>Works inside interpolation & @if/@for loops:</p>
      <pre><code>{{ count() }}</code></pre>

      <h3>Common Interview Questions</h3>
      <ul>
        <li>Explain the difference between interpolation and property binding.</li>
        <li>How does event binding work internally?</li>
        <li>What is two-way binding and how does Angular implement it?</li>
        <li>Difference between @if/@for and *ngIf/*ngFor?</li>
        <li>How do pipes work in template expressions?</li>
        <li>Explain template variables and their use cases.</li>
        <li>How does Angular change detection update templates?</li>
      </ul>
    `
  };

  codeExample = `
<input [(ngModel)]="userName" placeholder="Enter your name" />

<button (click)="toggleLogin()">
  {{ isLoggedIn ? 'Logout' : 'Login' }}
</button>

@if (isLoggedIn) {
  <p>Hello, {{ userName || 'Guest' }}!</p>
}

<ul>
  @for (item of items; track item) {
    <li>{{ item }}</li>
  }
</ul>
  `.trim();

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
