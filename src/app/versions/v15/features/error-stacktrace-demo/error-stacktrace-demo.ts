import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-error-stacktrace-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-stacktrace-demo.html',
  styleUrls: ['./error-stacktrace-demo.scss'],
})
export class ErrorStacktraceDemo {

  theoryBlocks = [
    {
      title: 'Why Stack Traces & Error Handling Matter in Angular (v15–v20)',
      content: `
        <p>Stack traces show the exact call path that led to an error — including the
        file name and line number. This is critical in Angular apps where errors may come from components,
        services, RxJS streams, async/await, or change detection.</p>

        <p>Modern Angular (v15+) also supports <strong>zone-less mode</strong>, meaning
        stack traces must be clean and framework noise should be reduced to easily trace root causes.</p>
      `
    },
    {
      title: 'Triggering an Error (Demo)',
      content: `
        <p>Below is a simple example of triggering a runtime error by accessing a
        property on <code>undefined</code>. Open browser DevTools to inspect the full stack trace.</p>
      `
    },
    {
      title: 'Angular Global Error Handling (Modern Approach)',
      content: `
        <p>Angular allows setting a custom <code>ErrorHandler</code> to intercept ALL unhandled errors.</p>
        <p>This is useful for:</p>
        <ul>
          <li>Logging errors to a server (Sentry, Datadog, Firebase, ELK)</li>
          <li>Showing user-friendly error UIs</li>
          <li>Handling runtime crashes in production</li>
        </ul>
      `
    }
  ];

  codeExamples = {
    demoComponent: `import { Component } from '@angular/core';

@Component({
  selector: 'app-error-demo',
  standalone: true,
  template: \`
    <button (click)="causeError()">Cause Error</button>
  \`
})
export class ErrorDemoComponent {
  causeError() {
    const obj: any = undefined;
    // This throws → shows a clean stack trace
    console.log(obj.nonExistent.property);
  }
}`,
    globalErrorHandler: `import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: unknown): void {
    console.error('🔥 GlobalErrorHandler caught:', error);
    // send to logging server, toast, or analytics
  }
}

// In main.ts (Angular 16+):
bootstrapApplication(AppComponent, {
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
});`,
    rxjsErrorHandling: `import { catchError } from 'rxjs/operators';

this.http.get('/api/data').pipe(
  catchError(err => {
    console.error('API error:', err);
    return EMPTY;
  })
).subscribe();`,
    asyncTryCatch: `async loadData() {
  try {
    const result = await this.api.getData();
    console.log(result);
  } catch (err) {
    console.error('Async error:', err);
  }
}`
  };

  // DEMO METHOD — triggers a real error
  triggerError() {
    const obj: any = null;
    console.log(obj.property.xyz); // intentional crash
  }
}
