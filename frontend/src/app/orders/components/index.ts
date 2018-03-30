import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { OrderListComponent } from './order-list';
import { OrderDetailsComponent } from './order-details';

import { PipesModule } from '../../shared/pipes';
import { MaterialModule } from '../../material';

export const COMPONENTS = [
  OrderListComponent,
  OrderDetailsComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    PipesModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
