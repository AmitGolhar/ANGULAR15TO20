import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-composition-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive-composition-demo.html',
  styleUrls: ['./directive-composition-demo.scss'],
})
export class DirectiveCompositionDemoComponent {

  theoryBlocks = [
    {
      title: 'What is the Directive Composition API (Angular v15–v20)',
      content: `
        <p>The <strong>Directive Composition API</strong> lets you attach standalone directives directly to a component’s host element using the 
        <code>hostDirectives</code> property — <em>without adding directives in your template</em>.</p>

        <p>This means you can compose behavior into components exactly like React Hooks or Vue Mixins, but in an Angular way.  
        It improves modularity, removes template noise, and creates reusable behavior units.</p>
      `
    },
    {
      title: 'How <code>hostDirectives</code> Works',
      content: `
        <p>You declare directives inside the component decorator:</p>

        <pre><code>@Component({
  selector: 'my-button',
  template: 'Click me',
  hostDirectives: [ButtonBehaviorDirective]
})</code></pre>

        <p>This automatically applies <code>ButtonBehaviorDirective</code> to the component's host element.</p>

        <p>No need to do:</p>
        <pre><code>&lt;my-button appButtonBehavior&gt;&lt;/my-button&gt;</code></pre>
      `
    },
    {
      title: 'Exposing Directive Inputs & Outputs',
      content: `
        <p>Inputs and Outputs from host directives are <strong>not</strong> exposed by default.</p>

        <p>You can expose them like:</p>

        <pre><code>hostDirectives: [{
  directive: HoverHighlightDirective,
  inputs: ['color', 'speed'],
  outputs: ['hovered']
}]</code></pre>

        <p>Now your component acts as if the inputs/outputs belong to it directly.</p>
      `
    },
    {
      title: 'When Should You Use It?',
      content: `
        <ul>
          <li>To share UI behaviors (hover, focus, ripple, animation, drag-drop).</li>
          <li>To decrease template clutter.</li>
          <li>To build scalable UI component libraries.</li>
          <li>To add accessibility behaviors across many components.</li>
          <li>To attach logic without inheritance and without code duplication.</li>
        </ul>
      `
    }
  ];

  codeExamples = {
    directiveDefinitions: `import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {

  @Input() color = 'yellow';
  @Input() transition = '0.3s';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = 'background-color ' + this.transition;
  }

  @HostListener('mouseenter') onEnter() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') onLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}`,
    componentUsingHostDirectives: `import { Component } from '@angular/core';
import { HoverHighlightDirective } from './hover-highlight.directive';

@Component({
  selector: 'app-box',
  standalone: true,
  template: \`
    <p>This component uses a host directive!</p>
  \`,
  hostDirectives: [{
    directive: HoverHighlightDirective,
    inputs: ['color', 'transition']  // exposed to the component consumer
  }]
})
export class BoxComponent { }`
  };

}
