import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-extended-template-syntax-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './extended-template-syntax-demo.html',
  styleUrl: './extended-template-syntax-demo.scss',
})
export class ExtendedTemplateSyntaxDemo {
  // Signals for reactive state
  showItems = signal<boolean>(true);
  items = signal<string[]>(['Angular', 'React', 'Vue', 'Svelte']);
  newItem = signal<string>('');

  // Add new item to the list
  addItem() {
    const value = this.newItem().trim();
    if (value) {
      this.items.set([...this.items(), value]);
      this.newItem.set('');
    }
  }

  // Theory section
  theory = {
    title: 'Extended Template Syntax Demo (Angular 17+)',
    content: `
      <h3>Extended Template Syntax</h3>
      <p>
        Angular 17+ introduces new built-in control flow blocks and signal-driven reactivity for clean,
        predictable UI updates.
      </p>
      <ul>
        <li><strong>@if, @for</strong> replace legacy *ngIf and *ngFor for cleaner templates.</li>
        <li><strong>Signals</strong> update the view reactively without relying on Zones.</li>
        <li>Templates become shorter, faster, and easier to maintain.</li>
      </ul>

      <h3>Why This Matters</h3>
      <ul>
        <li>Reduces boilerplate in complex templates.</li>
        <li>Improves readability in UI-heavy components.</li>
        <li>Better performance with fine-grained reactivity.</li>
      </ul>
    `
  };

  // Template code displayed in UI
  codeExample = `
<button (click)="showItems.set(!showItems())">
  Toggle Items
</button>

<input [(ngModel)]="newItem" placeholder="Add item" />
<button (click)="addItem()">Add</button>

<div *ngIf="showItems()">
  <ul>
    <li *ngFor="let item of items()">{{ item }}</li>
  </ul>
</div>
`.trim();
}
