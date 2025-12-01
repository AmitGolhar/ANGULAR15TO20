import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-linked-signal-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './linked-signal-demo.html',
  styleUrl: './linked-signal-demo.scss',
})
export class LinkedSignalDemo {
  // Base signals
  private _firstName = signal('');
  private _lastName = signal('');

  // Getters & Setters for ngModel compatibility
  get firstName(): string {
    return this._firstName();
  }
  set firstName(value: string) {
    this._firstName.set(value);
  }

  get lastName(): string {
    return this._lastName();
  }
  set lastName(value: string) {
    this._lastName.set(value);
  }

  // Computed Signal (auto-updates when source signals change)
  fullName = computed(() => {
    const fn = this._firstName();
    const ln = this._lastName();
    return `${fn} ${ln}`.trim();
  });

  theory = {
    title: 'Linked Signal Demo — Derived & Computed Signals in Angular',
    content: `
      <h3>What Are Linked Signals?</h3>
      <p>
        Linked Signals (also known as derived signals) are signals whose values are 
        calculated from one or more <strong>source signals</strong>. Whenever the source 
        signals change, the computed signal automatically recalculates.
      </p>

      <h3>Why Linked Signals Matter</h3>
      <ul>
        <li><strong>Automatic dependency tracking</strong> — no need for manual subscriptions.</li>
        <li><strong>Pure computed logic</strong> — always in sync with source state.</li>
        <li><strong>Better performance</strong> — recalculates only when its dependencies change.</li>
        <li><strong>Avoids redundant UI updates</strong> — Angular re-renders only what depends on it.</li>
      </ul>

      <h3>How Computed Signals Work Internally</h3>
      <ul>
        <li>Angular tracks which signals are accessed inside <code>computed()</code>.</li>
        <li>When those source signals change, <code>computed</code> re-evaluates.</li>
        <li>Angular notifies only components or expressions that read <code>fullName()</code>.</li>
      </ul>

      <h3>Real Use Cases</h3>
      <ul>
        <li>Full name from first & last name</li>
        <li>Cart total from item prices and quantities</li>
        <li>Dashboard KPIs computed from multiple inputs</li>
        <li>Theme or layout computed from user settings</li>
        <li>Form validation state derived from form fields</li>
      </ul>

      <h3>Computed vs Effect vs Writable Signals</h3>
      <ul>
        <li><strong>Writable Signal</strong>: Holds value, can be updated → <code>signal()</code></li>
        <li><strong>Computed Signal</strong>: Read-only derived value → <code>computed()</code></li>
        <li><strong>Effect</strong>: Side effects when dependent signals change → <code>effect()</code></li>
      </ul>

      <h3>Common Interview Questions</h3>
      <ul>
        <li>What is the difference between <code>computed</code> and <code>effect</code>?</li>
        <li>When does Angular recompute a computed signal?</li>
        <li>Are computed signals memoized?</li>
        <li>Can computed signals depend on other computed signals?</li>
        <li>How do signals compare to RxJS <code>BehaviorSubject</code>?</li>
      </ul>
    `
  };

  codeExample = `
<input [(ngModel)]="firstName" placeholder="First Name" />
<input [(ngModel)]="lastName" placeholder="Last Name" />
<p>Full Name: {{ fullName() }}</p>
`.trim();
}
