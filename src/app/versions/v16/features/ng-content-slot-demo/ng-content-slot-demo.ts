import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-content-slot-demo',
  templateUrl: './ng-content-slot-demo.html',
  styleUrl: './ng-content-slot-demo.scss', // unchanged as required
})
export class NgContentSlotDemo {

  theory = {
    title: 'Angular ng-content Slots — Complete Deep Dive (Content Projection)',
    content: `
      <h3>What is ng-content?</h3>
      <p>
        <strong>ng-content</strong> enables <strong>content projection</strong>, allowing a parent component
        to pass custom HTML content into a child component’s template.  
        This is Angular's version of “slots” (similar to Web Components).
      </p>

      <h3>Why ng-content Slots Matter</h3>
      <ul>
        <li><strong>Reusable UI containers</strong> — cards, modals, tabs, layouts.</li>
        <li><strong>Flexible structure</strong> — parent controls content, child controls layout.</li>
        <li><strong>Multiple slots support</strong> via <code>select</code> attribute.</li>
        <li><strong>Cleaner architecture</strong> — separate content from layout/logic.</li>
        <li>Perfect for <strong>design systems</strong> and <strong>UI libraries</strong>.</li>
      </ul>

      <h3>Single-Slot Projection (Basic)</h3>
      <pre><code>&lt;ng-content&gt;&lt;/ng-content&gt;</code></pre>

      <h3>Multi-Slot Projection (Advanced)</h3>
      <p>You can define multiple content areas:</p>

      <pre><code>&lt;div class="card-header"&gt;
  &lt;ng-content select="[card-title]"&gt;&lt;/ng-content&gt;
&lt;/div&gt;

&lt;div class="card-body"&gt;
  &lt;ng-content select="[card-body]"&gt;&lt;/ng-content&gt;
&lt;/div&gt;

&lt;div class="card-footer"&gt;
  &lt;ng-content select="[card-footer]"&gt;&lt;/ng-content&gt;
&lt;/div&gt;</code></pre>

      <p>Usage from parent:</p>

      <pre><code>&lt;card-component&gt;
  &lt;h2 card-title&gt;Title Area&lt;/h2&gt;
  &lt;p card-body&gt;Content goes here...&lt;/p&gt;
  &lt;button card-footer&gt;Save&lt;/button&gt;
&lt;/card-component&gt;</code></pre>

      <h3>Default Slot (Fallback Content)</h3>
      <p>If the parent provides no projected content, you can show fallback HTML:</p>

      <pre><code>&lt;ng-content&gt;No content provided&lt;/ng-content&gt;</code></pre>

      <h3>ng-content vs @Input()</h3>
      <p>Common interview question:</p>
      <ul>
        <li><strong>@Input()</strong> → pass data</li>
        <li><strong>ng-content</strong> → pass HTML/template</li>
      </ul>

      <h3>Lifecycle Hook for Projected Content</h3>
      <p>
        To query projected DOM, you use <strong>@ContentChild</strong> or <strong>@ContentChildren</strong>:
      </p>

      <pre><code>@ContentChild('titleSlot') titleEl!: ElementRef;</code></pre>

      <p>Runs after:</p>
      <pre><code>ngAfterContentInit()</code></pre>

      <h3>Limitations of ng-content (MUST KNOW)</h3>
      <ul>
        <li>Projected content is rendered in the parent component’s context, not child.</li>
        <li>ng-content cannot apply structural directives like *ngIf inside projection.</li>
        <li>Child cannot modify parent’s projected variables directly.</li>
      </ul>

      <h3>ng-content vs ngTemplateOutlet (Advanced)</h3>
      <ul>
        <li><strong>ng-content</strong> → simple projection, static</li>
        <li><strong>ngTemplateOutlet</strong> → dynamic templates, reusable, more flexible</li>
      </ul>

      <pre><code>&lt;ng-container 
  *ngTemplateOutlet="templateRef; context: { $implicit: data }"&gt;
&lt;/ng-container&gt;</code></pre>

      <h3>Common Real-World Use Cases</h3>
      <ul>
        <li>Card containers</li>
        <li>Modal dialog structures</li>
        <li>Accordion body & header</li>
        <li>Tab components</li>
        <li>UI library component slots</li>
      </ul>

      <h3>Interview Questions You Can Now Answer</h3>
      <ul>
        <li>What is content projection?</li>
        <li>Difference between single-slot and multi-slot projection?</li>
        <li>How does Angular project content internally?</li>
        <li>How do you access projected content from the child?</li>
        <li>Difference between ng-content and ngTemplateOutlet?</li>
      </ul>
    `
  };

  codeExample = `
<!-- Parent Component -->
<card-component>
  <h3>Projected Title</h3>
  <p>Projected content inside the card.</p>
</card-component>

<!-- Card Component -->
@Component({
  selector: 'card-component',
  template: '<div class="card"><ng-content></ng-content></div>'
})
export class CardComponent {}

/* Multi-Slot Example */
@Component({
  selector: 'card-component',
  template: \`
    <div class="header">
      <ng-content select="[header]"></ng-content>
    </div>
    <div class="body">
      <ng-content select="[body]"></ng-content>
    </div>
    <div class="footer">
      <ng-content select="[footer]"></ng-content>
    </div>
  \`
})
export class MultiSlotCardComponent {}
`.trim();

}
