import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-css-variables-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './css-variables-demo.html',
  styleUrls: ['./css-variables-demo.scss'],
})
export class CssVariablesDemoComponent {

  theoryBlocks = [
    {
      title: 'What are CSS Variables (Custom Properties)?',
      content: `
        <p>CSS Variables—also known as custom properties—are native browser variables defined using <code>--variable-name</code> and accessed via <code>var(--variable-name)</code>.</p>
        <p>They work at runtime, follow normal CSS cascading rules, and can be updated dynamically—unlike SCSS/LESS variables.</p>
      `
    },  
    {
      title: 'Why CSS Variables Are Useful in Angular (v15 - v20)',
      content: `
        <ul>
          <li>They enable dynamic theming (light/dark/brand themes) without rebuilding SCSS.</li>
          <li>They support runtime updates using JavaScript or Angular services.</li>
          <li>They pass through view encapsulation boundaries, making them ideal for component libraries.</li>
          <li>One variable change updates styles across all components instantly.</li>
        </ul>
      `
    },
    {
      title: 'Angular Application Architecture Benefit',
      content: `
        <ul>
          <li>Global styles go in <code>:root</code> inside <strong>styles.scss</strong>.</li>
          <li>Theming can be done by toggling classes on <code>&lt;html&gt;</code> or <code>&lt;body&gt;</code>.</li>
          <li>CSS variables integrate well with standalone components introduced from Angular v15 onwards.</li>
        </ul>
      `
    }
  ];

  codeExamples = {
    globalCss: `:root {
  --main-bg-color: #ffffff;
  --text-color: #222222;
  --primary-color: #1565c0;
  --padding-base: 16px;
  --border-radius: 6px;
  --font-family-base: 'Inter', sans-serif;
}

/* Example Dark Theme Toggle */
.dark-theme {
  --main-bg-color: #121212;
  --text-color: #e0e0e0;
  --primary-color: #90caf9;
}`,
    componentHtml: `<div class="container">
  <h1>Welcome to CSS Variables Demo</h1>
  <p>This component uses global + local CSS variables for styling.</p>
  <button class="btn-primary">Primary Action</button>
</div>`,
    componentScss: `:host {
  font-family: var(--font-family-base);
  background: var(--main-bg-color);
  color: var(--text-color);
  display: block;
  padding: var(--padding-base);
}

.container {
  padding: calc(var(--padding-base) * 2);
  background-color: var(--main-bg-color);
  border-radius: var(--border-radius);
  border: 1px solid rgba(0,0,0,0.1);
}

h1 {
  color: var(--primary-color);
  margin-bottom: var(--padding-base);
}

.btn-primary {
  background: var(--primary-color);
  color: #fff;
  padding: 0.6rem 1.4rem;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
}`
  };

}
