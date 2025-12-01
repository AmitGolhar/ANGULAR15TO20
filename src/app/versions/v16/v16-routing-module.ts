import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicComponentDemo } from './features/dynamic-component-demo/dynamic-component-demo';
import { ImageOptimizationDemo } from './features/image-optimization-demo/image-optimization-demo';
import { LazyLoadedSectionDemo } from './features/lazy-loaded-section-demo/lazy-loaded-section-demo';
import { NgContentSlotDemo } from './features/ng-content-slot-demo/ng-content-slot-demo';
import { PerformanceBenchDemo } from './features/performance-bench-demo/performance-bench-demo';
import { ReactiveFormWithSignals } from './features/reactive-form-with-signals/reactive-form-with-signals';
import { SignalsCounterDemo } from './features/signals-counter-demo/signals-counter-demo';
import { SignalsExample } from './features/signals-example/signals-example';
import { SimpleRoutingDemo } from './features/simple-routing-demo/simple-routing-demo';
import { SsrBasicPage } from './features/ssr-basic-page/ssr-basic-page';
import { ThemeSwitcherDemo } from './features/theme-switcher-demo/theme-switcher-demo';

const routes: Routes = [
  { path: '', redirectTo: 'signals-example', pathMatch: 'full' },

  { path: 'signals-example', component: SignalsExample },
  { path: 'signals-counter-demo', component: SignalsCounterDemo },
  { path: 'reactive-form-with-signals', component: ReactiveFormWithSignals },
  { path: 'simple-routing-demo', component: SimpleRoutingDemo },
  { path: 'image-optimization-demo', component: ImageOptimizationDemo },
  { path: 'lazy-loaded-section-demo', component: LazyLoadedSectionDemo },
  { path: 'ng-content-slot-demo', component: NgContentSlotDemo },
  { path: 'dynamic-component-demo', component: DynamicComponentDemo },
  { path: 'performance-bench-demo', component: PerformanceBenchDemo },
  { path: 'ssr-basic-page', component: SsrBasicPage },
  { path: 'theme-switcher-demo', component: ThemeSwitcherDemo },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class V16RoutingModule {}
