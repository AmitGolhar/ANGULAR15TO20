import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-resource-api-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './resource-api-demo.html',
  styleUrl: './resource-api-demo.scss',
})
export class ResourceApiDemo {
  // Writable signals
  private _username = signal('');
  private _response = signal<string | null>(null);
  private _loading = signal(false);

  // Getters/setters for template binding
  get username(): string { return this._username(); }
  set username(value: string) { this._username.set(value); }

  get response(): string | null { return this._response(); }
  get loading(): boolean { return this._loading(); }

  constructor(private http: HttpClient) {}

  // Fetch GitHub user using HttpClient + RxJS + signals
  fetchUser() {
    if (!this.username.trim()) return;

    this._loading.set(true);
    this._response.set(null);

    this.http.get<any>(`https://api.github.com/users/${this.username}`)
      .pipe(finalize(() => this._loading.set(false)))
      .subscribe({
        next: data => this._response.set(JSON.stringify(data, null, 2)),
        error: err => this._response.set(`Error: ${err.message}`)
      });
  }

  // Theory block
  theory = {
    title: 'Resource API Demo — Fetching Remote Data with Angular Signals',
    content: `
      <h3>What is a Resource API?</h3>
      <p>
        A Resource API represents remote data (REST APIs, HTTP endpoints, external services) that the application 
        fetches and reacts to. With Angular 16+, you combine <strong>signals</strong> with <strong>HttpClient</strong> 
        or the new experimental <em>fetch-based resource API</em> to create reactive data flows.
      </p>

      <h3>Why Use Signals with Resource APIs?</h3>
      <ul>
        <li><strong>Automatic UI updates</strong> — signals refresh the view instantly on data changes.</li>
        <li><strong>Clear loading & error handling</strong> — simple reactive booleans instead of Subjects.</li>
        <li><strong>Cleaner code</strong> — no need for async pipes or manual subscriptions for simple cases.</li>
        <li><strong>Better performance</strong> — granular updates only re-render what is needed.</li>
      </ul>

      <h3>How the Pattern Works</h3>
      <ul>
        <li>User types a value → bound to a writable signal.</li>
        <li>Click event triggers HTTP request.</li>
        <li>Response or error updates signals (<code>_response</code>, <code>_loading</code>).</li>
        <li>UI automatically re-renders based on updated signal values.</li>
      </ul>

      <h3>Interview-Level Concepts</h3>
      <ul>
        <li><strong>Signals vs RxJS</strong> — signals are for state, RxJS is for event streams & async flow.</li>
        <li><strong>Push-based reactivity</strong> — signals notify dependents only when they change.</li>
        <li><strong>Using finalize()</strong> — ensures loading state resets even on error.</li>
        <li><strong>Signal-driven UI</strong> — no need for ChangeDetectorRef.</li>
        <li><strong>Error boundary patterns</strong> — storing error responses in signals.</li>
      </ul>

      <h3>Real Use Case Examples</h3>
      <ul>
        <li>Fetching user profiles or dashboard data.</li>
        <li>Search-as-you-type API integration.</li>
        <li>Pagination & infinite scroll with signals.</li>
        <li>Loading indicators powered by signal toggling.</li>
      </ul>
    `
  };

  // Code sample displayed in the UI
  codeExample = `
<input [(ngModel)]="username" placeholder="Enter GitHub username" />
<button (click)="fetchUser()">Fetch User</button>

<div *ngIf="loading">Loading...</div>
<pre *ngIf="response">{{ response }}</pre>
`.trim();
}
