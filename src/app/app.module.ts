import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Component1Component } from './component1/component1.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // this will get lazy loaded
  { 
    path: 'lazyload',
    loadChildren: () => import('./module/module.module').then(mod => mod.ModuleModule) 
  },

  // default route
  { 
    path: '**',
    component: Component1Component
  }
];

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    // add your routes (forRoot() is only in the root module!)
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent, HelloComponent, Component1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
