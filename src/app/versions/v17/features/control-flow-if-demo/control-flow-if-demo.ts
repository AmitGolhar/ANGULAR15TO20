import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // provides @if, @for, @switch

@Component({
  selector: 'app-control-flow-if-demo',
  standalone: true,
  templateUrl: './control-flow-if-demo.html',
  styleUrls: ['./control-flow-if-demo.scss'], // unchanged
  imports: [CommonModule],
})
export class ControlFlowIfDemo {

  isLoggedIn = false;
  userRole: 'admin' | 'user' | 'guest' = 'guest'; // extra logic demo

  theory = {
    title: 'Control Flow with @if in Angular — Complete Deep Dive (Angular 17–20)',
    content: `
      <h3>What is @if?</h3>
      <p>
        <code>@if</code> is Angular’s new block-based conditional rendering syntax introduced in Angular 17. 
        It replaces the older <strong>*ngIf</strong> with a more powerful, faster, and more readable approach.
      </p>

      <pre><code>
@if (condition) {
  ...
} @else {
  ...
}
      </code></pre>

      <h3>Why @if Matters</h3>
      <ul>
        <li><strong>Performance</strong> — Angular fully removes/creates DOM nodes instead of toggling them.</li>
        <li><strong>Cleaner syntax</strong> — no more structural directive prefix (*) clutter.</li>
        <li><strong>Better compiler optimization</strong> — part of Angular's block-based template system.</li>
        <li><strong>Built-in @else and @else if</strong> — no awkward <code>*ngIf... else</code> syntax.</li>
        <li><strong>Fine-grained reactivity</strong> — integrates beautifully with Signals.</li>
      </ul>

      <h3>@if vs *ngIf — (Important Interview Difference)</h3>
      <ul>
        <li>*ngIf is a structural directive → heavier, more overhead.</li>
        <li>@if is compiled natively → faster DOM updates.</li>
        <li>@if supports block scoping, @else, and @else if in a natural flow.</li>
        <li>*ngIf requires <code>&lt;ng-template&gt;</code> for else logic.</li>
      </ul>

      <h3>Using @else if — cleaner replacement for nested conditions</h3>
      <pre><code>
@if (userRole === 'admin') {
  &lt;p&gt;Admin Dashboard&lt;/p&gt;
} @else if (userRole === 'user') {
  &lt;p&gt;User Dashboard&lt;/p&gt;
} @else {
  &lt;p&gt;Guest View&lt;/p&gt;
}
      </code></pre>

      <h3>DOM Creation & Destruction (How @if Actually Works)</h3>
      <ul>
        <li>When a condition becomes false → Angular removes the entire block from the DOM.</li>
        <li>When it becomes true → Angular re-creates DOM nodes.</li>
        <li>Angular reuses views when possible for performance.</li>
      </ul>

      <h3>@if With Signals — Best Practice in Angular 17–20</h3>
      <p>
        Signals allow UI to update instantly with no manual marking:
      </p>
      <pre><code>
isLoggedIn = signal(false);

@if (isLoggedIn()) {
  ...
}
      </code></pre>

      <h3>Server-Side Rendering (SSR) Note</h3>
      <p>
        @if works perfectly with Angular SSR since conditions are evaluated before page is streamed.
      </p>

      <h3>Where @if Is Commonly Used</h3>
      <ul>
        <li>Authentication UI: login/logout</li>
        <li>Role-based access control</li>
        <li>Loading indicators</li>
        <li>Form validation messages</li>
        <li>Rendering expensive UI only when needed</li>
      </ul>

      <h3>Common Interview Questions</h3>
      <ul>
        <li>Difference between @if and *ngIf?</li>
        <li>How does @if improve performance?</li>
        <li>Explain block scoping in Angular templates.</li>
        <li>How does Angular remove/add DOM nodes under @if?</li>
        <li>How does @if integrate with Signals and reactivity?</li>
        <li>When would you choose @switch instead of @if?</li>
      </ul>
    `
  };

  codeExample = `
@if (isLoggedIn) {
  <p>Welcome back, user!</p>
} @else {
  <p>Please log in to continue.</p>
}

<button (click)="isLoggedIn = !isLoggedIn">
  Toggle Login State
</button>
`.trim();

}
