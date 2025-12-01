import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicSignalFormDemo } from './features/basic-signal-form-demo/basic-signal-form-demo';
import { EventReplayDemo } from './features/event-replay-demo/event-replay-demo';
import { HmrDemo } from './features/hmr-demo/hmr-demo';
import { IncrementalHydrationDemo } from './features/incremental-hydration-demo/incremental-hydration-demo';
import { LinkedSignalDemo } from './features/linked-signal-demo/linked-signal-demo';
import { ResourceApiDemo } from './features/resource-api-demo/resource-api-demo';
import { RouteRenderModeDemo } from './features/route-render-mode-demo/route-render-mode-demo';
import { SSRHybridDemo } from './features/ssr-hybrid-demo/ssr-hybrid-demo';
import { StandaloneDefaultDemo } from './features/standalone-default-demo/standalone-default-demo';
 import { ZonelessExample } from './features/zoneless-example/zoneless-example';

 
const routes: Routes = [
  { path: '', redirectTo: 'basic-signal-form-demo', pathMatch: 'full' },

  { path: 'basic-signal-form-demo', component: BasicSignalFormDemo },
  { path: 'event-replay-demo', component: EventReplayDemo },
  { path: 'hmr-demo', component: HmrDemo },
  { path: 'incremental-hydration-demo', component: IncrementalHydrationDemo },
  { path: 'linked-signal-demo', component: LinkedSignalDemo },
  { path: 'resource-api-demo', component: ResourceApiDemo },
  { path: 'route-render-mode-demo', component: RouteRenderModeDemo },
  { path: 'ssr-hybrid-demo', component: SSRHybridDemo },
  { path: 'standalone-default-demo', component: StandaloneDefaultDemo },
  { path: 'timepicker-demo', component: StandaloneDefaultDemo },
  { path: 'zoneless-example', component: ZonelessExample }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V19RoutingModule {}
