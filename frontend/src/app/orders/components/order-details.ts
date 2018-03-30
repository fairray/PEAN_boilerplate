import { Component, Input, Output } from '@angular/core';
import { Order } from '../models/order';

@Component({
  selector: 'app-order-detail',
  template: `
  <mat-card *ngIf="order">
    <mat-card-title-group>
      <mat-card-title>{{ title }}</mat-card-title>
    </mat-card-title-group>
  </mat-card>
  `,
  styles: [
    `
  `,
  ],
})
export class OrderDetailsComponent {
  @Input() order: Order;

  get title() {
    return this.order.title;
  }
}
