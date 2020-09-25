import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { routes } from './flats.routes';
import { FlatsComponent } from './components/flats/flats.component';
import { FlatCardComponent } from './components/flat-card/flat-card.component';

@NgModule({
  declarations: [FlatsComponent, FlatCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class FlatsModule { }
