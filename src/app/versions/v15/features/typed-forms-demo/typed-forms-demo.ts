import { Component } from '@angular/core';

@Component({
  selector: 'app-typed-forms-demo',
  templateUrl: './typed-forms-demo.html',
  styleUrl: './typed-forms-demo.scss', // unchanged, as required
})
export class TypedFormsDemo {

  theory = {
    title: 'Typed Angular Forms — Complete Deep Dive (Angular 14–20)',
    content: `
      <h3>What Are Typed Forms?</h3>
      <p>
        Typed Forms give <strong>full TypeScript type safety</strong> to Angular Reactive Forms.
        Introduced in Angular 14 and fully stabilized in 15+, Typed Forms eliminate <code>any</code> 
        and allow form controls, groups, arrays, and values to be strongly typed.
      </p>

      <h3>Why Typed Forms Matter</h3>
      <ul>
        <li><strong>Compile-time safety</strong> — invalid control/value access is caught during build.</li>
        <li><strong>Accurate form.value type</strong> — no more guessing or type casting.</li>
        <li><strong>Non-nullable controls</strong> avoid unnecessary <code>!</code> operators.</li>
        <li><strong>Better IntelliSense</strong> — autocomplete for controls, values, errors, validators.</li>
        <li><strong>Resolves long-standing form bugs</strong> caused by untyped values.</li>
      </ul>

      <h3>Typed FormGroup Basics</h3>
      <p>
        A typed FormGroup must map each control name to a typed <code>FormControl</code> or nested 
        <code>FormGroup</code>.
      </p>

      <pre><code>interface LoginForm {
  email: FormControl&lt;string&gt;;
  password: FormControl&lt;string&gt;;
}</code></pre>

      <h3>Why <code>nonNullable: true</code> is Important</h3>
      <p>
        By default, Angular forms allow <strong>null</strong>. Non-nullable controls enforce strict state:
      </p>

      <pre><code>new FormControl('', { nonNullable: true })</code></pre>

      <p>
        This ensures the control type is <strong>string</strong>, not <strong>string | null</strong>.
      </p>

      <h3>Typed Nested FormGroups</h3>
      <pre><code>interface ProfileForm {
  name: FormControl&lt;string&gt;;
  address: FormGroup&lt;{
    city: FormControl&lt;string&gt;;
    zip: FormControl&lt;number&gt;;
  }>;
}</code></pre>

      <h3>Typed FormArray</h3>
      <pre><code>const tags = new FormArray&lt;FormControl&lt;string&gt;&gt;([
  new FormControl('angular'),
  new FormControl('typescript')
]);</code></pre>

      <h3>Typed FormBuilder (Angular 14+)</h3>
      <p>FormBuilder supports full type inference:</p>

      <pre><code>const fb = new FormBuilder().nonNullable;

const form = fb.group({
  email: ['', Validators.required],
  age: [25],
});</code></pre>

      <h3>Typed Validators</h3>
      <p>
        Validators preserve type safety:
      </p>

      <pre><code>const email = new FormControl('', {
  nonNullable: true,
  validators: [Validators.required, Validators.email]
});</code></pre>

      <h3>Accessing Typed Values</h3>
      <pre><code>const name: string = form.controls.name.value;
const age: number | null = form.controls.age.value;</code></pre>

      <h3>Typed Async Validators (Interview Topic)</h3>
      <pre><code>const username = new FormControl('', {
  asyncValidators: [checkUsernameAvailability]
});</code></pre>

      <h3>Benefits in Large Enterprise Apps</h3>
      <ul>
        <li>Reduces form-related bugs drastically.</li>
        <li>Improves refactor safety — changing model updates the form type.</li>
        <li>Better integration with backend DTO interfaces.</li>
        <li>Perfect fit for complex, multi-step forms.</li>
      </ul>

      <h3>Forms + Signals (Angular 16+)</h3>
      <p>Typed forms work great with signals:</p>

      <pre><code>form.valueChanges.subscribe(value => formSignal.set(value));</code></pre>

      <h3>Best Practices for Typed Forms (Interview Gold)</h3>
      <ul>
        <li>Use <code>FormBuilder.nonNullable</code> whenever possible.</li>
        <li>Always type your form models (<code>interface</code>).</li>
        <li>Prefer Reactive Forms over Template Forms for large apps.</li>
        <li>Use typed FormArray for dynamic repeating UI fields.</li>
        <li>Never use <code>any</code> in forms.</li>
      </ul>
    `
  };

  codeExample = `
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface UserForm {
  name: FormControl<string>;
  age: FormControl<number | null>;
}

const form = new FormGroup<UserForm>({
  name: new FormControl('John Doe', { nonNullable: true }),
  age: new FormControl(null),
});

// Type-safe access:
const username: string = form.value.name!;
`.trim();

}
