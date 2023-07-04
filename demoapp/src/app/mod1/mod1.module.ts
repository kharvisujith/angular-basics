import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Child1Component } from './comp1/child1/child1.component';
import { Child2Component } from './comp2/child2/child2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Comp1Component,
    Comp2Component,
    Child1Component,
    Child2Component,
  ],
  imports: [CommonModule, RouterModule],
})
export class Mod1Module {}
