import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-esbuild-build-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './esbuild-build-demo.html',
  styleUrls: ['./esbuild-build-demo.scss'],
})
export class EsbuildBuildDemoComponent {

  theory = {
    title: 'ESBuild / Angular Build System — Modern Angular (v16 → v20)',
    content: `
      <h3>What is ESBuild?</h3>
      <p><strong>ESBuild</strong> is a modern JavaScript/TypeScript bundler and minifier written in Go.  
      Its primary strengths:</p>
      <ul>
        <li><strong>Extremely fast builds</strong> — 10x to 100x faster than Webpack.</li>
        <li><strong>Instant incremental rebuilds</strong> for dev mode.</li>
        <li>Native support for <strong>TS, JS, CSS, JSON, assets</strong>.</li>
        <li>Built-in <strong>tree-shaking</strong> and <strong>minification</strong>.</li>
      </ul>

      <h3>Why ESBuild matters in Angular 16+?</h3>
      <p>Angular introduced a new build system based on ESBuild + Vite-like behavior:</p>
      <ul>
        <li><strong>applicationBuilder</strong> (Angular 16+) uses ESBuild in the pipeline.</li>
        <li><strong>esbuild-based browser builder</strong> became the default in Angular 17/18+. </li>
        <li>Massive improvement in rebuild times during <em>ng serve</em>.</li>
        <li>Faster production builds with smaller output bundles.</li>
        <li>Simplifies the pipeline (no heavy Webpack configs).</li>
      </ul>

      <h3>Where does ESBuild run inside Angular?</h3>
      <p>Angular uses ESBuild for:</p>
      <ul>
        <li>TypeScript <strong>transpilation</strong></li>
        <li><strong>Bundling</strong> and module graph creation</li>
        <li><strong>Minification</strong> in production</li>
        <li><strong>Tree-shaking</strong> unused code</li>
        <li><strong>CSS/HTML asset optimization</strong></li>
      </ul>

      <h3>Angular Build Systems Comparison</h3>
      <ul>
        <li><strong>Webpack (Angular v2–v14)</strong> — slower, heavy, complex.</li>
        <li><strong>ESBuild Builder (Angular 16+)</strong> — extremely fast bundling/minifying.</li>
        <li><strong>Vite + ESBuild</strong> — used internally for dev server (ng serve).</li>
      </ul>

      <h3>Production vs Development behavior</h3>
      <ul>
        <li><strong>Development</strong>: ESBuild is used with fast incremental rebuilds.</li>
        <li><strong>Production</strong>: ESBuild performs minification + treeshaking + bundling.</li>
      </ul>

      <h3>How to enable ESBuild in Angular 16+?</h3>
      <p>Angular CLI automatically uses it, but you can explicitly opt-in using:</p>
      <pre><code>ng new my-app --builder=application</code></pre>

      <p>Or update <code>angular.json</code>:</p>
      <pre><code>"builder": "@angular-devkit/build-angular:browser-esbuild"</code></pre>

      <h3>Why does ESBuild matter for large Angular apps?</h3>
      <ul>
        <li>Reduces build time from minutes → seconds.</li>
        <li>Improves DX (developer experience).</li>
        <li>Better bundle sizes.</li>
        <li>Cleaner build pipeline.</li>
      </ul>
    `
  };

  codeExample = `// Basic standalone ESBuild build script
// (Useful for custom bundling outside Angular CLI)

import * as esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/main.ts'],   // Entry file
  bundle: true,                    // Bundle JS/TS
  minify: true,                    // Production minification
  sourcemap: true,                 // Dev tools support
  format: 'esm',                   // Modern output
  target: ['es2020'],              // Browser target
  outdir: 'dist',                  // Output directory
  splitting: true,                 // Code-splitting chunks
  treeShaking: true,
  loader: { '.ts': 'ts' },         // TypeScript support
}).catch(() => process.exit(1));
  `;

  // EXTRA: Example of Angular's new application builder config
  angularBuilderConfig = `// angular.json example (Angular 16+)
{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser-esbuild",
          "options": {
            "outputPath": "dist/my-app",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": ["src/styles.scss"],
            "scripts": []
          }
        }
      }
    }
  }
}
`;

  viteComparison = `// Angular 17+ dev server uses a Vite-like pipeline
// Faster HMR, incremental rebuilds, ESBuild transforms

export default {
  esbuild: {
    minify: true,
    treeShaking: true,
    target: 'es2020',
  }
}
`;

}
