import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Feature {
  path: string;
  label: string;
}

interface VersionItem {
  key: string;
  label: string;
  features: Feature[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
  host: {
    '[class.open]': 'open'   // 💥 THIS IS THE MOBILE FIX
  }
})
export class Sidebar {
  @Input() open = false;
  @Output() closeSidebar = new EventEmitter<void>();

  expanded: string | null = null;

  toggle(key: string) {
    this.expanded = this.expanded === key ? null : key;
  }
  
  versions: VersionItem[] = [
    {
      key: 'v15',
      label: 'Angular v15',
      features: [
        { path: 'basic-component-demo', label: 'Basic Component Demo' },
        { path: 'css-variables-demo', label: 'CSS Variables Demo' },
        { path: 'directive-composition-demo', label: 'Directive Composition Demo' },
        { path: 'error-stacktrace-demo', label: 'Error Stacktrace Demo' },
        { path: 'esbuild-build-demo', label: 'ESBuild Build Demo' },
        { path: 'image-directive-demo', label: 'Image Directive Demo' },
        { path: 'nested-components-demo', label: 'Nested Components Demo' },
        { path: 'router-standalone-demo', label: 'Router Standalone Demo' },
        { path: 'standalone-component-demo', label: 'Standalone Component Demo' },
        { path: 'standalone-example', label: 'Standalone Example' },
        { path: 'typed-forms-demo', label: 'Typed Forms Demo' }
      ]
    },
    {
      key: 'v16',
      label: 'Angular v16',
      features: [
        { path: 'signals-example', label: 'Signals Example' },
        { path: 'signals-counter-demo', label: 'Signals Counter Demo' },
        { path: 'reactive-form-with-signals', label: 'Reactive Form (Signals)' },
        { path: 'simple-routing-demo', label: 'Simple Routing Demo' },
        { path: 'image-optimization-demo', label: 'Image Optimization Demo' },
        { path: 'lazy-loaded-section-demo', label: 'Lazy-loaded Section Demo' },
        { path: 'ng-content-slot-demo', label: 'Ng-content Slot Demo' },
        { path: 'dynamic-component-demo', label: 'Dynamic Component Demo' },
        { path: 'performance-bench-demo', label: 'Performance Benchmark Demo' },
        { path: 'ssr-basic-page', label: 'SSR Basic Page' },
        { path: 'theme-switcher-demo', label: 'Theme Switcher Demo' }
      ]
    },
    {
      key: 'v17',
      label: 'Angular v17',
      features: [
        { path: 'basic-component-demo', label: 'Basic Component Demo' },
        { path: 'conditional-render-demo', label: 'Conditional Render Demo' },
        { path: 'control-flow-for-demo', label: 'Control-Flow For Demo' },
        { path: 'control-flow-if-demo', label: 'Control-Flow If Demo' },
        { path: 'control-flow-switch-demo', label: 'Control-Flow Switch Demo' },
        { path: 'controlflow-example', label: 'Controlflow Example' },
        { path: 'dynamic-list-demo', label: 'Dynamic List Demo' },
        { path: 'nested-views-demo', label: 'Nested Views Demo' },
        { path: 'standalone-with-controlflow-demo', label: 'Standalone w/ ControlFlow Demo' },
        { path: 'template-syntax-demo', label: 'Template Syntax Demo' },
        { path: 'user-interaction-demo', label: 'User Interaction Demo' }
      ]
    },
    {
      key: 'v18',
      label: 'Angular v18',
      features: [
        { path: 'basic-component-demo', label: 'Basic Component Demo' },
        { path: 'demo-list-page', label: 'Demo List Page' },
        { path: 'dynamic-import-demo', label: 'Dynamic Import Demo' },
        { path: 'hydration-demo', label: 'Hydration Demo' },
        { path: 'optimized-image-demo', label: 'Optimized Image Demo' },
        { path: 'performance-profile-demo', label: 'Performance Profile Demo' },
        { path: 'responsive-layout-demo', label: 'Responsive Layout Demo' },
        { path: 'server-side-render-demo', label: 'Server-Side Render Demo' },
        { path: 'theme-switcher-demo', label: 'Theme Switcher Demo' },
        { path: 'view-transitions-example', label: 'View Transitions Example' },
        { path: 'zoneless-change-detection-demo', label: 'Zoneless Change Detection Demo' }
      ]
    },
    {
      key: 'v19',
      label: 'Angular v19',
      features: [
        { path: 'basic-signal-form-demo', label: 'Basic Signal Form Demo' },
        { path: 'event-replay-demo', label: 'Event Replay Demo' },
        { path: 'hmr-demo', label: 'HMR Demo' },
        { path: 'incremental-hydration-demo', label: 'Incremental Hydration Demo' },
        { path: 'linked-signal-demo', label: 'Linked Signal Demo' },
        { path: 'resource-api-demo', label: 'Resource API Demo' },
        { path: 'route-render-mode-demo', label: 'Route Render Mode Demo' },
        { path: 'ssr-hybrid-demo', label: 'SSR Hybrid Demo' },
        { path: 'standalone-default-demo', label: 'Standalone Default Demo' },
        { path: 'timepicker-demo', label: 'Timepicker Demo' },
        { path: 'zoneless-example', label: 'Zoneless Example' }
      ]
    },
    {
      key: 'v20',
      label: 'Angular v20',
      features: [
        { path: 'basic-usage-demo', label: 'Basic Usage Demo' },
        { path: 'dynamic-component-demo', label: 'Dynamic Component Demo' },
        { path: 'extended-template-syntax-demo', label: 'Extended Template Syntax Demo' },
        { path: 'hot-reload-cli-demo', label: 'Hot Reload CLI Demo' },
        { path: 'performance-benchmark-demo', label: 'Performance Benchmark Demo' },
        { path: 'signals-stability-demo', label: 'Signals Stability Demo' },
        { path: 'ssr-optimization-demo', label: 'SSR Optimization Demo' },
        { path: 'ssr-optimizations-example', label: 'SSR Optimizations Example' },
        { path: 'stable-hydration-demo', label: 'Stable Hydration Demo' },
        { path: 'standalone-default-demo', label: 'Standalone Default Demo' },
        { path: 'zoneless-mode-demo', label: 'Zoneless Mode Demo' }
      ]
    }
  ];
}
