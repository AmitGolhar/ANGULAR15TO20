import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // provides @if, @for, @switch

@Component({
  selector: 'app-controlflow-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controlflow-example.html',
  styleUrls: ['./controlflow-example.scss'], // unchanged
})
export class ControlflowExample {

  isLoggedIn = false;
  selectedOption: 'home' | 'about' | 'other' = 'home';
  items = ['Item 1', 'Item 2', 'Item 3'];

  theory = {
    title: 'Control Flow Example in Angular — Combining @if, @for, and @switch',
    content: `
      <h3>What is a Control Flow Example?</h3>
      <p>
        A practical demonstration showing how Angular 17+ control-flow blocks 
        <code>@if</code>, <code>@for</code>, and <code>@switch</code>
        work together to create powerful, dynamic UI logic without structural directives.
      </p>

      <h3>Why It Matters</h3>
      <ul>
        <li><strong>Unified template syntax</strong> — all control-flow blocks use the same block format.</li>
        <li><strong>Cleaner templates</strong> — avoids nested <code>*ngIf</code>/<code>*ngFor</code>.</li>
        <li><strong>Better rendering performance</strong> — built on Angular’s new block-based compiler.</li>
        <li><strong>Fine-grained reactivity</strong> — pairs perfectly with Signals.</li>
      </ul>

      <h3>How @if Works</h3>
      <ul>
        <li>Conditionally renders or destroys DOM nodes.</li>
        <li>Supports <code>@else</code> and <code>@else if</code>.</li>
        <li>Faster and cleaner compared to legacy <code>*ngIf</code>.</li>
      </ul>

      <h3>How @for Works</h3>
      <ul>
        <li>Modern replacement for <code>*ngFor</code>.</li>
        <li>Uses <strong>block-based DOM rendering</strong>.</li>
        <li>Supports <code>@empty</code> fallback.</li>
        <li>Supports <strong>track</strong> expressions for stable identities.</li>
      </ul>

      <h3>How @switch Works</h3>
      <ul>
        <li>Replaces <code>*ngSwitchCase</code> and <code>*ngSwitchDefault</code>.</li>
        <li>Ideal for multi-view or state-driven UI.</li>
        <li>Renders only the matching case block.</li>
      </ul>

      <h3>Signals + Control Flow (Best Practice)</h3>
      <p>
        Control-flow blocks re-evaluate only when dependent Signals change.  
        This provides <strong>ultra-fast UI updates</strong> with minimal re-rendering.
      </p>

      <h3>Common Interview Questions</h3>
      <ul>
        <li>Difference between @for and *ngFor?</li>
        <li>How does Angular’s block-based rendering improve performance?</li>
        <li>What is the purpose of @empty?</li>
        <li>When to use @switch vs multiple @if blocks?</li>
        <li>How do Signals interact with control-flow blocks?</li>
      </ul>
    `
  };

  codeExample = `
@if (isLoggedIn) {
  <ul>
    @for (item of items; track item) {
      <li>{{ item }}</li>
    } @empty {
      <li>No items available.</li>
    }
  </ul>

  @switch (selectedOption) {
    @case ('home') {
      <p>Home Page</p>
    }
    @case ('about') {
      <p>About Page</p>
    }
    @default {
      <p>Other Page</p>
    }
  }
} @else {
  <p>Please log in to continue.</p>
}

<button (click)="isLoggedIn = !isLoggedIn">Toggle Login</button>
<button (click)="selectedOption = 'home'">Home</button>
<button (click)="selectedOption = 'about'">About</button>
`.trim();

}
