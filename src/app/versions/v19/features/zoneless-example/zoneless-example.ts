import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zoneless-example',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './zoneless-example.html',
  styleUrl: './zoneless-example.scss',
})
export class ZonelessExample {
  // Reactive state using signals
  counter = signal<number>(0);
  isVisible = signal<boolean>(true);

  theory = {
    title: 'Zoneless Example (Angular 17+)',
    content: `
      <h3>What Is Zoneless Mode?</h3>
      <p>
        Angular traditionally uses <strong>NgZone</strong> to automatically trigger change detection 
        on every async event (click, HTTP, timer, etc).  
        <br><br>
        With Angular 17+, applications can run <strong>without zones</strong>, relying entirely on 
        <strong>signals-based reactivity</strong> for UI updates.
      </p>

      <h3>Why Zoneless Apps Matter</h3>
      <ul>
        <li><strong>No unnecessary change detection</strong> — only components depending on signals re-render.</li>
        <li><strong>Better performance</strong> — ideal for large-scale or real-time apps.</li>
        <li><strong>Predictable updates</strong> — signals update UI exactly when values change.</li>
        <li><strong>Simplified mental model</strong> — no more zone patching of events.</li>
      </ul>

      <h3>How Signals Replace NgZone (Interview Points)</h3>
      <ul>
        <li>Signals automatically notify Angular's reactive graph.</li>
        <li>No global dirty checking — only affected DOM nodes update.</li>
        <li>Works perfectly with <code>runInInjectionContext</code> and <code>effect</code> for advanced workflows.</li>
        <li>Improves performance on mobile & low-powered devices.</li>
      </ul>

      <h3>Real-World Use Cases</h3>
      <ul>
        <li>High-frequency UI apps (stock charts, dashboards, gaming UIs).</li>
        <li>Signal-based forms without ControlValueAccessor overhead.</li>
        <li>Zoneless SSR + partial hydration setups.</li>
      </ul>
    `
  };

  codeExample = `
<button (click)="counter.set(counter() + 1)">Increment</button>
<button (click)="isVisible.set(!isVisible())">Toggle Visibility</button>

<div *ngIf="isVisible()">
  Counter: {{ counter() }}
</div>
`.trim();
}
