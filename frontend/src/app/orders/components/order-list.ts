import { Component, Input } from '@angular/core';
import { Order } from '../models/order';

@Component({
  selector: 'orders-list',
  template: `
  <table>
    <tr>
      <td>1<td>
      <td>2<td>
      <td>3<td>
    </tr>
  </table>
  `,
  styles: [
    `
  `,
  ],
})
export class OrderListComponent {
  @Input() orders: Order;
}
