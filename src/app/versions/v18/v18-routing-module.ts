import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponentDemo } from './features/basic-component-demo/basic-component-demo';
import { DemoListPage } from './features/demo-list-page/demo-list-page';
import { DynamicImportDemo } from './features/dynamic-import-demo/dynamic-import-demo';
import { HydrationDemo } from './features/hydration-demo/hydration-demo';
import { OptimizedImageDemo } from './features/optimized-image-demo/optimized-image-demo';
import { PerformanceProfileDemo } from './features/performance-profile-demo/performance-profile-demo';
import { ResponsiveLayoutDemo } from './features/responsive-layout-demo/responsive-layout-demo';
import { ServerSideRenderDemo } from './features/server-side-render-demo/server-side-render-demo';
import { ThemeSwitcherDemo } from './features/theme-switcher-demo/theme-switcher-demo';
import { ViewTransitionsExample } from './features/view-transitions-example/view-transitions-example';
import { ZonelessChangeDetectionDemo } from './features/zoneless-change-detection-demo/zoneless-change-detection-demo';

 
const routes: Routes = [
  { path: '', redirectTo: 'basic-component-demo', pathMatch: 'full' },
  { path: 'basic-component-demo', component: BasicComponentDemo },
  { path: 'demo-list-page', component: DemoListPage },
  { path: 'dynamic-import-demo', component: DynamicImportDemo },
  { path: 'hydration-demo', component: HydrationDemo },
  { path: 'optimized-image-demo', component: OptimizedImageDemo },
  { path: 'performance-profile-demo', component: PerformanceProfileDemo },
  { path: 'responsive-layout-demo', component: ResponsiveLayoutDemo },
  { path: 'server-side-render-demo', component: ServerSideRenderDemo },
  { path: 'theme-switcher-demo', component: ThemeSwitcherDemo },
  { path: 'view-transitions-example', component: ViewTransitionsExample },
  { path: 'zoneless-change-detection-demo', component: ZonelessChangeDetectionDemo }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V18RoutingModule {}
