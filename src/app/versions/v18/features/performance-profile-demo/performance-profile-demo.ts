import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-performance-profile-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance-profile-demo.html',
  styleUrl: './performance-profile-demo.scss',
})
export class PerformanceProfileDemo {

  logs: string[] = [];

  theory = {
    title: 'Performance Profiling in Angular — Deep Dive (Angular 17–20)',
    content: `
      <h3>What Is Performance Profiling?</h3>
      <p>
        Performance profiling is the process of measuring how fast your application executes code,
        how efficiently it renders UI, and how well it manages CPU, memory, and change detection cycles.
        This helps you <strong>identify bottlenecks</strong> and optimize Angular apps for a smoother experience.
      </p>

      <h3>Why It Matters</h3>
      <ul>
        <li>Detects slow loops, heavy calculations, or unnecessary DOM updates.</li>
        <li>Improves Angular change detection and rendering performance.</li>
        <li>Helps optimize memory usage and prevent performance leaks.</li>
        <li>Enhances UX, reduces jank, and improves Core Web Vitals.</li>
      </ul>

      <h3>Profiling Tools You Should Know (Important for Interviews)</h3>
      <ul>
        <li><strong>Chrome DevTools Performance Tab</strong> — flamegraphs, scripting time, memory.</li>
        <li><strong>Angular DevTools</strong> — change detection cycles, component re-renders.</li>
        <li><strong>console.time()</strong> — micro-measuring synchronous blocks.</li>
        <li><strong>Profiler API</strong> — performance.mark(), performance.measure()</li>
        <li><strong>Memory Profiler</strong> — detect leaks and large allocations.</li>
        <li><strong>Zone-less Angular</strong> — reduces unnecessary checks.</li>
      </ul>

      <h3>Angular Change Detection Profiling</h3>
      <p>Use Angular DevTools → Profiler to see:</p>
      <ul>
        <li>Which components re-render unnecessarily</li>
        <li>Signals and inputs causing change detection</li>
        <li>Number of CD cycles triggered per action</li>
      </ul>

      <h3>Using Performance.mark() & Performance.measure()</h3>
      <pre><code>
performance.mark('start');
heavyTask();
performance.mark('end');
performance.measure('Heavy Task Timing', 'start', 'end');
      </code></pre>

      <h3>Signals Impact on Performance</h3>
      <p>
        Signals reduce the number of DOM updates by only re-rendering subscribed parts.
        Good for high-frequency UI operations like counters, timers, or animations.
      </p>

      <h3>Common Causes of Poor Angular Performance</h3>
      <ul>
        <li>Large loops inside templates or TS</li>
        <li>Unnecessary HTTP calls</li>
        <li>Heavy calculation inside event handlers</li>
        <li>Too many watchers in older Angular patterns</li>
        <li>Multiple nested *ngFor loops</li>
        <li>Large images not optimized</li>
      </ul>

      <h3>Interview Questions You Can Answer Now</h3>
      <ul>
        <li>How do you profile Angular app performance?</li>
        <li>What is a flamegraph and how do you interpret it?</li>
        <li>What triggers Angular change detection?</li>
        <li>How do signals improve performance?</li>
        <li>Difference between performance.now() and console.time()</li>
        <li>How do you detect memory leaks in Angular?</li>
        <li>What is zone-less Angular and why is it faster?</li>
      </ul>
    `
  };

  codeExample = `
console.time('expensiveOperation');

for (let i = 0; i < 1000000; i++) {}

console.timeEnd('expensiveOperation');
`.trim();

  runPerformanceTest() {
    console.time('expensiveOperation');

    // Simulated expensive computation
    for (let i = 0; i < 1000000; i++) {}

    console.timeEnd('expensiveOperation');
    this.logs.push('Expensive operation completed. Check console for timing.');
  }
}
