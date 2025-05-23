import { UserLogin } from "./UserLogin";
import { Order } from "./Order";

export class Customer extends UserLogin {
  private orders: Order[] = [];
  login(): void {
    console.log(`✅ customer ${this.firstname + this.lastname + } logged in.`);
  }

  register(): void {
    console.log(`📋 customer ${this.firstname + this.lastname} registered.`);
  }

  addOrder(order: Order): void {
        this.orders.push(order);
        console.log(` Order ${order.orderId} added for customer ${this.firstname + this.lastname}.`);
        
    }

    getOrders(): Order[] {
        return this.orders;
    }
}