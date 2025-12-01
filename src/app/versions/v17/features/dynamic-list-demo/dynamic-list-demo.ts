import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // needed for ngModel

@Component({
  selector: 'app-dynamic-list-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dynamic-list-demo.html',
  styleUrl: './dynamic-list-demo.scss', // unchanged
})
export class DynamicListDemo {

  items = ['Apple', 'Banana', 'Cherry'];
  newItem = '';

  theory = {
    title: 'Dynamic List Demo in Angular — Adding, Removing & Managing Lists',
    content: `
      <h3>What is a Dynamic List?</h3>
      <p>
        A dynamic list is a real-time UI that updates as users add or remove items from an array.
        Angular automatically re-renders the UI based on array changes.
      </p>

      <h3>Why Dynamic Lists Matter</h3>
      <ul>
        <li><strong>Real-time interaction</strong> — shows how Angular updates UI when data changes.</li>
        <li><strong>Core concept</strong> — used in todos, carts, settings, menus, dashboards, etc.</li>
        <li><strong>Demonstrates both binding & events</strong> — ngModel + click handlers.</li>
        <li><strong>Teaches array mutation vs immutability</strong> — important for performance.</li>
      </ul>

      <h3>Angular 17+ Best Practice: Using @for Instead of *ngFor</h3>
      <p>
        Although this example still supports <code>*ngFor</code>, Angular 17 introduced 
        the new block-based loop syntax:
      </p>

      <pre><code>
@for (item of items; track item) {
  &lt;li&gt;{{ item }}&lt;/li&gt;
} @empty {
  &lt;li&gt;No items yet...&lt;/li&gt;
}
      </code></pre>

      <h3>Importance of track (Performance)</h3>
      <p>
        <code>track</code> ensures Angular updates only changed items instead of re-rendering the whole list.
      </p>

      <pre><code>
@for (item of items; track item) { ... }
      </code></pre>

      <h3>Immutability vs Mutation (Critical Interview Topic)</h3>
      <ul>
        <li><strong>Mutable</strong>: using <code>push()</code> or <code>splice()</code> updates the array in-place.</li>
        <li><strong>Immutable</strong>: creating a new array triggers better reactivity (Signals, OnPush).</li>
      </ul>

      <h3>Signals + Lists (Future-Proof Approach)</h3>
      <pre><code>
items = signal(['A', 'B']);

items.update(list => [...list, 'C']);
      </code></pre>

      <h3>Common Interview Questions</h3>
      <ul>
        <li>Difference between @for and *ngFor?</li>
        <li>Why is track important in list rendering?</li>
        <li>Explain mutable vs immutable array updates?</li>
        <li>How does Angular detect list changes?</li>
        <li>How would you optimize a list with 10,000 items?</li>
      </ul>
    `
  };

  // ---------- Code Shown in UI ----------
  codeExample = `
<ul>
  @for (item of items; track item) {
    <li>{{ item }} <button (click)="removeItem($index)">Remove</button></li>
  } @empty {
    <li>No items yet...</li>
  }
</ul>

<input [(ngModel)]="newItem" placeholder="Add new item" />
<button (click)="addItem()">Add Item</button>
`.trim();

  // ---------- Component Logic ----------
  addItem() {
    const value = this.newItem.trim();
    if (value) {
      this.items.push(value);   // keeping your original logic
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1); // original functionality kept
  }
}
