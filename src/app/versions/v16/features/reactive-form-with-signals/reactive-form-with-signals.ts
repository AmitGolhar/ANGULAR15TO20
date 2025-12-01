import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { signal, effect, computed, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-reactive-form-with-signals',
  templateUrl: './reactive-form-with-signals.html',
  styleUrl: './reactive-form-with-signals.scss', // unchanged
})
export class ReactiveFormWithSignals {

  theory = {
    title: 'Reactive Forms with Signals in Angular — Complete Deep Dive (Angular 16–20)',
    content: `
      <h3>What Are Reactive Forms with Signals?</h3>
      <p>
        Angular’s Reactive Forms are traditionally RxJS-based, but Angular 16 introduced 
        <strong>Signals</strong>, a new reactive system optimized for performance and fine-grained reactivity.
        Combining both gives you:
      </p>

      <ul>
        <li><strong>Reactive Forms</strong> → validation, form groups, form arrays.</li>
        <li><strong>Signals</strong> → high-performance granular reactivity.</li>
      </ul>

      <h3>Why Use Signals with Reactive Forms?</h3>
      <ul>
        <li><strong>Improved Performance</strong> — no global change detection across the component tree.</li>
        <li><strong>Predictable reactivity</strong> — signals update only what depends on them.</li>
        <li><strong>Cleaner code</strong> — no RxJS boilerplate for trivial tasks.</li>
        <li><strong>Granular state</strong> — track individual form fields without subscribing to entire form.</li>
        <li><strong>Easier testing</strong> — synchronous reactivity.</li>
      </ul>

      <h3>Syncing Reactive Forms to Signals</h3>
      <p>
        With Signals, we can watch form changes using <code>effect()</code> and store the form state in a signal.
      </p>

      <h3>Signal-Based Derived Values (computed)</h3>
      <pre><code>fullName = computed(() => this.formSignal().name + ' (' + this.formSignal().age + ')');</code></pre>

      <h3>Best Use Cases</h3>
      <ul>
        <li>Real-time previews (live updating UI)</li>
        <li>Complex forms where performance matters</li>
        <li>Multi-step forms</li>
        <li>Dynamic form fields</li>
        <li>Dashboard inputs where only specific widgets must re-render</li>
      </ul>

      <h3>Signals vs. RxJS in Forms (Interview MUST KNOW)</h3>
      <ul>
        <li><strong>Signals</strong> → synchronous, granular reactivity for UI updates</li>
        <li><strong>RxJS</strong> → async streams, great for backend/API/streaming logic</li>
        <li>Angular encourages <strong>Signals for UI</strong>, <strong>RxJS for async logic</strong></li>
      </ul>

      <h3>Performance Advantages</h3>
      <ul>
        <li>No extra CD cycles — signal triggers only dependent views.</li>
        <li>Better than manually subscribing to valueChanges.</li>
        <li>Zero memory leaks — signals don’t need unsubscribe.</li>
      </ul>

      <h3>Interview Questions You Will Now Ace</h3>
      <ul>
        <li>How do signals improve reactive form performance?</li>
        <li>Difference between effect() and computed()?</li>
        <li>How to sync Reactive Form → Signals and vice versa?</li>
        <li>When to use signals instead of RxJS?</li>
        <li>How do signals reduce global CD checks?</li>
      </ul>
    `
  };

  // ----------------------------------------------
  // ✅ REAL Implementation: Reactive Form + Signals
  // ----------------------------------------------

  // Typed reactive form
  form: FormGroup = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    age: new FormControl<number | null>(null, { validators: [Validators.min(1)] }),
  });

  // Signal storing form's current value
  formSignal: WritableSignal<{ name: string; age: number | null }> = signal(this.form.value);

  // Track individual fields using computed()
  nameSignal = computed(() => this.formSignal().name);
  ageSignal = computed(() => this.formSignal().age);

  // Derived value (computed)
  profileSummary = computed(() => {
    const { name, age } = this.formSignal();
    return age ? `${name} (${age} years)` : name;
  });

  // Sync Reactive Form → Signal automatically
  constructor() {
    effect(() => {
      this.formSignal.set(this.form.value);
    });
  }

  codeExample = `
import { FormGroup, FormControl } from '@angular/forms';
import { signal, effect, computed } from '@angular/core';

const form = new FormGroup({
  name: new FormControl(''),
  age: new FormControl(null),
});

// Signal holding form state
const formSignal = signal(form.value);

// Watch form value changes
effect(() => {
  formSignal.set(form.value);
});

// Derived value from form
const summary = computed(() => 
  formSignal().name + ' (' + formSignal().age + ')'
);

console.log(summary());
`.trim();

}
