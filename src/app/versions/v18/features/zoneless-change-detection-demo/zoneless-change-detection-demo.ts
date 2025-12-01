import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zoneless-change-detection-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zoneless-change-detection-demo.html',
  styleUrl: './zoneless-change-detection-demo.scss',
})
export class ZonelessChangeDetectionDemo {
  // Angular Signals automatically notify the template without NgZone
  counter = signal(0);

  theory = {
    title: 'Zoneless Change Detection in Angular — Deep Dive for Angular 17–20',
    content: `
      <h3>What is Zoneless Change Detection?</h3>
      <p>
        Zoneless Change Detection means Angular runs without <strong>NgZone</strong> 
        (which normally patches browser APIs like setTimeout, events, XHR).  
        Instead of triggering automatic global change detection, Angular updates the UI only when 
        <strong>Signals</strong>, <strong>Input changes</strong>, or <strong>explicit triggers</strong> occur.
      </p>

      <h3>Why Zoneless Mode Matters</h3>
      <ul>
        <li><strong>Massive performance improvement</strong> — no global change detection runs.</li>
        <li><strong>Predictable reactivity</strong> — only reactive primitives (Signals, Inputs, Effects) update UI.</li>
        <li><strong>Better for large or real-time apps</strong> — avoids running CD on every browser event.</li>
        <li><strong>Perfect for high-frequency updates</strong> — dashboards, gaming, streaming UI, IoT apps.</li>
      </ul>

      <h3>How Angular Works Without Zones</h3>
      <p>
        Angular 17+ can be bootstrapped with:
      </p>
      <pre><code>
bootstrapApplication(AppComponent, {
  zone: 'noop'  // disables NgZone entirely
});
      </code></pre>

      <p>In this mode:</p>
      <ul>
        <li>No monkey-patching of <code>addEventListener</code>, <code>setTimeout</code>, <code>XHR</code>, etc.</li>
        <li>No global change detection after each event.</li>
        <li>Signals handle fine-grained reactivity instead.</li>
      </ul>

      <h3>Why Signals + Zoneless Mode Work Perfectly Together</h3>
      <ul>
        <li>Signals update only the exact DOM bindings that depend on them.</li>
        <li>No need for Angular to run change detection across the whole app.</li>
        <li>Every <code>signal.set()</code> → triggers ONLY the affected UI.</li>
      </ul>

      <h3>Performance Scenario</h3>
      <p>
        Without zones, 10,000 DOM elements don't re-render when a single counter updates — 
        only the specific binding that depends on <code>counter()</code>.
      </p>

      <h3>Important Note</h3>
      <p>
        You still can manually trigger CD in rare cases using 
        <code>ChangeDetectorRef.detectChanges()</code>, but signals make this rarely needed.
      </p>

      <h3>Real Interview Questions</h3>
      <ul>
        <li>How does Angular 17+ handle reactivity without NgZone?</li>
        <li>What is the difference between Zone-based and Zoneless CD?</li>
        <li>Why do Signals work perfectly with zoneless mode?</li>
        <li>How does Angular know when to update the UI without zones?</li>
        <li>What types of apps benefit the most from zoneless CD?</li>
      </ul>
    `
  };

  codeExample = `
<!-- UI updates instantly using Signals, even in zoneless mode -->
<button (click)="counter.set(counter() + 1)">Increment Counter</button>

<p>Counter Value: {{ counter() }}</p>
`.trim();
}
