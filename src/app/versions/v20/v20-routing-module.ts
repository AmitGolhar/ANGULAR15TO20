import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicUsageDemo } from './features/basic-usage-demo/basic-usage-demo';
import { DynamicComponentDemo } from './features/dynamic-component-demo/dynamic-component-demo';
import { ExtendedTemplateSyntaxDemo } from './features/extended-template-syntax-demo/extended-template-syntax-demo';
import { HotReloadCliDemo } from './features/hot-reload-cli-demo/hot-reload-cli-demo';
import { PerformanceBenchmarkDemo } from './features/performance-benchmark-demo/performance-benchmark-demo';
import { SignalsStabilityDemo } from './features/signals-stability-demo/signals-stability-demo';
  import { StableHydrationDemo } from './features/stable-hydration-demo/stable-hydration-demo';
import { StandaloneDefaultDemo } from './features/standalone-default-demo/standalone-default-demo';
import { ZonelessModeDemo } from './features/zoneless-mode-demo/zoneless-mode-demo';
import { SSROptimizationsExample } from './features/ssr-optimizations-example/ssr-optimizations-example';
import { SSROptimizationDemo } from './features/ssr-optimization-demo/ssr-optimization-demo';

 
const routes: Routes = [
  { path: '', redirectTo: 'basic-usage-demo', pathMatch: 'full' },

  { path: 'basic-usage-demo', component: BasicUsageDemo },
  { path: 'dynamic-component-demo', component: DynamicComponentDemo },
  { path: 'extended-template-syntax-demo', component: ExtendedTemplateSyntaxDemo },
  { path: 'hot-reload-cli-demo', component: HotReloadCliDemo },
  { path: 'performance-benchmark-demo', component: PerformanceBenchmarkDemo },
  { path: 'signals-stability-demo', component: SignalsStabilityDemo },
  { path: 'ssr-optimization-demo', component: SSROptimizationDemo },
  { path: 'ssr-optimizations-example', component: SSROptimizationsExample },
  { path: 'stable-hydration-demo', component: StableHydrationDemo },
  { path: 'standalone-default-demo', component: StandaloneDefaultDemo },
  { path: 'zoneless-mode-demo', component: ZonelessModeDemo }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V20RoutingModule {}
