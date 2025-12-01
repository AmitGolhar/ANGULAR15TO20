import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-performance-benchmark-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './performance-benchmark-demo.html',
  styleUrl: './performance-benchmark-demo.scss',
})
export class PerformanceBenchmarkDemo {
  // Signals for benchmark settings and results
  iterations = signal<number>(1000);
  results = signal<number[]>([]);

  runBenchmark() {
    const start = performance.now();

    const output: number[] = [];
    const count = this.iterations(); // snapshot for performance

    for (let i = 0; i < count; i++) {
      output.push(i * 2);
    }

    const end = performance.now();
    this.results.set(output);

    console.log(`Benchmark completed in ${(end - start).toFixed(2)} ms`);
  }

  theory = {
    title: 'Performance Benchmark Demo (Angular 17+)',
    content: `
      <h3>Benchmarking Angular Signals</h3>
      <p>
        Signals provide precise reactivity with minimal overhead. This demo benchmarks a simple
        computational loop and updates the UI only where needed.
      </p>
      <ul>
        <li>Efficient reactivity using signals.</li>
        <li>Use <code>performance.now()</code> for precise time measurement.</li>
        <li>Great for testing heavy loops or calculations.</li>
      </ul>
    `
  };

  codeExample = `
<input type="number" [(ngModel)]="iterations" />
<button (click)="runBenchmark()">Run Benchmark</button>

<ul>
  <li *ngFor="let item of results()">{{ item }}</li>
</ul>
`.trim();
}
