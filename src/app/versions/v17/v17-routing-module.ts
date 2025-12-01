import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponentDemo } from './features/basic-component-demo/basic-component-demo';
import { ConditionalRenderDemo } from './features/conditional-render-demo/conditional-render-demo';
import { ControlFlowForDemo } from './features/control-flow-for-demo/control-flow-for-demo';
import { ControlFlowIfDemo } from './features/control-flow-if-demo/control-flow-if-demo';
import { ControlFlowSwitchDemo } from './features/control-flow-switch-demo/control-flow-switch-demo';
import { ControlflowExample } from './features/controlflow-example/controlflow-example';
import { DynamicListDemo } from './features/dynamic-list-demo/dynamic-list-demo';
import { NestedViewsDemo } from './features/nested-views-demo/nested-views-demo';
import { StandaloneWithControlflowDemo } from './features/standalone-with-controlflow-demo/standalone-with-controlflow-demo';
import { TemplateSyntaxDemo } from './features/template-syntax-demo/template-syntax-demo';
import { UserInteractionDemo } from './features/user-interaction-demo/user-interaction-demo';

 
const routes: Routes = [
  { path: '', redirectTo: 'basic-component-demo', pathMatch: 'full' },
  { path: 'basic-component-demo', component: BasicComponentDemo },
  { path: 'conditional-render-demo', component: ConditionalRenderDemo },
  { path: 'control-flow-for-demo', component: ControlFlowForDemo },
  { path: 'control-flow-if-demo', component: ControlFlowIfDemo },
  { path: 'control-flow-switch-demo', component: ControlFlowSwitchDemo },
  { path: 'controlflow-example', component: ControlflowExample },
  { path: 'dynamic-list-demo', component: DynamicListDemo },
  { path: 'nested-views-demo', component: NestedViewsDemo },
  { path: 'standalone-with-controlflow-demo', component: StandaloneWithControlflowDemo },
  { path: 'template-syntax-demo', component: TemplateSyntaxDemo },
  { path: 'user-interaction-demo', component: UserInteractionDemo }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class V17RoutingModule { }
