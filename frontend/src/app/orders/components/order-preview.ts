import { Component, Input } from '@angular/core';
import { Order } from '../models/order';

@Component({
  selector: 'bc-order-preview',
  template: `
    <a [routerLink]="['/orders', id]">
      <mat-card>
        <mat-card-title-group>
          <img mat-card-sm-image *ngIf="thumbnail" [src]="thumbnail"/>
          <mat-card-title>{{ title | bcEllipsis:35 }}</mat-card-title>
          <mat-card-subtitle *ngIf="subtitle">{{ subtitle | bcEllipsis:40 }}</mat-card-subtitle>
        </mat-card-title-group>
        <mat-card-content>
          <p *ngIf="description">{{ description | bcEllipsis }}</p>
        </mat-card-content>
        <mat-card-footer>
          <bc-order-authors [order]="order"></bc-order-authors>
        </mat-card-footer>
      </mat-card>
    </a>
  `,
  styles: [
    `
  `,
  ],
})
export class OrderPreviewComponent {
  @Input() order: Order;

  get id() {
    return this.order.id;
  }

  get title() {
    return this.order.title;
  }
}
