import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-replay-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-replay-demo.html',
  styleUrl: './event-replay-demo.scss',
})
export class EventReplayDemo {
  // Reactive state managed by Signals
  private _message = signal('');

  // Getter/setter for ngModel compatibility
  get message(): string { return this._message(); }
  set message(value: string) { this._message.set(value); }

  // Stores all logged events
  eventLog: string[] = [];

  // Log event with timestamp for replaying later
  logEvent() {
    const timestamp = new Date().toLocaleTimeString();
    this.eventLog = [...this.eventLog, `${timestamp}: ${this.message}`];
  }

  // Replay all stored events (simulation)
  replayEvents() {
    console.log('--- Replaying Events ---');
    this.eventLog.forEach((event) => console.log(event));
  }

  theory = {
    title: 'Event Replay Demo — Debugging & State Rehydration Concepts',
    content: `
      <h3>What is Event Replay?</h3>
      <p>
        Event Replay is the technique of capturing events (user actions, state changes, inputs)
        and later re-emitting them to reproduce past behavior. This concept is widely used in 
        <strong>debugging</strong>, <strong>undo/redo systems</strong>, <strong>time-travel debugging</strong>, 
        and <strong>event-sourced architectures</strong>.
      </p>

      <h3>Why Event Replay Matters</h3>
      <ul>
        <li><strong>Debugging Assist</strong> — reproduce bugs by replaying user steps.</li>
        <li><strong>Undo / Redo Features</strong> — store past events, not snapshots.</li>
        <li><strong>Time Travel DevTools</strong> — replay state over time like NgRx does.</li>
        <li><strong>Offline Sync</strong> — replay queued events when network returns.</li>
        <li><strong>Event Sourcing</strong> — store events as the source of truth, not final state.</li>
      </ul>

      <h3>Signals + Event Replay</h3>
      <p>
        Angular Signals make event replay extremely efficient because signals 
        <strong>reactively update</strong> the UI on every replayed event.  
        No manual change detection needed — even in <strong>zoneless Angular</strong>.
      </p>

      <h3>Event Replay vs Normal Logging</h3>
      <ul>
        <li><strong>Logging:</strong> Just records messages.</li>
        <li><strong>Replay:</strong> Actually re-runs actions or state mutations.</li>
      </ul>

      <h3>Common Real-World Use Cases</h3>
      <ul>
        <li>Replaying user actions for debugging (Chrome DevTools style).</li>
        <li>Undo/Redo in design tools, editors, forms.</li>
        <li>Event sourcing in financial or audit-trail systems.</li>
        <li>Syncing queued events after reconnecting from offline mode.</li>
        <li>Testing UI flows without manual interaction.</li>
      </ul>

      <h3>Interview Questions</h3>
      <ul>
        <li>What is Event Replay and how is it used in debugging?</li>
        <li>Difference between Event Replay and State Replay?</li>
        <li>How does NgRx Time Travel relate to event replay?</li>
        <li>How do Signals help in implementing event replay?</li>
        <li>Can event replay be used in SSR/CSR hydration scenarios?</li>
      </ul>
    `
  };

  codeExample = `
<input [(ngModel)]="message" placeholder="Type a message" />

<button (click)="logEvent()">Log Event</button>
<button (click)="replayEvents()">Replay Logged Events</button>

<ul>
  <li *ngFor="let log of eventLog">
    {{ log }}
  </li>
</ul>
`.trim();
}
