import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'route1', component: Component2Component },
  { path: '', component: Component3Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Component2Component, Component3Component]
})
export class ModuleModule { }