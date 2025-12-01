import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponentDemo } from './features/basic-component-demo/basic-component-demo';
 
import { ErrorStacktraceDemo } from './features/error-stacktrace-demo/error-stacktrace-demo';
 import { ImageDirectiveDemo } from './features/image-directive-demo/image-directive-demo';
import { NestedComponentsDemo } from './features/nested-components-demo/nested-components-demo';
import { RouterStandaloneDemo } from './features/router-standalone-demo/router-standalone-demo';
import { StandaloneComponentDemo } from './features/standalone-component-demo/standalone-component-demo';
import { StandaloneExample } from './features/standalone-example/standalone-example';
import { TypedFormsDemo } from './features/typed-forms-demo/typed-forms-demo';
import { CssVariablesDemoComponent } from './features/css-variables-demo/css-variables-demo';
import { DirectiveCompositionDemoComponent } from './features/directive-composition-demo/directive-composition-demo';
import { EsbuildBuildDemoComponent } from './features/esbuild-build-demo/esbuild-build-demo';

 

const routes: Routes = [
  { path: '', redirectTo: 'basic-component-demo', pathMatch: 'full' },
  { path: 'basic-component-demo', component: BasicComponentDemo },
  { path: 'css-variables-demo', component: CssVariablesDemoComponent },
  { path: 'directive-composition-demo', component: DirectiveCompositionDemoComponent },
  { path: 'error-stacktrace-demo', component: ErrorStacktraceDemo },
  { path: 'esbuild-build-demo', component: EsbuildBuildDemoComponent },
  { path: 'image-directive-demo', component: ImageDirectiveDemo },
  { path: 'nested-components-demo', component: NestedComponentsDemo },
  { path: 'router-standalone-demo', component: RouterStandaloneDemo},
  { path: 'standalone-component-demo', component: StandaloneComponentDemo },
  { path: 'standalone-example', component: StandaloneExample},
  { path: 'typed-forms-demo', component: TypedFormsDemo}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V15RoutingModule {}
