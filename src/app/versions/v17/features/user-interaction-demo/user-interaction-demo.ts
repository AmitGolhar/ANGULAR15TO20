import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-interaction-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-interaction-demo.html',
  styleUrl: './user-interaction-demo.scss', // unchanged
})
export class UserInteractionDemo {

  message = '';
  counter = 0;

  theory = {
    title: 'User Interaction in Angular — Deep Dive (Events, Binding, UI Updates)',
    content: `
      <h3>What Is This Demo?</h3>
      <p>
        This example demonstrates how Angular handles user input and events using 
        <strong>(click)</strong>, <strong>(input)</strong>, and <strong>[(ngModel)]</strong>.
        User interaction is one of the core parts of Angular’s template syntax.
      </p>

      <h3>Why User Interaction Matters</h3>
      <ul>
        <li><strong>Real-time UI updates</strong> — forms, counters, chat boxes, dashboards.</li>
        <li><strong>Two-way binding</strong> — syncs UI ↔ component automatically.</li>
        <li><strong>Event handling</strong> — responds to user actions reliably.</li>
        <li><strong>State updates</strong> — clicks, typing, keypress, mouse movement.</li>
      </ul>

      <h3>1. Two-Way Binding ([(ngModel)])</h3>
      <p>
        Two-way binding combines:
      </p>
      <pre><code>[ngModel] + (ngModelChange)</code></pre>

      <p>This keeps the input and component value fully synchronized.</p>

      <pre><code>
<input [(ngModel)]="message" />
      </code></pre>

      <h3>2. Event Binding (click, input, keyup, change)</h3>
      <pre><code>(click)="counter++"</code></pre>

      <p>
        Angular listens to native DOM events and updates component state immediately.
      </p>

      <h3>3. Template Expressions</h3>
      <pre><code>{{ message }}</code></pre>

      <p>Angular automatically updates the UI when component fields change.</p>

      <h3>4. Keyboard & Mouse Interaction (Advanced)</h3>
      <pre><code>(keyup.enter)="submit()"
(mouseover)="highlight()"</code></pre>

      <h3>5. Change Detection Basics</h3>
      <ul>
        <li>Any event triggers an update cycle.</li>
        <li>Angular evaluates bindings, updates the DOM with new values.</li>
      </ul>

      <h3>6. Signals Alternative (Angular 17+ Best Practice)</h3>
      <pre><code>
message = signal('');
counter = signal(0);

(counter()) // read
counter.update(v => v + 1); 
      </code></pre>

      <p>Signals eliminate the need for zones & reduce change-detection cost.</p>

      <h3>7. Debouncing & Throttling (Real-World Skill)</h3>
      <p>For heavy user interactions:</p>

      <pre><code>
(input)="onSearch($event.target.value)" // debounce inside function
      </code></pre>

      <h3>8. Template Variables for Interaction</h3>
      <pre><code>
<input #box (keyup)="log(box.value)" />
      </code></pre>

      <h3>9. Accessibility Notes</h3>
      <ul>
        <li>Always include <code>aria-label</code> for interactive elements.</li>
        <li>Ensure buttons are keyboard-accessible (ENTER/SPACE).</li>
      </ul>

      <h3>Interview Questions You Can Now Answer</h3>
      <ul>
        <li>How does Angular handle two-way binding internally?</li>
        <li>Difference between event binding and two-way binding?</li>
        <li>How does Angular update the DOM after an event?</li>
        <li>What is the role of ngModel?</li>
        <li>How do signals change event handling?</li>
        <li>Why debounce on input events?</li>
        <li>Explain templates vs reactive forms for user interaction.</li>
      </ul>
    `
  };

  codeExample = `
<input [(ngModel)]="message" placeholder="Type a message" />

<button (click)="counter = counter + 1">
  Increment Counter
</button>

<p>Message: {{ message }}</p>
<p>Counter: {{ counter }}</p>
`.trim();

}
