import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-signal-form-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './basic-signal-form-demo.html',
  styleUrl: './basic-signal-form-demo.scss',
})
export class BasicSignalFormDemo {
  // Private signals for full reactivity
  private _name = signal('');
  private _email = signal('');

  // Allow ngModel to interact with signals via getters/setters
  get name(): string {
    return this._name();
  }
  set name(value: string) {
    this._name.set(value);
  }

  get email(): string {
    return this._email();
  }
  set email(value: string) {
    this._email.set(value);
  }

  theory = {
    title: 'Basic Signal Form Demo — Signals + Template Forms',
    content: `
      <h3>What Are Signals in Angular?</h3>
      <p>
        Signals are Angular’s new reactive state system introduced in Angular 16+. 
        A signal stores a value and notifies the template or any dependents whenever the value changes.
      </p>

      <h3>Why Use Signals in Template-Driven Forms?</h3>
      <ul>
        <li><strong>Automatic UI updates</strong> — signals trigger DOM updates instantly.</li>
        <li><strong>Better performance</strong> — updates are granular, not global.</li>
        <li><strong>No need for change detection zones</strong> — works in zoneless Angular.</li>
        <li><strong>Simpler than Reactive Forms</strong> for small forms.</li>
      </ul>

      <h3>How Signals Work with ngModel Binding</h3>
      <p>
        Signals themselves are functions, so Angular cannot directly bind <code>[(ngModel)]</code> to them.  
        Using <strong>getters & setters</strong> bridges template binding with signal reactivity.
      </p>

      <h3>Key Benefits of Using Signals in Form State</h3>
      <ul>
        <li>No need for FormControl, FormGroup, or subscriptions.</li>
        <li>The form values are plain strings, easy to access.</li>
        <li>Signals automatically trigger precise DOM updates.</li>
        <li>Smoother rendering for large forms or fast-typing scenarios.</li>
      </ul>

      <h3>Advanced Form Scenarios With Signals</h3>
      <ul>
        <li>Derived signals for computed fields (e.g., full name).</li>
        <li>Effects for validation, saving, debouncing.</li>
        <li>Combining signals with FormGroup for hybrid patterns.</li>
        <li>Persisting form state using localStorage with signals.</li>
      </ul>

      <h3>Common Interview Questions</h3>
      <ul>
        <li>Why do we need getters & setters for ngModel + signals?</li>
        <li>Difference between Signals vs Observables in forms?</li>
        <li>Can signals fully replace Reactive Forms?</li>
        <li>How do signals behave with zoneless change detection?</li>
        <li>Explain derived signals and effects in form scenarios.</li>
      </ul>
    `
  };

  codeExample = `
<!-- Template example -->
<input [(ngModel)]="name" placeholder="Name">
<input [(ngModel)]="email" placeholder="Email">

<p>Your name is: {{ name }}</p>
<p>Your email is: {{ email }}</p>
`.trim();
}
