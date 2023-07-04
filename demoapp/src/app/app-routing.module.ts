import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './mod1/comp1/comp1.component';
import { Comp2Component } from './mod1/comp2/comp2.component';
import { Child1Component } from './mod1/comp1/child1/child1.component';
import { Child2Component } from './mod1/comp2/child2/child2.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: Comp1Component,
  // },
  {
    component: Comp1Component,
    path: 'comp1path',
    children: [
      {
        path: 'child1',
        component: Child1Component,
      },
    ],
  },
  {
    component: Comp2Component,
    path: 'comp2path',
    children: [
      {
        path: 'child2',
        component: Child2Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
